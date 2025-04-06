import { CheckCircleOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../../../libs/axios';
import MainTemplate from '../../templates/MainTemplate';

const BookingConfirmation = () => {
    const [searchParams] = useSearchParams();
    const queryParams = useMemo(() => Object?.fromEntries(searchParams.entries()), [searchParams]);
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        axios.get('/tickets').then((res) => {
            const { data } = res.data;
            if (data[0]?.status === 'paid') {
                setTicket(data[0]);
            }
        });
    }, [queryParams]);

    console.log(ticket);

    return (
        <MainTemplate>
            {ticket && (
                <div className="container mx-auto">
                    <div className="text-center py-6 border-b">
                        <CheckCircleOutlined className="text-5xl text-green-500 mb-4" />
                        <h2 className="text-2xl font-[500] text-gray-800">
                            Payment of <strong>{ticket.total_amount}</strong> Complete successful
                        </h2>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg w-full ">
                        <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-red-500 mb-2">YOUR BOOKING IS CONFIRMED!</h3>
                            <p className="text-gray-600">Booking ID: {ticket.ticket_code}</p>
                        </div>
                        <div className="flex items-center border-t border-b py-4">
                            <div className="w-24 h-32 mr-4">
                                <img
                                    src="https://img.pikbest.com/png-images/20241031/professional-law-firm-logo-vector-on-transparent-background_11037315.png!sw800"
                                    alt="Movie Poster"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <div className="flex-grow">
                                <h4 className="font-bold text-lg">{ticket.movie_name}</h4>
                                <p className="text-gray-600">
                                    <strong>Ngày chiếu: </strong>
                                    {ticket.showtime}
                                </p>
                                <div className="flex items-center mt-2">
                                    <span className="mr-4 font-semibold">TICKETS</span>
                                    <span className="text-gray-600">
                                        <strong>Chỗ ngồi:</strong> {ticket.seats}
                                    </span>
                                </div>
                            </div>
                            <div className="w-24 h-24">
                                <QrcodeOutlined className="text-4xl text-gray-400" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="font-semibold">Total Amount</span>
                            <span className="font-bold text-lg">{ticket.total_amount}</span>
                        </div>
                        <p className="text-center text-gray-600 mt-4 text-sm">
                            You can access your ticket from your Profile. We will send you an e-Mail/SMS Confirmation
                            with in 15 Minutes.
                        </p>
                        <div className="flex justify-center space-x-4 mt-6">
                            <Button type="primary" className="bg-red-500 hover:bg-red-600">
                                INVITE FRIENDS
                            </Button>
                            <Button>LOCATE FRIEND</Button>
                        </div>
                    </div>
                </div>
            )}
        </MainTemplate>
    );
};

export default BookingConfirmation;
