import { Button } from 'antd';
import { HeartIcon } from 'lucide-react';

const RatingBookingInterface = () => {
    return (
        <div className="flex items-center gap-5 p-3">
            <div className="flex items-center">
                <HeartIcon className="text-red-500 w-6 h-6 mr-2 fill-current" />
                <div>
                    <div className="text-yellow-400 font-bold text-lg">85%</div>
                    <div className="text-gray-400 text-xs">52,291 votes</div>
                </div>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded">BOOK NOW</Button>
        </div>
    );
};

export default RatingBookingInterface;
