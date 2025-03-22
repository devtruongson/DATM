import { Breadcrumb, Button, Empty, Spin, Tabs } from 'antd';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { handleBuildShowTimes } from '../../../helpers/handleFilterShowtimes';
import { hanldeGetIdViewYoutobe } from '../../../helpers/handleGetIdVideoProview';
import { useGetDetailMovie } from '../../../services/movie/getMovieDetail';
import { useGetShowtimes } from '../../../services/todo/useGetTodo';
import BasicTemplate from '../../templates/BasicTemplate';
import ContainerWapper from '../../templates/ContainerWapper';

const data = {
    id: 1,
    name: 'Aquaman',
    trailer_url: 'https://www.youtube.com/embed/d_S6HyolN_w',
    categories: [
        {
            id: 1,
            name: 'ACTION',
        },
        {
            id: 22,
            name: 'Adventure',
        },
        {
            id: 3,
            name: 'Fantasy',
        },
    ],
    graphics: [
        {
            id: 1,
            name: '2D',
        },
        {
            id: 2,
            name: '3D',
        },
        {
            id: 3,
            name: '4D',
        },
    ],
    languages: ['ENGLISH', 'HINDI', 'TAMIL'],
    duration: '2:23', // thoi luong
    date: '2025/01/01',
    like: 85,
    votes: 52291,
    rate: 4.5,
    banners: ['', ''],
};

const list = Array.from({ length: 6 }, (_, i) => {
    return {
        id: i + 1,
        name: 'Aquaman',
        thumbnail: '',
        trailer_url: 'https://www.youtube.com/embed/d_S6HyolN_w',
        categories: [
            {
                id: 1,
                name: 'ACTION',
            },
            {
                id: 22,
                name: 'Adventure',
            },
            {
                id: 3,
                name: 'Fantasy',
            },
        ],
        graphics: [
            {
                id: 1,
                name: '2D',
            },
            {
                id: 2,
                name: '3D',
            },
            {
                id: 3,
                name: '4D',
            },
        ],
        languages: ['ENGLISH', 'HINDI', 'TAMIL'],
        duration: '2:23', // thoi luong
        date: '2025/01/01',
        like: 85,
        votes: 52291,
        banners: ['', ''],
        rate: 4.5,
    };
});

const movieTrending = [
    {
        id: 1,
        name: 'KGF',
        view: 1050,
    },
    {
        id: 2,
        name: 'Pretham 2    ',
        view: 100,
    },
    {
        id: 3,
        name: 'Maari2',
        view: 50,
    },
    {
        id: 4,
        name: 'Njan Prakasan',
        view: 1050,
    },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Home = () => {
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
        const dataBuilderData = [];
        dataBuider.forEach((item) => {
            const index = dataBuilderData.findIndex((dataItem) => dataItem.date === item.date);
            if (index === -1) {
                dataBuilderData.push({
                    date: item.date,
                    item: [item],
                });
            } else {
                dataBuilderData[index].item.push(item);
            }
        });
        return dataBuilderData;
    };

    return (
        <BasicTemplate>
            {isLoading ? (
                <div className="h-[70vh] w-full flex justify-center items-center">
                    <div className="flex justify-center flex-col gap-4 items-center">
                        <Spin size="large" />
                        <p>Đang tải phim</p>
                    </div>
                </div>
            ) : (
                dataDetail && (
                    <ContainerWapper>
                        <div className="pt-10">
                            <Breadcrumb className="font-semibold text-[18px]">
                                <Breadcrumb.Item>
                                    <a href="/">Trang chủ</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>{dataDetail?.title}</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="flex gap-6 mt-6">
                                <div>
                                    <img
                                        src={dataDetail?.poster}
                                        alt={dataDetail?.title}
                                        className="rounded-md aspect-[9/16] max-h-[400px] object-cover border-gray-400 border"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-bold text-[#333333] text-[32px]">{dataDetail?.title}</h1>
                                    <p className="font-semibold text-[#333333] text-[14px] mt-4 whitespace-pre-wrap">
                                        {dataDetail?.description}
                                    </p>

                                    <div className="relative overflow-x-auto mt-4">
                                        <table className="rounded-md overflow-hidden w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Genres
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Actors
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Duration
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Rating
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Release date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                    <td className="px-6 py-4">
                                                        <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                                            {dataDetail?.genres?.map((item, index) => (
                                                                <li key={index}>{item.name}</li>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                                            {dataDetail?.actors?.map((item, index) => (
                                                                <li key={index}>{item.name}</li>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                    <td className="px-6 py-4">{dataDetail?.duration} Phút</td>
                                                    <td className="px-6 py-4">{dataDetail?.rating}</td>
                                                    <td className="px-6 py-4">{dataDetail?.release_date}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {isLoadingShowTimes ? (
                                <div className="flex justify-center flex-col gap-4 items-center">
                                    <Spin size="large" />
                                    <p>Đang tải danh sách phòng vé</p>
                                </div>
                            ) : (
                                <div className="my-5">
                                    <h2 className="pb-2 font-semibold text-[#333]">Danh sách phòng vé xem phim</h2>
                                    {dataShowTime && dataShowTime?.length > 0 ? (
                                        <Tabs
                                            type="card"
                                            defaultActiveKey={dataShowTime[0].date}
                                            size={'large'}
                                            style={{ marginBottom: 32 }}
                                            items={handleBuilderShowtimesForDate(dataShowTime).map((item) => {
                                                return {
                                                    label: item.date,
                                                    key: item.date,
                                                    children: (
                                                        <div>
                                                            <div className="flex gap-4">
                                                                {item.item.map((itemShowTime, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="flex border border-gray-200  px-2 py-3 rounded-md flex-col items-center gap-2 justify-center"
                                                                    >
                                                                        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                                                            {itemShowTime.start_time?.split(' ')[1]} -{' '}
                                                                            {itemShowTime.end_time?.split(' ')[1]}
                                                                        </p>
                                                                        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                                                            Dạp {itemShowTime?.screen?.cinema?.name} -
                                                                            Phòng {itemShowTime?.screen?.name}
                                                                        </p>
                                                                        <Button type="primary" size="small">
                                                                            Mua ngay
                                                                        </Button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ),
                                                };
                                            })}
                                        />
                                    ) : (
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                    )}
                                </div>
                            )}
                            <div className="w-full h-[400px] mt-10">
                                <h2 className="pb-2 font-semibold text-[#333]">Trailler phim {dataDetail.title}</h2>
                                <iframe
                                    className="rounded-md"
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${hanldeGetIdViewYoutobe(dataDetail?.trailer)}`}
                                    title="Quỷ Nhập Tràng Official Trailer | Beta Cinemas | Khởi chiếu /07/032025"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </ContainerWapper>
                )
            )}
        </BasicTemplate>
    );
};

export default Home;
