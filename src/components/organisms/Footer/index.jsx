/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FacebookOutlined, LinkedinOutlined, TwitterSquareFilled, YoutubeOutlined } from '@ant-design/icons';
import { Fragment, useRef } from 'react';
import Slider from 'react-slick';
import f1 from '../../../../public/images/content/f1.jpg';
import f2 from '../../../../public/images/content/f2.jpg';
import p1 from '../../../../public/images/content/p1.jpg';
import p2 from '../../../../public/images/content/p2.jpg';
import p3 from '../../../../public/images/content/p3.jpg';
import p4 from '../../../../public/images/content/p4.jpg';
import p5 from '../../../../public/images/content/p5.jpg';
import p6 from '../../../../public/images/content/p6.jpg';
import Indicator from '../../atoms/Indicator';
import ContainerWapper from '../../templates/ContainerWapper';
import './styles.css';

const cates = [
    {
        label: 'Language Movies',
        values: [
            'English movie',
            'Tamil movie',
            'Punjabi Movie',
            'Hindi movie',
            'Malayalam movie',
            'English Action movie',
            'Hindi Action movie',
        ],
    },
    {
        label: 'Movies by Presenter',
        values: [
            'Action movie',
            'Romantic movie',
            'Adult movie',
            'Comedy movie',
            'Drama movie',
            'Musical movie',
            'Classical movie',
        ],
    },
    {
        label: 'Booking Online',
        values: [
            'www.example.com',
            'www.hello.com',
            'www.example.com',
            'www.hello.com',
            'www.example.com',
            'www.hello.com',
        ],
    },
    {
        label: 'App Available On',
    },
];

const socials = [
    <FacebookOutlined className="text-[24px]" />,
    <TwitterSquareFilled className="text-[24px] bg-[#000]" />,
    <LinkedinOutlined className="text-[24px]" />,
    <YoutubeOutlined className="text-[24px]" />,
];

const Footer = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    return (
        <div className="w-[100%] shadow">
            <div className="pt-[90px] pb-[80px] w-[100%] bg-white">
                <ContainerWapper>
                    <div className="flex flex-col items-center">
                        <p className="text-[32px] font-[500] text-center cursor-pointer mb-[16px]">Our Patner’s</p>
                        <div className="flex justify-center items-center w-[200px] mb-[60px]">
                            <div className="w-[40%] h-[2px] bg-[#ccc]"></div>
                            <div className="w-[20%] h-[4px] bg-[#f44343]"></div>
                            <div className="w-[40%] h-[2px] bg-[#ccc]"></div>
                        </div>

                        <div className="w-[100%] flex justify-between items-center sm:px-0 px-[10px]">
                            <button
                                className="bg-[#ff4444] text-white w-[50px] h-[50px] rounded-[100px] text-[28px]"
                                onClick={handlePrev}
                            >
                                <i className="bi bi-caret-left"></i>
                            </button>
                            <div className="sm:w-[80%] w-[60%]">
                                <Slider {...settings} ref={sliderRef}>
                                    {[p1, p2, p3, p4, p5, p6].map((item, index) => (
                                        <img alt="" src={item} key={index} className="" />
                                    ))}
                                </Slider>
                            </div>
                            <button
                                className="bg-[#ff4444] text-white w-[50px] h-[50px] rounded-[100px] text-[28px]"
                                onClick={handleNext}
                            >
                                <i className="bi bi-caret-right"></i>
                            </button>
                        </div>
                        <div className="w-[100%]"></div>
                    </div>
                </ContainerWapper>
            </div>

            <div className="bg-[#f44343] h-[160px]">
                <ContainerWapper>
                    <div className="flex lg:flex-row flex-col justify-between items-center">
                        <p className="uppercase lg:text-[30px] text-[24px] font-[500] text-white lg:mb-0 mb-[8px]">
                            get update sign up now !
                        </p>
                        <div className="border-solid border-[1px] border-[#f3c600] lg:w-auto w-[90%]">
                            <input
                                type="text"
                                className="bg-[#f44343] text-[#ffffff61] py-[8px] px-[16px] lg:w-[400px] w-[70%] outline-none"
                                placeholder="Enter Your Email"
                            />
                            <button className="bg-white text-[16px] text-[#f44343] py-[8px] px-[20px] lg:w-auto w-[30%]">
                                Submit
                            </button>
                        </div>
                    </div>
                </ContainerWapper>
            </div>

            <div className="bg-[#000] py-[60px]">
                <ContainerWapper>
                    <div className="w-[100%] text-[#ffffff61]">
                        <div className="w-[100%] md:grid md:grid-cols-2 lg:flex lg:flex-row flex-col justify-between items-start mb-[40px] lg:px-0 px-[20px]">
                            {cates.map((item, index) => {
                                return <ItemCommon key={index} data={item} isUl={index !== cates.length - 1} />;
                            })}
                        </div>
                        <div className="w-[100%] flex lg:flex-row flex-col justify-between items-center lg:px-0 px-[20px] lg:gap-0 gap-[20px]">
                            <p className="text-[16px] text-center">
                                Copyright 2022-23 <span className="text-[#f44343] text-[14px]">Movie Pro</span>. All
                                rights reserved
                            </p>
                            <div className="flex justify-end items-center gap-[8px]">
                                {socials.map((item, index) => {
                                    return <Fragment key={index}>{item}</Fragment>;
                                })}
                            </div>
                        </div>
                    </div>
                </ContainerWapper>
            </div>
        </div>
    );
};

export default Footer;

const ItemCommon = ({ data, isUl = true }) => {
    return (
        <div className="lg:mb-0 mb-[28px]">
            <p className="text-white text-[16px] font-[400] uppercase mb-[15px]">{data?.label}</p>
            <Indicator />
            {isUl ? (
                <ul className="mt-[20px]">
                    {data?.values.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="mb-[10px] cursor-pointer hover:text-[#f44343] flex items-center justify-start gap-[4px]"
                            >
                                <i className="bi bi-circle-fill text-[10px] text-[#f44343]"></i>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div className="pt-[40px]">
                    <p className="mb-[10px]">Download App and Get Free Movie Ticket !</p>
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <img src={f1} alt="google play" className="rounded-[4px]" />
                        <img src={f2} alt="app store" className="rounded-[4px]" />
                    </div>

                    <p>
                        <span className="text-[#f44343]">$50</span> Payback an App Download
                    </p>
                </div>
            )}
        </div>
    );
};
