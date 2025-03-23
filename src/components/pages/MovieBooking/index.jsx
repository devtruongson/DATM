import { Empty, Select, Spin } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleBuildShowTimes } from '../../../helpers/handleFilterShowtimes';
import { handleReBuildGenres } from '../../../helpers/handleReBuildGenres';
import { useGetAllGenres } from '../../../services/genres/getAllGenres';
import { useGetDetailMovie } from '../../../services/movie/getMovieDetail';
import { useGetListProvince } from '../../../services/province/getAllProvince';
import { useGetShowtimes } from '../../../services/todo/useGetTodo';
import SearchInput from '../../atoms/Input/SearchInput';
import LabelCommon from '../../atoms/LabelCommon';
import ListCategories from '../../molecules/ListCategories';
import Cinemas from '../../organisms/Cinemas';
import ListCalendar from '../../organisms/ListCalendar/ListCalendar';
import Preview from '../../organisms/Preview';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';

const MovieBooking = () => {
    const [currentDate, setCurrentDate] = useState('');

    const { id } = useParams();
    const { data: dataCall, isLoading } = useGetDetailMovie({
        payload: { id: id },
        enabled: true,
    });
    const { data: dataShowTimesQuery, isLoading: isLoadingShowTimes } = useGetShowtimes({
        queryConfig: { enabled: true },
    });

    const dataDetail = useMemo(() => dataCall?.data || null, [dataCall]);
    const dataShowTime = useMemo(
        () => (dataShowTimesQuery?.data && handleBuildShowTimes(dataShowTimesQuery?.data, id)) || null,
        [dataShowTimesQuery, id],
    );

    const handleBuilderShowtimesForDate = (dataBuider) => {
        let dataBuild = [];

        dataBuider.forEach((item) => {
            const date = item.date;
            const isExp = new Date(item.start_time).getTime() < Date.now();
            item.isExp = isExp;
            const dataItem = {
                id: item.id,
                date: item.date,
                data: [
                    {
                        ...item,
                    },
                ],
            };
            const index = dataBuild.findIndex((dataBuildItem) => dataBuildItem.date === date);
            if (index === -1) {
                dataBuild.push(dataItem);
            } else {
                dataBuild[index].data.push(item);
            }
        });

        dataBuild = dataBuild.map((dataBuildItem) => {
            const dataNews = [];
            dataBuildItem.data.forEach((dataNewsItem) => {
                const value = dataNewsItem.screen.cinema.id;
                const index = dataNews.findIndex((dataNewsItem) => dataNewsItem?.cinema_id === value);
                if (index === -1) {
                    dataNews.push({
                        cinema_id: value,
                        label: dataNewsItem.screen.cinema.name,
                        province_id: dataNewsItem.screen.cinema.province_id,
                        item: [dataNewsItem],
                    });
                } else {
                    dataNews[index].item.push(dataNewsItem);
                }
            });
            dataBuildItem.data = dataNews;
            return dataBuildItem;
        });
        dataBuild.sort((a, b) => new Date(a.date) - new Date(b.date));
        return dataBuild;
    };

    const { data: dataGenres } = useGetAllGenres({});
    const genres = useMemo(
        () =>
            dataGenres?.data?.map((item) => {
                return handleReBuildGenres(item);
            }) || [],
        [dataGenres],
    );
    const { data: dataProvinceQuery } = useGetListProvince({});
    const dataProvince = useMemo(() => (dataProvinceQuery?.data ? dataProvinceQuery?.data : []), [dataProvinceQuery]);

    const [filterLocation, setFilterLocation] = useState(null);

    const handleFilterLocation = (value) => {
        setFilterLocation(value);
    };

    const handleSearchFilterLocation = (value) => {
        console.log('search:', value);
    };

    useEffect(() => {
        if (dataShowTime && dataShowTime.length > 0) {
            if (!filterLocation) {
                const data = handleBuilderShowtimesForDate(dataShowTime);
                if (data.length > 0) {
                    setDataShowTimeRender(data);
                }
            } else {
                const data = handleBuilderShowtimesForDate(dataShowTime).map((item) => {
                    item.data = item.data.filter((itemChild) => itemChild.province_id === filterLocation);
                    return item;
                });
                setDataShowTimeRender(data);
            }
        }
    }, [filterLocation, dataShowTime]);

    const [dataShowTimeRender, setDataShowTimeRender] = useState([]);

    useEffect(() => {
        if (dataShowTime && dataShowTime.length > 0) {
            const data = handleBuilderShowtimesForDate(dataShowTime);
            if (data.length > 0) {
                setCurrentDate(data[0].date);
                setDataShowTimeRender(data);
            }
        }
    }, [dataShowTime]);

    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="pt-[20px]">
                    {isLoading ? (
                        <>
                            <div className="flex justify-center flex-col gap-4 items-center">
                                <Spin size="large" />
                                <p>Đang tải danh sách phòng vé</p>
                            </div>
                        </>
                    ) : (
                        dataDetail && <Preview data={dataDetail} />
                    )}
                </div>
            </ContainerWapper>

            <div className="mt-[40px]">
                {isLoadingShowTimes ? (
                    <>
                        <div className="flex justify-center flex-col gap-4 items-center">
                            <Spin size="large" />
                            <p>Đang tải danh sách phòng vé</p>
                        </div>
                    </>
                ) : dataShowTime?.length > 0 ? (
                    <>
                        <ListCalendar
                            currentDate={currentDate}
                            setCurrentDate={setCurrentDate}
                            list={dataShowTimeRender}
                        />
                        <ContainerWapper>
                            <Select
                                style={{ width: 200, marginTop: 30 }}
                                value={filterLocation}
                                optionFilterProp="label"
                                showSearch
                                onChange={handleFilterLocation}
                                onSearch={handleSearchFilterLocation}
                                options={[
                                    {
                                        value: null,
                                        label: 'Tất cả khu vực',
                                    },
                                    ...dataProvince.map((item) => {
                                        return {
                                            value: item.id,
                                            label: item.name,
                                        };
                                    }),
                                ]}
                            />
                        </ContainerWapper>
                    </>
                ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
            </div>

            <ContainerWapper>
                <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center mt-[40px] lg:gap-0 gap-[20px]">
                    <div
                        className="lg:w-[70%] w-[95%] rounded-[10px] overflow-hidden bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        {isLoadingShowTimes ? (
                            <>
                                <div className="flex justify-center flex-col gap-4 items-center">
                                    <Spin size="large" />
                                    <p>Đang tải danh sách phòng vé</p>
                                </div>
                            </>
                        ) : dataShowTime.length ? (
                            currentDate &&
                            dataShowTimeRender
                                .find((itemFind) => itemFind.date === currentDate)
                                .data.map((item, index) => (
                                    <Cinemas key={index} data={item} filmId={id} currentDate={currentDate} />
                                ))
                        ) : (
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        )}
                    </div>

                    <div
                        className="lg:w-[28%] w-[95%] rounded-[10px] p-[24px] bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <SearchInput />
                        <LabelCommon label={'browse title'} />

                        <ListCategories data={genres} />
                    </div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default MovieBooking;
