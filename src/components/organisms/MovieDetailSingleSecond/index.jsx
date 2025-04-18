import { FacebookOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Card, Tabs, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const MovieDetailsSingleSecond = () => {
    const trendingStories = [
        {
            id: 1,
            title: 'Aquaman: Film Review - Makes A Refreshing Spl...',
            date: '14 December',
            image: '/images/content/md1.png',
        },
        {
            id: 2,
            title: 'Heres Proof That the Hype Is Real for James ...',
            date: '25 December',
            image: '/images/content/md2.png',
        },
        {
            id: 3,
            title: 'The Epic Cast of Aquaman Will Definitely Make...',
            date: '28 December',
            image: '/images/content/md3.png',
        },
    ];

    const castMembers = [
        {
            id: 1,
            name: 'Willem Dafoe',
            role: 'Actor',
            character: 'As Arthur',
            image: '/images/content/c3.jpg',
        },
        {
            id: 2,
            name: 'Amber Heard',
            role: 'Actor',
            character: 'As Arthur',
            image: '/images/content/c4.jpg',
        },
        {
            id: 3,
            name: 'Jason Momoa',
            role: 'Actor',
            character: 'As Arthur',
            image: '/images/content/c1.jpg',
        },
        {
            id: 4,
            name: 'Nicole Kidman',
            role: 'Actor',
            character: 'As Arthur',
            image: '/images/content/c2.jpg',
        },
    ];

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
    ];

    return (
        <div className="max-w-6xl mx-auto p-4 font-sans">
            <div className="mt-8 flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
                    <div className="mb-8">
                        <Title level={4} className="uppercase mb-0">
                            Trending Stories
                        </Title>
                        <div className="h-1 w-16 bg-red-500 mb-4"></div>

                        <div className="flex overflow-x-auto space-x-4 pb-4">
                            {trendingStories.map((story) => (
                                <Card
                                    key={story.id}
                                    className="min-w-[220px] flex-none !border-none !shadow-none"
                                    cover={<img alt={story.title} src={story.image} />}
                                    styles={{
                                        body: { padding: '12px' },
                                    }}
                                >
                                    <Text strong className="text-sm leading-tight block">
                                        {story.title}
                                    </Text>
                                    <Text type="secondary" className="text-xs mt-1 block">
                                        {story.date}
                                    </Text>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="mb-8">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span className="px-4">Summary</span>} key="1">
                                <Title level={5} className="uppercase mb-4">
                                    Synopsis
                                </Title>
                                <Paragraph className="text-sm leading-relaxed text-gray-700">
                                    Immediately following the events of Justice League, Arthur Curry, the reluctant heir
                                    to the underwater kingdom of Atlantis, tries to balance the world of the surface
                                    dwellers and his own people. But where does his loyalty lie? In the water or on the
                                    land? While Aquaman finds himself at crossroads with these questions, closer to home
                                    a known foe tries to dethrone him.
                                </Paragraph>
                            </TabPane>
                            <TabPane tab={<span className="px-4">Behind The Scenes</span>} key="2">
                                <Title level={5} className="uppercase mb-4">
                                    Behind The Scenes
                                </Title>
                                <Paragraph className="text-sm text-gray-700">
                                    Behind the scenes content would appear here.
                                </Paragraph>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="mb-8">
                        <Title level={5} className="uppercase mb-4">
                            Cast
                        </Title>
                        <div className="relative">
                            <div className="flex overflow-x-auto space-x-6 pb-4">
                                {castMembers.map((member) => (
                                    <Card
                                        key={member.id}
                                        cover={<img alt={member.name} src={member.image} />}
                                        className="min-w-[100px] flex-none !border-none !shadow-none"
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
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <Title level={5} className="uppercase mb-4">
                            Crew
                        </Title>
                        <div className="relative">
                            <div className="flex overflow-x-auto space-x-6 pb-4">
                                {crewMembers.map((member) => (
                                    <Card
                                        key={member.id}
                                        cover={<img alt={member.name} src={member.image} />}
                                        className="min-w-[100px] flex-none !border-none !shadow-none"
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <Card className="mb-6 border border-dashed" bordered={true}>
                        <div className="text-center">
                            <Text strong className="text-sm block mb-2">
                                Highest grossing movie in Mumbai in last 24 hours
                            </Text>
                            <Text className="text-xs text-red-500">Know Box Office Report</Text>
                        </div>
                    </Card>
                    <Card
                        className="mb-6 bg-gray-800 !border-none !shadow-none"
                        styles={{
                            body: { padding: '12px' },
                        }}
                    >
                        <Text strong className="text-sm text-white">
                            CORPORATE BOOKING
                        </Text>
                    </Card>
                    <Card
                        className="mb-6 object-cover rounded-md !border-none !shadow-none"
                        cover={<img alt="Fantasy Sports" src="/images/index_III/add.png" />}
                        styles={{
                            body: { padding: 0 },
                        }}
                    />
                    <div>
                        <Title level={5} className="mb-4">
                            PROFILES
                        </Title>
                        <div className="flex space-x-2">
                            <Button type="primary" shape="circle" icon={<FacebookOutlined />} className="bg-blue-600" />
                            <Button type="primary" shape="circle" icon={<TwitterOutlined />} className="bg-blue-400" />
                            <Button type="primary" shape="circle" icon={<LinkedinOutlined />} className="bg-blue-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsSingleSecond;
