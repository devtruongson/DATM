import { Carousel, Typography } from 'antd';
import { useState } from 'react';
import Card from '../../molecules/Card/Card';
import ListCalendar from '../../organisms/ListCalendar/ListCalendar';
import MovieDetailsSingleSecond from '../../organisms/MovieDetailSingleSecond';
import Preview from '../../organisms/Preview';
import BasicTemplate from '../../templates/BasicTemplate';
import ContainerWapper from '../../templates/ContainerWapper';
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

export default function MovieSingleSecond() {
    const [currentDate, setCurrentDate] = useState(() => new Date().toISOString().split('T')[0].replace(/-/g, '/'));

    return (
        <BasicTemplate isContainer={false}>
            <ContainerWapper>
                <div className="pt-[25px] w-full">
                    <Preview data={data} />
                </div>
            </ContainerWapper>
            <div className="mt-[40px]">
                <ListCalendar currentDate={currentDate} setCurrentDate={setCurrentDate} isBookNow={true} />
            </div>
            <div>
                <MovieDetailsSingleSecond />
            </div>
            <div>
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
                    <Carousel autoplay arrows className="arrow_show" slidesToShow={8}>
                        {list.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card data={item} />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </BasicTemplate>
    );
}
