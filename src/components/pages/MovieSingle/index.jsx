import { Carousel, Typography } from 'antd';
import Card from '../../molecules/Card/Card';
import MovieBannerSingle from '../../organisms/MovieBannerSingle';
import MovieCastSingle from '../../organisms/MovieCastSingle';
import CrewSection from '../../organisms/OutCrew';
import Preview from '../../organisms/Preview';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
const { Title } = Typography;

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
    bg: '/images/content/movie_single/vid_bg.jpg',
};

const list = Array.from({ length: 10 }, (_, i) => {
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

export default function MovieSingle() {
    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="py-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-8">
                            OUR PATNER&apos;S
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 transform -translate-y-1/2"></span>
                        </h2>
                    </div>
                    <Preview data={data} />
                </div>
                <MovieBannerSingle />
                <MovieCastSingle />
                <div className="bg-[#f1f1f1] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 p-4 md:p-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-8">
                            Synopsis
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 transform -translate-y-1/2"></span>
                        </h2>
                        <div className="text-[#707070] text-[13px]">
                            <p className="mb-4">Genre - Action , Reality , Drama, Raching</p>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore a aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo const. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur at cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                            <p className="mb-4">
                                error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inveiere veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit ur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                quisquam est, qui dolorem ipsum quia dolor sit amet,
                            </p>
                            <p className="mb-4">
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                                et dolore magnam sam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ipii eex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                    </div>
                    <img src="/images/content/movie_single/v1.jpg" alt="" />
                </div>
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <Title level={2} className="uppercase font-bold">
                                VIDEO & PHOTOS
                            </Title>
                            <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-h-[400px] overflow-hidden">
                            <div className="lg:col-span-3">
                                <Carousel autoplay slidesToShow={3} vertical>
                                    <div>
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </Carousel>
                            </div>
                            <div className="lg:col-span-6 relative">
                                <Carousel autoplay arrows className="arrow_show">
                                    <div className="h-full">
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="h-full">
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="h-full">
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </Carousel>
                            </div>
                            <div className="lg:col-span-3">
                                <Carousel autoplay slidesToShow={3} vertical>
                                    <div>
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/images/content/vp7.jpg"
                                            alt="On set filming"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </ContainerWapper>
            <CrewSection />
            <div className='bg-[url("/images/content/theater_bg.jpg")] bg-no-repeat custom_card py-10 backdrop-brightness-50'>
                <Title
                    level={2}
                    className="uppercase font-bold text-[#fff] text-center pb-5"
                    style={{
                        color: '#fff',
                    }}
                >
                    TOP MOVIES IN THEATRES
                </Title>
                <Carousel
                    autoplay
                    slidesToShow={8}
                    arrows
                    className="arrow_show max-h-100"
                    responsive={[
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 8,
                            },
                        },
                    ]}
                >
                    {list.map((item, index) => {
                        return (
                            <div key={index}>
                                <Card data={item} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </MainTemplate>
    );
}
