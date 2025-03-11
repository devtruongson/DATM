import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Carousel, Col, Row, Space, Typography } from 'antd';

const { Title, Text } = Typography;

const MovieBannerSingle = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Row>
                <Col xs={24} md={12}>
                    <div className="relative h-full div-full">
                        <Carousel
                            className="arrow_show h-full"
                            arrows
                            prevArrow={
                                <LeftCircleFilled className="text-4xl text-red-500 absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" />
                            }
                            nextArrow={
                                <RightCircleFilled className="text-4xl text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" />
                            }
                            autoplay
                        >
                            <div>
                                <div className="h-80 bg-gray-900 relative">
                                    <img
                                        src="/images/content/movie_single/vid_slider_img.jpg"
                                        alt="Orange sports car"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="h-80 bg-gray-900">
                                    <img
                                        src="/images/content/movie_single/vid_slider_img.jpg"
                                        alt="Movie scene"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>

                <Col xs={24} md={12} className="p-8">
                    <div>
                        <Space direction="vertical" size="large" className="w-full">
                            <div>
                                <Text className="text-lg">
                                    <span className="font-bold">29 </span>
                                    <span className="text-red-500 font-bold">JULY</span>
                                    <span className="font-bold"> 2022</span>
                                </Text>
                            </div>

                            <div>
                                <Text className="text-gray-600">JHON DOE PRESENTS</Text>
                            </div>

                            <div>
                                <Title level={2} className="m-0 font-bold">
                                    THE <span className="text-red-500">RACE</span>{' '}
                                    <span className="text-red-500">RE</span>TURN
                                </Title>
                                <Text className="uppercase text-xs tracking-wider">A PRESENTER FILM PRODUCTION</Text>
                            </div>

                            <div className="pt-2">
                                <Text>
                                    Starring -{' '}
                                    <Text className="text-gray-600">
                                        Katrina Saif, Ajay Mehra, Nitin Kumar Senani, Parbesh Verma ,Sandy
                                    </Text>
                                </Text>
                            </div>

                            <div>
                                <Text>
                                    Directed by - <Text className="text-red-500">Akshay H.</Text>
                                </Text>
                            </div>

                            <div>
                                <Text>
                                    Produced by - <Text className="text-red-500">Ajay S.</Text>
                                </Text>
                            </div>
                        </Space>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MovieBannerSingle;
