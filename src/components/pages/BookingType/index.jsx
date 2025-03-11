import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Divider, Layout, Radio, Typography } from 'antd';
const { Header, Content } = Layout;
const { Title, Text } = Typography;

const MovieTicketBooking = () => {
    return (
        <Layout className="min-h-screen bg-gray-100">
            <Header className="bg-gray-800 flex items-center h-14 px-4">
                <Button type="text" icon={<ArrowLeftOutlined />} className="text-white mr-4">
                    BACK
                </Button>
                <Text className="text-white text-lg">AQUAMAN - ENGLISH - (2:47)</Text>
            </Header>

            <Content className="p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6">
                        <Card className="flex-1">
                            <div className="grid grid-cols-2 gap-y-4">
                                <div className="font-semibold">DATE</div>
                                <div>19-DEC-2022</div>

                                <div className="font-semibold">TIME</div>
                                <div>10:00PM</div>

                                <div className="font-semibold">THEATER</div>
                                <div>ARIESPLEX SL CINEMAS</div>

                                <div className="font-semibold">SEAT</div>
                                <div>PLATINUM - P87, P88 (2 TICKETS)</div>
                            </div>

                            <div className="mt-6 relative">
                                <img
                                    src="/images/content/cc1.jpg"
                                    alt="Movie Poster"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                            <div className="mt-4">
                                <Checkbox>
                                    ADD Rs. 2 To Your Transaction As A Donation. (Uncheck If You Do Not Wish To Donate)
                                </Checkbox>
                            </div>
                            <div className="mt-6">
                                <Text className="font-semibold block mb-2">SELECT TICKET TYPE</Text>
                                <Radio.Group defaultValue="m-ticket" className="w-full">
                                    <div className="flex flex-wrap gap-3">
                                        <Radio.Button
                                            value="m-ticket"
                                            className="bg-gray-800 flex justify-center items-center text-white py-1 px-4"
                                        >
                                            M-TICKET
                                        </Radio.Button>
                                        <Radio.Button
                                            value="box-office"
                                            className="bg-gray-800 flex justify-center items-center text-white py-1 px-4"
                                        >
                                            BOX OFFICE PICKUP
                                        </Radio.Button>
                                        <Radio.Button
                                            value="print"
                                            className="bg-gray-200 text-gray-400 py-1 px-4 flex justify-center items-center"
                                            disabled
                                        >
                                            PRINT E-TICKET
                                        </Radio.Button>
                                    </div>
                                </Radio.Group>
                            </div>
                        </Card>
                        <div className="md:w-80">
                            <Card>
                                <Title level={5} className="text-center mb-4">
                                    Booking summary
                                </Title>

                                <div className="flex justify-between mb-1">
                                    <Text>Platinum - P87, P88</Text>
                                    <Text>Rs. 790.00</Text>
                                </div>
                                <Text className="text-gray-500 text-sm block mb-4">( 2 Tickets ) AUDI-5</Text>

                                <div className="flex justify-between mb-1">
                                    <Text>Internet handling fees</Text>
                                    <Text>Rs.70.80</Text>
                                </div>
                                <div className="pl-4 text-gray-500 text-sm">
                                    <div className="flex justify-between">
                                        <Text>Booking Fees</Text>
                                        <Text>₹24.00</Text>
                                    </div>
                                    <div className="flex justify-between">
                                        <Text>Integrated GST (IGST) @ 18%</Text>
                                        <Text>₹4.32</Text>
                                    </div>
                                </div>

                                <Divider dashed className="my-4" />

                                <div className="flex justify-between mb-2">
                                    <Text className="font-semibold">Sub total</Text>
                                    <Text className="font-semibold">Rs.860.80</Text>
                                </div>

                                <Text className="text-gray-500 text-sm text-center block">Current Store is Kerala</Text>

                                <div className="flex justify-between mt-4 mb-2">
                                    <Text className="font-semibold">Payable Amount</Text>
                                    <Text className="font-semibold">Rs.860.80</Text>
                                </div>

                                <Button type="primary" block className="mt-2 bg-blue-600">
                                    Proceed to Pay
                                </Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default MovieTicketBooking;
