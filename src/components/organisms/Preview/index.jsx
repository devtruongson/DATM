/* eslint-disable react/prop-types */
import { CaretRightOutlined, HeartOutlined } from '@ant-design/icons';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import mainSliderBg from '../../../../public/images/main_slider_bg_img.jpg';
import { handleDataVideoPreview } from '../../../app/slices/appSlice';
import Socials from '../../atoms/Socials';

const Preview = ({ data }) => {
    const date = useMemo(() => {
        const inputDate = '2025/01/01';
        const date = new Date(inputDate);

        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).format(date);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.date]);

    const time = useMemo(() => {
        if (data?.duration) {
            const hour = Math.floor(parseInt(data?.duration / 60));
            const minute = parseInt(data?.duration / 60);

            return `${hour}h ${minute}m`;
        }
        return '';
    }, [data?.duration]);

    const dispatch = useDispatch();

    const handleShowVideo = () => {
        dispatch(
            handleDataVideoPreview({
                isOpenModalPriviewVideo: true,
                url: data?.trailer,
            }),
        );
    };

    return (
        <div
            className="relative w-[100%] h-[385px] shadow-2xl overflow-hidden bg-cover bg-center border-solid border-[4px] border-white p-[20px]"
            style={{ backgroundImage: `url(${data.poster ? data.poster : mainSliderBg})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-[80%] flex justify-center items-center">
                <div className="text-white flex flex-col items-center gap-[10px]">
                    <button
                        className="relative w-16 h-16  rounded-full flex items-center justify-center text-white text-2xl z-[1000] cursor-pointer border-[2px] border-solid border-white"
                        onClick={() => handleShowVideo()}
                    >
                        <CaretRightOutlined />
                        <span className="absolute inset-0 animate-ping bg-white opacity-50 rounded-full "></span>
                    </button>

                    <p className="text-[30px] font-[700]">{data?.title}</p>
                    <p>{data?.actors?.map((item) => item?.name).join(' | ')}</p>
                    <div className="flex justify-center items-center gap-[4px]">
                        {data?.genres.map((item, index) => {
                            return (
                                <div className="bg-white text-[#111111] px-[8px] rounded-[4px]" key={index}>
                                    {item?.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="relative z-10 text-white h-full flex-col justify-end sm::flex hidden">
                <div className="">
                    <div className="flex items-center gap-[10px]">
                        <HeartOutlined className="mt-[10px] text-[20px]" />
                        <div className="text-start ">
                            <p className="text-[#F3C600] text-[26px] font-[400]">{data?.rating}%</p>
                            {/* <p className="text-[14px]">{data?.votes} votes</p> */}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <Socials />
                    <div className="flex justify-end items-center gap-[20px]">
                        <p>{date}</p>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
