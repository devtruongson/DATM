import { LikeOutlined, SmileOutlined, TrophyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Carousel, Statistic, Typography } from 'antd';
import MainTemplate from '../../templates/MainTemplate';

const { Title, Paragraph, Text } = Typography;

const FilmProductionWebsite = () => {
    // Sample data
    const teamMembers = [
        { id: 1, name: 'JOHAN DOE', role: 'Director', image: '/images/content/about/tm2.jpg' },
        { id: 2, name: 'AKSHAY H.', role: 'Director', image: '/images/content/about/tm3.jpg' },
        { id: 3, name: 'AJAY S.', role: 'Director', image: '/images/content/about/tm4.jpg' },
        { id: 4, name: 'SANDY S.', role: 'Director', image: '/images/content/about/tm5.jpg' },
        { id: 5, name: 'FARHAN S.', role: 'Director', image: '/images/content/about/tm6.jpg' },
        { id: 6, name: 'VIJAY P.', role: 'Director', image: '/images/content/about/tm7.jpg' },
    ];

    const stats = [
        { id: 1, value: 2540, title: 'Success Movie', icon: <UserOutlined /> },
        { id: 2, value: 7325, title: 'Happy Clients', icon: <SmileOutlined /> },
        { id: 3, value: 1924, title: 'Awards', icon: <TrophyOutlined /> },
        { id: 4, value: 4275, title: 'Success Movie', icon: <LikeOutlined /> },
    ];

    return (
        <MainTemplate>
            <div className="container mx-auto">
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <Title level={2} className="uppercase font-bold">
                                ABOUT PRESENTER
                            </Title>
                            <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="relative">
                                <img
                                    src="/images/content/about/ap1.jpg"
                                    alt="Film projector"
                                    className="w-full h-auto"
                                />
                                <div className="mt-8">
                                    <Title level={4} className="uppercase font-bold">
                                        <span className="relative">
                                            ABOUT OUR JOURNEY
                                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
                                        </span>
                                    </Title>
                                    <Paragraph className="mt-4 text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        nisi ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in id in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.
                                    </Paragraph>
                                    <Paragraph className="mt-4 text-gray-600">
                                        Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                        aperiam, eaque ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
                                    </Paragraph>
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <Carousel autoplay arrows className="arrow_show">
                                        <div>
                                            <img
                                                src="/images/content/about/ap2.jpg"
                                                alt="On set filming"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                src="/images/content/about/ap2.jpg"
                                                alt="On set filming"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                src="/images/content/about/ap2.jpg"
                                                alt="On set filming"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </Carousel>
                                </div>

                                <div className="mt-8">
                                    <Title level={4} className="uppercase font-bold">
                                        <span className="relative">
                                            WHO WE ARE
                                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
                                        </span>
                                    </Title>

                                    <Paragraph className="mt-4 text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        nisi ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Paragraph>

                                    <Paragraph className="mt-4 text-gray-600">
                                        Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est, ut perspiciatis unde omnis iste natus error
                                        sit voluptatem accusantium dolore; emque laudantium totam rem.
                                    </Paragraph>

                                    <div className="grid grid-cols-2 gap-6 mt-6">
                                        <div>
                                            <div className="flex items-center text-red-500">
                                                <span className="mr-2">▶</span>
                                                <Text className="text-sm">Movie Trailer Making</Text>
                                            </div>
                                            <div className="flex items-center text-red-500 mt-2">
                                                <span className="mr-2">▶</span>
                                                <Text className="text-sm">Vfx Work shop</Text>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center text-red-500">
                                                <span className="mr-2">▶</span>
                                                <Text className="text-sm">Movie Trailer Making</Text>
                                            </div>
                                            <div className="flex items-center text-red-500 mt-2">
                                                <span className="mr-2">▶</span>
                                                <Text className="text-sm">Vfx Work shop</Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-gray-50">
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
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <Title level={2} className="uppercase font-bold">
                                DIRECTOR AND TEAM
                            </Title>
                            <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="lg:col-span-2">
                                <Card
                                    hoverable
                                    cover={<img src="/images/content/about/tm1.jpg" alt="Main Director" />}
                                    bodyStyle={{ padding: '16px', textAlign: 'center' }}
                                    className="h-full"
                                >
                                    <Title level={5} className="uppercase m-0">
                                        {teamMembers[0].name}
                                    </Title>
                                    <Text className="text-gray-500">{teamMembers[0].role}</Text>
                                </Card>
                            </div>

                            <div className="lg:col-span-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {teamMembers.slice(1, 7).map((member) => (
                                        <Card
                                            key={member.id}
                                            hoverable
                                            cover={<img src={member.image} alt={member.name} />}
                                            bodyStyle={{ padding: '16px', textAlign: 'center' }}
                                        >
                                            <Title level={5} className="uppercase m-0">
                                                {member.name}
                                            </Title>
                                            <Text className="text-gray-500">{member.role}</Text>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <Button
                                type="primary"
                                className="bg-red-500 border-none hover:bg-red-600 px-8 py-1 h-auto uppercase"
                            >
                                View More
                            </Button>
                        </div>
                    </div>
                </section>
                <section
                    className="py-12 bg-gray-900 bg-opacity-90 relative overflow-hidden"
                    style={{
                        backgroundImage: 'url(/api/placeholder/1500/300)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat) => (
                                <div key={stat.id} className="text-center">
                                    <div className="w-12 h-12 bg-red-500 rounded flex items-center justify-center mx-auto text-white text-2xl">
                                        {stat.icon}
                                    </div>
                                    <Statistic
                                        value={stat.value}
                                        className="mt-4"
                                        valueStyle={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }}
                                    />
                                    <Text className="text-white">{stat.title}</Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainTemplate>
    );
};

export default FilmProductionWebsite;
