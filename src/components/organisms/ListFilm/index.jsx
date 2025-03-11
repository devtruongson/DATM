/* eslint-disable react/prop-types */
import { Carousel } from 'antd';
import { useRef } from 'react';
import Indicator from '../../atoms/Indicator';
import Card from '../../molecules/Card/Card';

const ListFilm = ({ data, cate }) => {
    const sliderRef = useRef(null);

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.prev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.next();
        }
    };

    return (
        <div className="relative  sm:px-0 px-[20px]">
            <div className="flex justify-between items-center mb-4">
                <div className="text-start">
                    <p className="uppercase text-[20px] font-[500] mb-[10px]">{cate}</p>
                    <Indicator />
                </div>
                <div className="space-x-2">
                    <button onClick={handlePrev} className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-400">
                        ←
                    </button>
                    <button onClick={handleNext} className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-400">
                        →
                    </button>
                </div>
            </div>

            <div className="w-full">
                <Carousel
                    autoplay
                    dots={false}
                    ref={sliderRef}
                    arrows={false}
                    slidesToShow={3}
                    className="arrow_show max-h-100"
                    responsive={[
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 3,
                            },
                        },
                    ]}
                >
                    {data?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ListFilm;
