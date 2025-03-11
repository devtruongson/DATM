import { CheckCircleOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import MainTemplate from '../../templates/MainTemplate';

const BookingConfirmation = () => {
    return (
        <MainTemplate>
            <div className="container mx-auto">
                <div className="text-center py-6 border-b">
                    <CheckCircleOutlined className="text-5xl text-green-500 mb-4" />
                    <h2 className="text-2xl font-[500] text-gray-800">
                        Payment of <strong>Rs 373.00</strong> Complete successful
                    </h2>
                </div>
                <div className="p-6 bg-white shadow-md rounded-lg w-full ">
                    <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-red-500 mb-2">YOUR BOOKING IS CONFIRMED!</h3>
                        <p className="text-gray-600">Booking ID: SSST000003106644</p>
                    </div>
                    <div className="flex items-center border-t border-b py-4">
                        <div className="w-24 h-32 mr-4">
                            <img
                                src="/images/content/tcc1.png"
                                alt="Movie Poster"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-bold text-lg">Njan Prakashan</h4>
                            <p className="text-gray-600">Malayalam, 2D</p>
                            <p className="text-gray-600">Mon, 31 Dec | 09:30PM</p>
                            <p className="text-gray-600">Carnival Artech Central Mall, Trivandrum Audi-5</p>
                            <div className="flex items-center mt-2">
                                <span className="mr-4 font-semibold">2 TICKETS</span>
                                <span className="text-gray-600">EXECUTIV - K1, K2</span>
                            </div>
                        </div>
                        <div className="w-24 h-24">
                            <QrcodeOutlined className="text-4xl text-gray-400" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="font-semibold">Total Amount</span>
                        <span className="font-bold text-lg">₹373.00</span>
                    </div>
                    <p className="text-center text-gray-600 mt-4 text-sm">
                        You can access your ticket from your Profile. We will send you an e-Mail/SMS Confirmation with
                        in 15 Minutes.
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <Button type="primary" className="bg-red-500 hover:bg-red-600">
                            INVITE FRIENDS
                        </Button>
                        <Button>LOCATE FRIEND</Button>
                    </div>
                </div>
            </div>
        </MainTemplate>
    );
};

export default BookingConfirmation;
