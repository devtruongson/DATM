import { Carousel, Menu, Modal, Select } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../ModalAuth';
import MovieProDrawer from '../ModalNav';

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

    const headerNavidata = [
        {
            label: <span className="text-[#fff]">HOME</span>,
            key: 'home',
            children: [
                {
                    label: 'Index - I',
                    key: 'Index - I',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Index - II',
                    key: 'Index - II',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Index - III',
                    key: 'Index - III',
                },
                {
                    type: 'divider',
                },
                {
                    label: <Link to={'/film-detail'}>Index - IV</Link>,
                    key: 'Index - IV',
                },
            ],
        },
        {
            label: <span className="text-[#fff]">POPULAR MOVIES</span>,
            key: 'popularMovies',
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
                            key: 'Bajiro Mastani',
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
                            key: 'Drishyam',
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
                            key: 'Queen',
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
                            key: 'Wanted',
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
                            key: 'Veer',
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
                            key: 'Jannat',
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
                            key: 'Baaghi',
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
                            key: 'Baaghi-2',
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
                            key: 'Bajiro Mastani',
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
                            key: 'Drishyam',
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
                            key: 'Queen',
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
                            key: 'Wanted',
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
                            key: 'Veer',
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
                            key: 'Jannat',
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
                            key: 'Baaghi',
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
                            key: 'Baaghi-2',
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
                            key: 'Bajiro Mastani',
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
                            key: 'Drishyam',
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
                            key: 'Queen',
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
                            key: 'Wanted',
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
                            key: 'Veer',
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
                            key: 'Jannat',
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
                            key: 'Baaghi',
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
                            key: 'Baaghi-2',
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
                            key: 'Bajiro Mastani',
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
                            key: 'Drishyam',
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
                            key: 'Queen',
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
                            key: 'Wanted',
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
                            key: 'Veer',
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
                            key: 'Jannat',
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
                            key: 'Baaghi',
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
                            key: 'Baaghi-2',
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
                            key: 'Bajiro Mastani 1',
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
                    key: 'Star Jalsha',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Star Jalsha',
                    key: 'Star Jalsha',
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <header className="bg-[#ff4444] h-[100px] flex items-center">
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
                            <Select
                                className="h-[100%] select-ant-none-radius"
                                style={{ width: 140, borderRadius: 0 }}
                                options={cate}
                                value={cateSelected}
                                onChange={handleChangeCate}
                            />
                            <input
                                className="h-[100%] border-none px-2 w-[250px]"
                                style={{
                                    outline: 'none',
                                }}
                                type="text"
                                placeholder="Search Movie , Video , Music"
                            />
                            <button className="bg-[#000] text-[#fff] h-full w-[50px]">
                                <i className="bi bi-search-heart"></i>
                            </button>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#000] text-[#fff] h-[50px] w-[180px] rounded-[10px] lg:block hidden"
                        >
                            sign up
                        </button>
                    </Fragment>

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
            <Modal visible={isModalVisible} onCancel={closeModal} footer={null} width={'60vw'} height={'600px'}>
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
            <LoginModal
                handleCancel={handleCancel}
                isModalOpen={isModalOpen}
                onFinish={onFinish}
                setIsModalOpen={setIsModalOpen}
            />
            <MovieProDrawer onClose={onClose} open={open} showModal={() => setIsModalOpen(true)} />
        </header>
    );
}
