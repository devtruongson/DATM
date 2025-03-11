/* eslint-disable react/prop-types */
import { boxShadow } from '../../../constants';
import thumbnailDefault from '../../../../public/images/content/blog_category/b1.jpg';
import { Modal } from 'antd';
import { useState } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import './styles.css';
import ReadMore from '../../atoms/ReadMore';
import { formatDateView } from '../../../helpers/formatDateView';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';

const BlogCard = ({ data, children, isAll = true }) => {
    const navigate = useNavigate();
    return (
        <div className="w-[100%] rounded-[10px] overflow-hidden" style={boxShadow}>
            <ThumbnailCommon thumbnail={data?.thumbnail} trailer_url={data?.trailer_url} />
            <div className="" onClick={() => navigate(routes.blog_single.replace(':id', data.id))}>
                <div className="p-[35px] flex flex-col items-start justify-start gap-[20px]">
                    <div className="flex justify-start items-center gap-[10px] text-[16px] text-[#ff4444]">
                        <p>{formatDateView(data?.date)}</p>
                        <p>|</p>
                        <p>by {data?.author}</p>
                    </div>
                    <p className="text-[18px] text-[#000] font-[600] uppercase">{data?.title}</p>
                    <p className="text-[16px] text-[#707070]">{data?.description}</p>
                    {isAll ? <ReadMore /> : null}
                </div>

                <div className="">{children}</div>

                <div className="border-t-[1px] border-solid border-[#ccc] px-[35px] flex md:flex-row flex-col justify-between items-center">
                    <div className="grid grid-cols-2 sm:flex justify-start items-center gap-[20px] py-[15px] sm:w-auto w-[100%]">
                        {[
                            {
                                icon: <i className="bi bi-hand-thumbs-up-fill" />,
                                value: data?.likes || 0,
                                label: 'Likes',
                            },
                            {
                                icon: <i className="bi bi-chat-dots-fill" />,
                                value: data?.comments || 0,
                                label: 'Comments',
                            },
                            {
                                icon: <i className="bi bi-ticket-perforated-fill" />,
                                value: data?.presenter || 0,
                                label: 'Presenter Movie',
                                full: true,
                            },
                        ].map((item, index) => (
                            <div
                                className={`flex justify-start items-center gap-[5px] text-[16px] text-[#797979] ${
                                    item.full ? 'col-span-2' : ''
                                }`}
                                key={index}
                            >
                                <p className="text-[#f44343]">{item.icon}</p>
                                <p>{item.value}</p>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex sm:justify-end justify-start items-center gap-[10px] text-[#797979] text-[16px] sm:w-auto w-[100%] sm:pb-0 pb-[20px]">
                        <i className="bi bi-facebook" />
                        <i className="bi bi-youtube" />
                        <i className="bi bi-linkedin" />
                        <i className="bi bi-twitter" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

const ThumbnailCommon = ({ thumbnail, trailer_url }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!thumbnail?.length) {
        if (trailer_url) {
            return (
                <iframe
                    className="w-[100%] sm:h-[430px] h-[200px]"
                    src={trailer_url}
                    title="YouTube video player"
                    // frameBorder="0"
                    allowFullScreen
                ></iframe>
            );
        } else {
            return <img className="w-[100%] h-[430px]" src={thumbnailDefault} alt="" />;
        }
    } else {
        if (trailer_url) {
            return (
                <div className="relative w-full sm:h-[430px] group">
                    <img className="w-full h-full" src={thumbnailDefault} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            className="relative w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer border-2 border-white bg-black/50 hover:bg-black/70 transition-all duration-300"
                            onClick={showModal}
                        >
                            <CaretRightOutlined className="text-red-500 relative z-10" />
                            <span className="absolute inset-0 animate-ping bg-white opacity-50 rounded-full"></span>
                        </button>
                    </div>
                    <Modal
                        title="Trailer"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width={'800px'}
                        footer=""
                    >
                        <iframe
                            className="w-[100%] sm:h-[430px]"
                            src={trailer_url}
                            title="YouTube video player"
                            allowFullScreen
                        ></iframe>
                    </Modal>
                </div>
            );
        } else {
            if (thumbnail.length > 1) {
                return (
                    <div className="w-[100%] sm:h-[430px] min-h-[1px]">
                        <Slider {...settings} className="form-slick">
                            {thumbnail?.map((item, index) => (
                                <img className="w-full h-full" key={index} src={item || thumbnailDefault} alt="" />
                            ))}
                        </Slider>
                    </div>
                );
            } else {
                return <img className="w-[100%] sm:h-[430px]" src={thumbnailDefault} alt="" />;
            }
        }
    }
};
