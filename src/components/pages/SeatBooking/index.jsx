/* eslint-disable react/prop-types */
import { Popover } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import screen from '../../../../public/images/content/screen.png';
import { formatVND } from '../../../helpers/formatVND';
import { routes } from '../../../routes';
import ContainerWapper from '../../templates/ContainerWapper';

const data = {
    film: {
        id: 1,
        name: 'Aquaman',
        nation: 'English',
        duration: '2:30',
    },
    booked: ['a3', 'a2', 'd1', 'd6'],
    price: 100000,
};

const SeatBooking = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const queryParams = useMemo(() => Object?.fromEntries(searchParams.entries()), [searchParams]);

    const [booking, setBooking] = useState([]);

    const formatDate = useMemo(() => {
        if (!queryParams?.date) return '';

        const date = new Date(queryParams?.date);
        const today = new Date();

        const isToday = date.toDateString() === today.toDateString();
        const formatOptions = isToday
            ? { day: '2-digit', month: 'short' }
            : { weekday: 'short', day: '2-digit', month: 'short' };

        return isToday
            ? `Today, ${new Intl.DateTimeFormat('en-GB', formatOptions).format(date)}`
            : new Intl.DateTimeFormat('en-GB', formatOptions).format(date);
    }, [queryParams?.date]);

    return (
        <div className="w-[100%] text-[#ffffff61]">
            <div className="bg-[#2B2D3D] w-[100%] sm:h-[120px] h-[300px] ">
                <ContainerWapper>
                    <div className="flex sm:flex-row gap-[20px] flex-col items-center justify-between">
                        <div className="">
                            <button
                                className="bg-[#3f414f] hover:bg-[#ff4444] hover:text-[#fff] px-[28px] py-[4px] rounded-[8px]"
                                onClick={() => navigate(routes.movie_booking.replace(':id', queryParams?.filmId))}
                            >
                                Back
                            </button>
                        </div>

                        <div className="">
                            <div className="flex justify-center items-end gap-[10px]">
                                <p className="uppercase text-[20px] font-[400]">{data?.film?.name}</p>
                                <p className="uppercase text-[20px] font-[400]">-</p>
                                <p className="uppercase text-[20px] font-[400]">{data?.film?.nation}</p>
                                <p className="uppercase text-[20px] font-[400]">-</p>
                                <p className="uppercase text-[20px] font-[400]">{`(${data?.film?.duration})`}</p>
                            </div>
                            <p className="text-center uppercase text-[#ffffff61] text-[16px]">
                                {formatDate}, {queryParams?.time?.replace(/(AM|PM)/, ' $1')}
                            </p>
                        </div>

                        <div className="">
                            <button className="uppercase w-[150px] h-[35px] bg-[#ff4444] border-[1px] border-solid border-[#ff4444] text-[#fff] rounded-[8px] hover:bg-[#3f414f] hover:text-[#ff4444]">
                                Proceed to Pay
                            </button>
                        </div>
                    </div>
                </ContainerWapper>
            </div>

            <div className="bg-[#333545] pt-[40px] overflow-auto">
                <ContainerWapper>
                    <div className="lg:w-[100%] w-[1300px]">
                        <p className="text-center text-[16px] uppercase mb-[40px]">Ariesplex SL Cinemas</p>
                        <img src={screen} alt="screen" className="mb-[40px]" />
                        <div className="w-[100%] flex justify-between items-center">
                            <div className="h-[2px] bg-[#ffffff61] w-[42%]"></div>
                            <p className="uppercase text-[16px] py-[40px]">Economy</p>
                            <div className="h-[2px] bg-[#ffffff61] w-[42%]"></div>
                        </div>

                        <div className="w-[100%] py-[30px] sm:px-[0px] px-[10px]">
                            <ListChair
                                target={'d'}
                                booked={data?.booked}
                                booking={booking}
                                setBooking={setBooking}
                                price={data?.price}
                            />
                        </div>

                        <div className="w-[100%] flex justify-between items-center mb-[20px]">
                            <div className="h-[2px] bg-[#ffffff61] w-[35%]"></div>
                            <p className="uppercase text-[16px] py-[40px]">Executive + 3d glasss - rs 190.00</p>
                            <div className="h-[2px] bg-[#ffffff61] w-[35%]"></div>
                        </div>

                        <div className="flex flex-col items-center gap-[40px] mb-[60px] sm:px-[0px] px-[10px]">
                            {['c', 'b', 'a'].map((item, index) => {
                                return (
                                    <div className="w-[100%]" key={index}>
                                        <ListChair
                                            target={item}
                                            booked={data?.booked}
                                            booking={booking}
                                            setBooking={setBooking}
                                            price={data?.price}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="w-[100%] h-[6px] flex justify-center items-center mb-[60px]">
                            <div className="w-[90%] h-[100%] bg-[#ff4444]"></div>
                            <div className="w-[10%] h-[100%] bg-white"></div>
                        </div>
                    </div>
                </ContainerWapper>
            </div>
        </div>
    );
};

export default SeatBooking;

const ListChair = ({ target, booked, booking, setBooking, price }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="uppercase font-[500] text-[20px]">{target}</p>
            {[
                { length: 4, space: 1 },
                { length: 13, space: 6 },
                { length: 5, space: 19 },
            ].map((item, index) => {
                return (
                    <div className="flex justify-start items-center gap-[10px]" key={index}>
                        {Array.from({ length: item.length }, (_, i) => `${target}${i + item.space}`).map((item) => {
                            return (
                                <Chair
                                    name={item}
                                    key={item}
                                    booked={booked}
                                    booking={booking}
                                    setBooking={setBooking}
                                    price={formatVND(price)}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

const Chair = ({ name, booked, booking, setBooking, price }) => {
    const isBooked = useMemo(() => booked.includes(name), [name, booked]);
    const isBooking = useMemo(() => booking.includes(name), [name, booking]);

    const color = useMemo(() => {
        if (booked.includes(name)) {
            return '#4d4f5c';
        }
        if (booking.includes(name)) {
            return '#f3c600';
        }
        return '';
    }, [booked, booking, name]);

    const handleChoose = () => {
        if (isBooking) {
            setBooking([...booking].filter((item) => item !== name));
        } else {
            setBooking((prev) => [...prev, name]);
        }
    };

    return (
        <Popover content={`Pay ${price}`}>
            <div
                className="flex flex-col items-center gap-[2px]"
                style={{ cursor: isBooked ? 'not-allowed' : 'pointer' }}
            >
                <div
                    className="w-[40px] h-[25px] rounded-[5px] border-[1px] border-solid border-[#4d4f5c] flex justify-center items-center"
                    style={{ background: color, borderColor: color, color: isBooking ? '#000' : '' }}
                    onClick={isBooked ? null : handleChoose}
                >
                    {name?.slice(1)}
                </div>
                <div
                    className="w-[30px] h-[10px] rounded-b-[5px] rounded-t-[2px] border-[1px] border-solid border-[#4d4f5c]"
                    style={{ background: color, borderColor: color }}
                    onClick={isBooked ? null : handleChoose}
                ></div>
            </div>
        </Popover>
    );
};
