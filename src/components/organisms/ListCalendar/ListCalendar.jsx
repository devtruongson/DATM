/* eslint-disable react/prop-types */
import RatingBookingInterface from '../../atoms/RatingBookingInterface';
import ContainerWapper from '../../templates/ContainerWapper';

const ListCalendar = ({ currentDate, setCurrentDate, isBookNow = false }) => {
    const getNextFiveDays = () => {
        const days = [];

        for (let i = 0; i < 5; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);

            const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '/');

            days.push({ fullDate: formattedDate, isToday: formattedDate === currentDate });
        }

        return days;
    };

    return (
        <div className="h-[100px] w-[100%] bg-[#333545]">
            <ContainerWapper>
                <div className="w-[100%] h-[65px] flex justify-between items-center gap-[20px]">
                    <div className="w-[100%] h-[65px] flex justify-start items-center gap-[20px]">
                        {getNextFiveDays().map((item, index) => (
                            <CalendarCommon data={item} key={index} setCurrentDate={setCurrentDate} />
                        ))}
                    </div>
                    {isBookNow && <RatingBookingInterface />}
                </div>
            </ContainerWapper>
        </div>
    );
};

export default ListCalendar;

const CalendarCommon = ({ data, setCurrentDate }) => {
    const dateObj = new Date(data?.fullDate.replace(/\//g, '-'));
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = weekdays[dateObj.getDay()];
    const date = dateObj.getDate();

    return (
        <div
            className={`w-[65px] h-[65px] cursor-pointer rounded-[10px] overflow-hidden`}
            onClick={() => setCurrentDate(data?.fullDate)}
        >
            <div className={`h-[25px] flex justify-center items-center ${data.isToday ? 'bg-red-500' : ''}`}>
                <p className="text-white">{day}</p>
            </div>
            <div className={`h-[45px] flex justify-center items-center ${data.isToday ? 'bg-white' : 'text-white'}`}>
                {date}
            </div>
        </div>
    );
};
