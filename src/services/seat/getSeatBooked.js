import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_SCREEN_QUERY_BY_SEAT_BOOKED = 'screen_seat_booked';

const getSeatByScreenBooked = async (payload) => {
    const { data } = await api.post(`/get-seat-by-showtime`, payload);
    return data;
};

export const getSeatByScreenBookedOptions = (payload) =>
    queryOptions({
        queryKey: [GET_SCREEN_QUERY_BY_SEAT_BOOKED, payload],
        queryFn: () => getSeatByScreenBooked(payload),
    });

export const useGetSeatByScreenBooked = ({ queryConfig, payload }) => {
    return useQuery({
        ...getSeatByScreenBookedOptions(payload),
        ...queryConfig,
        enabled: true,
    });
};
