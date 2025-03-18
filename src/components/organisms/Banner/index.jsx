import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import banner from '../../../../public/images/banner.jpg';
import { HEIGHT_BANNER } from '../../../constants';

const Banner = () => {
    const pathname = useLocation().pathname;
    const parsed = queryString.parse(location.search);

    const label = useMemo(() => {
        if (pathname.includes('/movie_booking')) {
            return 'Movie Booking';
        }
        if (pathname.includes('/blog_category')) {
            return 'Blog Category';
        }
        if (pathname.includes('/blog_single')) {
            return 'Blog Single Page';
        }
        if (pathname.includes('/contact')) {
            return 'Contact';
        }
        if (pathname.includes('/about')) {
            return 'About';
        }
        if (pathname.includes('/movie_single')) {
            return 'Movie Single';
        }
        if (pathname.includes('/movie_category')) {
            return 'Movie Category';
        }
        if (pathname.includes('/')) {
            return 'Movie Category';
        }
        return '';
    }, [pathname]);

    return (
        <div
            style={{
                height: `${HEIGHT_BANNER}px`,
                backgroundImage: `url(${banner})`,
            }}
            className=" relative "
        >
            <div className="absolute inset-0 bg-black bg-opacity-[70%] ">
                <div className="h-[100%] w-[100%] relative flex justify-center items-center">
                    <p className="text-white text-[36px] font-[500] uppercase">{label}</p>
                    <div className="absolute bottom-[0px] bg-[#707070] flex justify-center items-center gap-[10px] py-[10px] px-[20px] text-[]">
                        <p className="text-white">Home</p>
                        <p className="text-[#FF4444]">{'>'}</p>
                        <p className="text-[#FF4444]">{label ? label : parsed.label}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
