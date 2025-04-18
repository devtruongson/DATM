import { Card, Carousel, Typography } from 'antd';
const { Text } = Typography;

const crewMembers = [
    {
        id: 1,
        name: 'Peter Safran',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c6.jpg',
    },
    {
        id: 2,
        name: 'Rob Cowan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c7.jpg',
    },
    {
        id: 3,
        name: 'Geoff Johns',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c8.jpg',
    },
    {
        id: 4,
        name: 'James Wan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c5.jpg',
    },
    {
        id: 1,
        name: 'Peter Safran',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c6.jpg',
    },
    {
        id: 2,
        name: 'Rob Cowan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c7.jpg',
    },
    {
        id: 3,
        name: 'Geoff Johns',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c8.jpg',
    },
    {
        id: 4,
        name: 'James Wan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c5.jpg',
    },
    {
        id: 1,
        name: 'Peter Safran',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c6.jpg',
    },
    {
        id: 2,
        name: 'Rob Cowan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c7.jpg',
    },
    {
        id: 3,
        name: 'Geoff Johns',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c8.jpg',
    },
    {
        id: 4,
        name: 'James Wan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c5.jpg',
    },
    {
        id: 1,
        name: 'Peter Safran',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c6.jpg',
    },
    {
        id: 2,
        name: 'Rob Cowan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c7.jpg',
    },
    {
        id: 3,
        name: 'Geoff Johns',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c8.jpg',
    },
    {
        id: 4,
        name: 'James Wan',
        role: 'Actor',
        character: 'As Arthur',
        image: '/images/content/c5.jpg',
    },
];

export default function MovieCastSingle() {
    return (
        <div>
            <div className="text-center mb-8 mt-14">
                <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-8">
                    Movie Cast
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 transform -translate-y-1/2"></span>
                </h2>
                <Carousel
                    arrows={false}
                    dots={false}
                    autoplay
                    slidesToShow={9}
                    speed={300}
                    slidesToScroll={3}
                    infinite
                    className="arrow_show max-h-100 h-full"
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
                    {crewMembers.map((member) => (
                        <div key={member.id} className="px-2">
                            <Card
                                className="min-w-[100px] flex-none !border-none !shadow-none"
                                cover={<img alt={member.name} src={member.image} />}
                                styles={{
                                    body: { padding: '12px', textAlign: 'center' },
                                }}
                            >
                                <Text className="text-sm font-medium text-red-500 block">{member.name}</Text>
                                <Text type="secondary" className="text-xs block">
                                    {member.role}
                                </Text>
                                <Text type="secondary" className="text-xs block">
                                    {member.character}
                                </Text>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
