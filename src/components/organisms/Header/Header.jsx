import { Carousel, Menu, Modal, Popover } from 'antd';
import axios from 'axios';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleDataProvince, handleLogoutUser, handleToggleModalAuth } from '../../../app/slices/appSlice';
import { handleBuilderMovies } from '../../../helpers/handleReBuildMovies';
import { useGetAllMovies } from '../../../services/movie/useGetOneMovie';
import MovieProDrawer from '../ModalNav';
import ProductSearchPopover from '../ProductSearchPopover/index';

export default function Header() {
    const [cate, setCate] = useState();
    const [cateSelected, setCateSelected] = useState('all');
    const [current, setCurrent] = useState('home-menu');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [idPlay, setIdPlay] = useState('');
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        setCate([
            { value: 'all', label: 'All categories' },
            { value: 'Movie', label: 'Movie' },
            { value: 'Video', label: 'Video' },
            { value: 'Music', label: 'Music' },
        ]);
    }, []);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleChangeCate = (value) => {
        setCateSelected(value);
    };

    const handleClickMenuHeader = (value) => {
        setCurrent(value.key);
    };

    const [provinceData, setProvinceData] = useState([]);

    useEffect(() => {
        const _fetch = async () => {
            try {
                const res = await axios.get('http://filmgo.io.vn/api/provinces');
                if (res?.data?.data) {
                    const dataBuild = await Promise.all(
                        res.data.data.map(async (item) => {
                            const cenimaRes = await axios.post('http://filmgo.io.vn/api/cinemas', {
                                province_id: item.id,
                            });
                            item.cinemas = cenimaRes?.data?.data;
                            return item;
                        }),
                    );
                    setProvinceData(dataBuild);
                }
            } catch (error) {
                console.log(error);
            }
        };

        _fetch();
    }, []);

    const headerNavidata = [
        {
            label: <span className="text-[#fff]">HOME</span>,
            key: 'home',
            children: [
                {
                    label: 'Index - I',
                    key: (Math.random() * 10000).toString(),
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Index - II',
                    key: (Math.random() * 10000).toString(),
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Index - III',
                    key: (Math.random() * 10000).toString(),
                },
                {
                    type: 'divider',
                },
                {
                    label: <Link to={'/film-detail'}>Index - IV</Link>,
                    key: (Math.random() * 10000).toString(),
                },
            ],
        },
        {
            label: <span className="text-[#fff]">POPULAR MOVIES</span>,
            key: (Math.random() * 10000).toString(),
            popupClassName: 'submenu-horizontal',
            children: [
                {
                    type: 'group',
                    label: (
                        <span className="lg:text-[#000] text-white lg:font-bold text-[16px]">Popular Hindi Movies</span>
                    ),
                    children: [
                        {
                            label: 'Bajiro Mastani',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Drishyam',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Queen',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Wanted',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Veer',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Jannat',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi-2',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                    ],
                },
                {
                    type: 'group',
                    label: (
                        <span className="text-[16px] lg:text-[#000] text-white lg:font-bold">
                            Popular Kannada Movies
                        </span>
                    ),
                    children: [
                        {
                            label: 'Bajiro Mastani',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Drishyam',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Queen',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Wanted',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Veer',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Jannat',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi-2',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                    ],
                },
                {
                    type: 'group',
                    label: (
                        <span className="text-[16px] lg:text-[#000] text-white lg:font-bold">
                            Popular Bengali Movies
                        </span>
                    ),
                    children: [
                        {
                            label: 'Bajiro Mastani',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Drishyam',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Queen',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Wanted',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Veer',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Jannat',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi-2',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                    ],
                },
                {
                    type: 'group',
                    label: (
                        <span className="text-[16px] lg:text-[#000] text-white lg:font-bold">
                            Popular Kannada Movies
                        </span>
                    ),
                    children: [
                        {
                            label: 'Bajiro Mastani',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Drishyam',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Queen',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Wanted',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Veer',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Jannat',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                        {
                            label: 'Baaghi-2',
                            icon: (
                                <i
                                    className="bi bi-camera-reels-fill"
                                    style={{
                                        color: '#ee4d2d',
                                    }}
                                ></i>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                    ],
                },
                {
                    type: 'group',
                    label: <span className="text-[16px] lg:text-[#000] text-white lg:font-bold"></span>,
                    popupClassName: 'course_custome',
                    children: [
                        {
                            label: (
                                <Carousel
                                    autoplay
                                    style={{
                                        width: '300px',
                                        height: '100%',
                                    }}
                                >
                                    <div>
                                        <img
                                            className="h-[100%] w-[100%] object-cover"
                                            src="/images/content/up1.jpg"
                                            alt="navi_img"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="h-[100%] w-[100%] object-cover"
                                            src="/images/content/up2.jpg"
                                            alt="navi_img"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="h-[100%] w-[100%] object-cover"
                                            src="/images/content/up3.jpg"
                                            alt="navi_img"
                                        />
                                    </div>
                                </Carousel>
                            ),
                            key: (Math.random() * 10000).toString(),
                        },
                    ],
                },
            ],
        },
        {
            label: <span className="text-[#fff]">TV SHOW</span>,
            key: 'tv-show',
            children: [
                {
                    label: 'Star Plus',
                    key: 'Star Plus',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Star Jalsha',
                    key: (Math.random() * 10000).toString(),
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Star Jalsha',
                    key: (Math.random() * 10000).toString(),
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Sony TV',
                    key: 'Sony TV',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Sab TV',
                    key: 'Sab TV',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Sony Pal',
                    key: 'Sony Pal',
                },
            ],
        },
        {
            label: <span className="text-[#fff]">VIDEO</span>,
            key: 'video',
            popupClassName: 'submenu-horizontal custom_more',
            children: [
                {
                    label: (
                        <div className="w-[300px] h-[300px] relative group">
                            <img className="w-full h-full object-cover" src="/images/content/vp1.jpg" alt="video_img" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]"></div>
                                <button
                                    className=""
                                    onClick={() => {
                                        setIdPlay('7mg0rZc5cus');
                                        openModal();
                                    }}
                                >
                                    <i className="bi bi-play-fill text-white text-4xl absolute inset-0 flex items-center justify-center"></i>
                                </button>
                            </div>
                        </div>
                    ),
                },

                {
                    label: (
                        <div className="w-[300px] h-[300px] relative group">
                            <img className="w-full h-full object-cover" src="/images/content/vp2.jpg" alt="video_img" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]"></div>
                                <button
                                    className=""
                                    onClick={() => {
                                        setIdPlay('7mg0rZc5cus');
                                        openModal();
                                    }}
                                >
                                    <i className="bi bi-play-fill text-white text-4xl absolute inset-0 flex items-center justify-center"></i>
                                </button>
                            </div>
                        </div>
                    ),
                },

                {
                    label: (
                        <div className="w-[300px] h-[300px] relative group">
                            <img className="w-full h-full object-cover" src="/images/content/vp3.jpg" alt="video_img" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]"></div>
                                <button
                                    className=""
                                    onClick={() => {
                                        setIdPlay('7mg0rZc5cus');
                                        openModal();
                                    }}
                                >
                                    <i className="bi bi-play-fill text-white text-4xl absolute inset-0 flex items-center justify-center"></i>
                                </button>
                            </div>
                        </div>
                    ),
                },

                {
                    label: (
                        <div className="w-[300px] h-[300px] relative group">
                            <img className="w-full h-full object-cover" src="/images/content/vp4.jpg" alt="video_img" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]"></div>
                                <button
                                    className=""
                                    onClick={() => {
                                        setIdPlay('7mg0rZc5cus');
                                        openModal();
                                    }}
                                >
                                    <i className="bi bi-play-fill text-white text-4xl absolute inset-0 flex items-center justify-center"></i>
                                </button>
                            </div>
                        </div>
                    ),
                },

                {
                    label: (
                        <div className="w-[300px] h-[300px] relative group">
                            <img className="w-full h-full object-cover" src="/images/content/vp5.jpg" alt="video_img" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]"></div>
                                <button
                                    className=""
                                    onClick={() => {
                                        setIdPlay('7mg0rZc5cus');
                                        openModal();
                                    }}
                                >
                                    <i className="bi bi-play-fill text-white text-4xl absolute inset-0 flex items-center justify-center"></i>
                                </button>
                            </div>
                        </div>
                    ),
                },
                {
                    label: (
                        <div className="w-[300px] h-[300px] relative group">
                            <img className="w-full h-full object-cover" src="/images/content/vp6.jpg" alt="video_img" />
                            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)]"></div>
                                <button
                                    className=""
                                    onClick={() => {
                                        setIdPlay('7mg0rZc5cus');
                                        openModal();
                                    }}
                                >
                                    <i className="bi bi-play-fill text-white text-4xl absolute inset-0 flex items-center justify-center"></i>
                                </button>
                            </div>
                        </div>
                    ),
                },
            ],
        },
        {
            label: <span className="text-[#fff]">PAGES</span>,
            key: 'page',
            children: [
                {
                    type: 'group',
                    label: <span className="lg:text-[#000] text-white lg:font-bold text-[16px]">Blog</span>,
                    children: [
                        {
                            label: (
                                <Link to={'/blog_category'} className="lg:text-black text-white">
                                    Blog-Category
                                </Link>
                            ),
                            key: 'Blog-Category',
                        },
                        {
                            label: <Link to={'/blog_single/1'}>Blog-Single</Link>,
                            key: 'Blog-Single',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: <span className="lg:text-[#000] text-white lg:font-bold text-[16px]">Movie</span>,
                    children: [
                        {
                            label: <Link to={'/movie-category'}>Movie-Category</Link>,
                            key: 'Movie-Category',
                        },
                        {
                            label: <Link to={'/movie-single'}>Movie-Single</Link>,
                            key: 'Movie-Single',
                        },
                        {
                            label: <Link to={'/movie-single'}>Movie-Single II</Link>,
                            key: 'Movie-Single-II',
                        },
                    ],
                },
                {
                    label: <Link to={'/gallery'}>gallery</Link>,
                    key: 'gallery',
                },
                {
                    label: <Link to={'/booking-type'}>Booking-Type</Link>,
                    key: 'Booking-Type',
                },
                {
                    label: <Link to={'/confirmation-screen'}>Confirmation-Screen</Link>,
                    key: 'Confirmation-Screen',
                },
                {
                    label: <Link to={'/movie-booking'}>Movie-Booking</Link>,
                    key: 'Movie-Booking',
                },
                {
                    label: <Link to={'/seat-booking'}>Seat-Booking</Link>,
                    key: 'Seat-Booking',
                },
            ],
        },
        {
            label: (
                <span className="text-[#fff]">
                    <Link to="/contact?label=Contact">CONTACT</Link>
                </span>
            ),
            key: 'CONTACT',
        },
    ];

    // const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    const { isLoginIn, user } = useSelector((state) => state.app.auth);
    const contentUserLogin = (
        <div>
            <ul>
                <li
                    style={{
                        listStyleType: 'none',
                        paddingInlineStart: 0,
                        fontSize: '16px',
                        padding: '6px 0',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        window.location.href = '/me';
                    }}
                >
                    Xem tài khoản
                </li>
                <li
                    style={{
                        listStyleType: 'none',
                        paddingInlineStart: 0,
                        fontSize: '16px',
                        padding: '6px 0',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        Swal.fire({
                            icon: 'info',
                            text: 'Bạn chắc chắn muốn đăng xuất?',
                            showConfirmButton: true,
                            showCancelButton: true,
                        }).then((res) => {
                            if (res.isConfirmed) {
                                dispatch(handleLogoutUser());
                            }
                        });
                    }}
                >
                    Đăng xuất
                </li>
            </ul>
        </div>
    );

    const { data: dataMovies } = useGetAllMovies({});
    const listMovies = useMemo(
        () =>
            dataMovies?.data
                ?.map((item) => {
                    return handleBuilderMovies(item);
                })
                .slice(0, 10) || [],
        [dataMovies],
    );

    const listMoviesArr = useMemo(() => (dataMovies?.data ? dataMovies.data : []), [dataMovies]);

    const [provinceId, setProvinceId] = useState(null);
    const [cinemaId, setCinemaId] = useState(null);

    const { province_id, cinema_id } = useSelector((state) => state.app.province);

    useEffect(() => {
        setProvinceId(province_id);
        setCinemaId(cinema_id);
    }, [province_id, cinema_id]);

    const handleSubmitCinema = () => {
        if (!provinceId || !cinemaId || provinceId === 'null' || cinemaId === 'null') {
            Swal.fire({
                icon: 'info',
                text: 'Bạn vui lòng chọn đầy đủ địa chỉ và dạp phim',
            });
            return;
        }
        dispatch(
            handleDataProvince({
                province_id: provinceId,
                cinema_id: cinemaId,
            }),
        );
        setModalProvince(false);
    };

    const [modalProvince, setModalProvince] = useState(false);

    useEffect(() => {
        if (!province_id || !cinema_id) {
            setModalProvince(true);
        }
    }, [province_id, cinema_id]);

    return (
        <header className="bg-[#ff4444] h-[100px] flex items-center">
            <Modal
                onCancel={() => setModalProvince(false)}
                width={'40vw'}
                open={modalProvince}
                footer={
                    <button
                        onClick={handleSubmitCinema}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Lưu thay đổi
                    </button>
                }
                title="Chọn tỉnh thành & dạp phim của bạn"
            >
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <div className="flex-1">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Chọn tỉnh thành</label>
                        <select
                            value={provinceId}
                            onChange={(e) => {
                                setProvinceId(e.target.value);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">---- Chọn tỉnh thành ----</option>
                            {provinceData?.map((item, index) => (
                                <option value={item.id} key={index}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Chọn rạp phim</label>
                        <select
                            value={cinemaId}
                            onChange={(e) => {
                                setCinemaId(e.target.value);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">
                                {!provinceId ? '---- Vui lòng chọn địa điểm trước ----' : '---- Chọn rạp phim ----'}
                            </option>
                            {provinceId &&
                                provinceData
                                    ?.find((item) => item.id == provinceId)
                                    ?.cinemas?.map((item, index) => (
                                        <option value={item.id} key={index}>
                                            {item.name}
                                        </option>
                                    ))}
                        </select>
                    </div>
                </div>
            </Modal>

            <div className="px-[15px] flex justify-between items-center w-full">
                <div className="flex items-center gap-[20px] flex-1">
                    <a href="/">
                        <img src="/images/header/logo.png" alt="" />
                    </a>
                    <div className="lg:block hidden flex-1">
                        <Menu
                            className="bg-transparent text-[#fff]"
                            onClick={handleClickMenuHeader}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={headerNavidata}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className=""></div>
                    <Fragment>
                        <div style={{}} className="h-[50px] rounded-[10px] overflow-hidden lg:flex hidden items-center">
                            {/* <Select
                                className="h-[100%] select-ant-none-radius"
                                style={{ width: 140, borderRadius: 0 }}
                                options={cate}
                                value={cateSelected}
                                onChange={handleChangeCate}
                            /> */}
                            <ProductSearchPopover products={listMoviesArr} />
                            {/* <input
                                className="h-[100%] border-none px-2 w-[250px]"
                                style={{
                                    outline: 'none',
                                }}
                                type="text"
                                placeholder="Search Movie , Video , Music"
                            />
                            <button className="bg-[#000] text-[#fff] h-full w-[50px]">
                                <i className="bi bi-search-heart"></i>
                            </button> */}
                        </div>
                        {!isLoginIn && !user ? (
                            <button
                                onClick={() => dispatch(handleToggleModalAuth())}
                                className="bg-[#000] text-[#fff] h-[50px] w-[180px] rounded-[10px] lg:block hidden"
                            >
                                sign up
                            </button>
                        ) : (
                            <Popover content={contentUserLogin} title="Thông tin tài khoản">
                                <div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: 10,
                                            fontWeight: 600,
                                            color: '#fff',
                                            background: 'rgba(0,0,0,0.2)',
                                            padding: '6px 20px',
                                            borderRadius: 10,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <img
                                            style={{
                                                borderRadius: '50%',
                                                width: 40,
                                                height: 40,
                                            }}
                                            src={
                                                user[0]?.avatar == 'http://filmgo.io.vn/images/avatars/default.jpg'
                                                    ? 'https://static.thenounproject.com/png/4154905-200.png'
                                                    : user[0]?.avatar
                                            }
                                            alt="hình ảnh người dùng"
                                        />
                                        <p>Welcome {user[0]?.name}</p>
                                    </div>
                                </div>
                            </Popover>
                        )}
                    </Fragment>
                    <button
                        onClick={() => setModalProvince(true)}
                        className="py-2.5 px-5 h-[50px] me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Xem vị trí
                    </button>
                    <button
                        onClick={showDrawer}
                        className="w-[50px] h-[50px]  bg-[rgba(0,0,0,0.2)] rounded-[10px] flex justify-center items-center"
                    >
                        <img src="/images/header/bars.png" className="object-contain" alt="" />
                    </button>
                    {/* 
                    <button className="w-[50px] h-[50px] pc-hidden bg-[rgba(0,0,0,0.2)] rounded-[10px] flex justify-center items-center">
                        <img src="/images/header/bars.png" className="object-contain" alt="" />
                    </button> */}
                    {/* {isMenuOpenMobile && (
                        <div
                            className="absolute w-[300px] block md:hidden bg-red-500 z-[9999]"
                            style={{ top: `${HEADER_HEIGHT}px`, right: '0px' }}
                        >
                            <Menu
                                className="bg-transparent text-[#fff]"
                                onClick={handleClickMenuHeader}
                                selectedKeys={[current]}
                                mode="inline"
                                items={headerNavidata}
                            />
                        </div>
                    )} */}
                </div>
            </div>
            <Modal open={isModalVisible} onCancel={closeModal} footer={null} width={'60vw'} height={'600px'}>
                <div className="p-[30px] min-h-[600px]">
                    <iframe
                        className="rounded-md overflow-hidden"
                        width="100%"
                        height="600px"
                        src={`https://www.youtube.com/embed/${idPlay}`}
                        title="3-HOUR STUDY WITH ME | Calm Piano 🎹 | Pomodoro 50-10 | Late night 🌇"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullscreen
                    ></iframe>
                </div>
            </Modal>
            <MovieProDrawer onClose={onClose} open={open} showModal={() => dispatch(handleToggleModalAuth())} />
        </header>
    );
}
