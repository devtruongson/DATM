/* eslint-disable react/prop-types */
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Input, Layout, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { formatVND } from '../../../helpers/formatVND';
const { Header, Content } = Layout;
const { Title, Text } = Typography;

function calculateTotal(products) {
    return products.reduce((total, product) => {
        const price = parseFloat(product.price);
        return total + price * product.quantity;
    }, 0);
}

// eslint-disable-next-line react/prop-types
const MovieTicketBooking = ({ handleCreateOrder, dataOrder, className, setStep, firm, bookings, promoCode }) => {
    function getPriceSeatTotal() {
        let total = 0;
        bookings.forEach((item) => {
            total += parseFloat(item.price);
        });

        return total;
    }

    const [discountCode, setDiscountCode] = useState('');
    const [percentDiscount, setPercentDiscount] = useState(0);

    useEffect(() => {
        if (promoCode.length === 0) return;
        const percent = promoCode.find((item) => item.code === discountCode)?.discount_amount;
        if (percent) {
            setPercentDiscount(parseFloat(percent));
        } else {
            setPercentDiscount(0);
        }
    }, [discountCode, promoCode]);

    return (
        <Layout className={`min-h-screen bg-gray-100 ${className}`}>
            <Header className="bg-gray-800 flex items-center h-14 px-4">
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    className="text-white mr-4"
                    onClick={() => setStep((prev) => prev - 1)}
                >
                    BACK
                </Button>
                <Text className="text-white text-lg">{firm ? firm?.title : ''}</Text>
            </Header>

            <Content className="p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6">
                        <Card className="flex-1">
                            <div className="grid grid-cols-2 gap-y-4">
                                <div className="font-semibold">DATE</div>
                                <div>{firm ? firm?.date : ''}</div>

                                <div className="font-semibold">TIME</div>
                                <div>
                                    {firm?.showTime
                                        ? `${firm?.showTime?.start_time} - ${firm?.showTime?.end_time}`
                                        : ''}
                                </div>

                                <div className="font-semibold">THEATER</div>
                                <div>{firm?.screen ? firm?.screen?.cinema?.name : ''}</div>

                                <div className="font-semibold">SEAT</div>
                                <div>
                                    PLATINUM -{' '}
                                    {bookings?.map((item, index) => (
                                        <span className="mx-2" key={index}>
                                            {item.name}
                                        </span>
                                    ))}{' '}
                                    ({bookings?.length} TICKETS)
                                </div>
                            </div>

                            <div className="mt-6 relative">
                                <img
                                    src={firm ? firm?.poster : '/images/content/cc1.jpg'}
                                    alt="Movie Poster"
                                    className="w-full h-auto rounded-md max-h-[500px] object-cover"
                                />
                            </div>
                        </Card>
                        <div className="md:w-80">
                            <Card>
                                <Title level={5} className="text-center mb-4">
                                    Booking summary
                                </Title>

                                <div className="flex justify-between mb-1">
                                    <Text>
                                        Ghế -{' '}
                                        {bookings?.map((item, index) => (
                                            <span className="mx-2" key={index}>
                                                {item.name}
                                            </span>
                                        ))}
                                    </Text>
                                    <Text>{formatVND(Math.floor(parseFloat(getPriceSeatTotal())))}</Text>
                                </div>
                                <div className="mb-1">
                                    <Text>
                                        Sản phẩm:
                                        {dataOrder?.map((item, index) => (
                                            <span className="mx-2 bg-slate-400 block mb-1 rounded-md" key={index}>
                                                {item.name}
                                            </span>
                                        ))}
                                    </Text>
                                    <Text className="block text-right mb-4">
                                        {formatVND(Math.floor(parseFloat(calculateTotal(dataOrder))))}
                                    </Text>
                                </div>

                                <div className="flex justify-between mt-4 mb-2">
                                    <Text className="font-semibold">Payable Amount</Text>
                                    <Text className="font-semibold">
                                        <div className={`${percentDiscount ? 'line-through text-[#666]' : ''}`}>
                                            {formatVND(
                                                Math.floor(calculateTotal(dataOrder) + parseFloat(getPriceSeatTotal())),
                                            )}
                                        </div>
                                        {percentDiscount ? (
                                            <div>
                                                {formatVND(
                                                    Math.floor(
                                                        calculateTotal(dataOrder) +
                                                            parseFloat(
                                                                getPriceSeatTotal() - parseFloat(percentDiscount),
                                                            ),
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </Text>
                                </div>
                                <Input
                                    placeholder="Nhập mã giảm giá"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className="mr-2"
                                />
                                <Button
                                    type="primary"
                                    block
                                    className="mt-2 bg-blue-600"
                                    onClick={() => handleCreateOrder(dataOrder, discountCode)}
                                >
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
