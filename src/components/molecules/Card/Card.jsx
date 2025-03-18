import { ShoppingCartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import thumbnailDefault from '../../../../public/images/content/movie_category/up6.jpg';
import { routes } from '../../../routes';

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    const navigate = useNavigate();
    const handleNavigate = useCallback(
        () => navigate(routes.movie_booking.replace(':id', data?.id)),
        [data?.id, navigate],
    );
    return (
        <div className="w-full md:w-[270px] rounded-[10px] overflow-hidden shadow-lg custom">
            <div className="relative group w-full md:w-[270px] h-[400px] overflow-hidden rounded-lg custom_level_2">
                <img alt="thumbnail" src={data?.poster || thumbnailDefault} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="px-6 py-3 bg-[#ff4444] text-white hover:bg-transparent rounded-lg transform -translate-x-32 group-hover:translate-x-0 transition-all duration-500 border-[1px] border-[#ff4444]">
                        View Trailer
                    </button>
                    <button
                        onClick={() => (window.location.href = `/film_detail/${data.id}`)}
                        className="px-6 py-3 border-[1px] border-[#ff4444] text-white rounded-lg transform translate-x-32 group-hover:translate-x-0 transition-all duration-500 hover:bg-[#ff4444]"
                    >
                        View Details
                    </button>
                </div>
            </div>

            <div className="p-[20px] flex justify-between items-center bg-white">
                <div className="flex flex-col items-start gap-[10px]">
                    <p className="text-[18px] font-[600]">{data?.title}</p>
                    <p className="text-[16px] text-[#707070]">{data?.actors?.map((item) => item.name).join(' , ')}</p>
                    <Rate allowHalf defaultValue={data?.rate} className="text-[#ff4444] text-[16px]" />
                </div>

                <button
                    className="border-solid border-[1px] border-[#ccc] px-[8px] py-[4px] rounded-[4px]"
                    onClick={() => handleNavigate()}
                >
                    <ShoppingCartOutlined className="text-[#ff4444]" />
                </button>
            </div>
        </div>
    );
};

export default Card;
