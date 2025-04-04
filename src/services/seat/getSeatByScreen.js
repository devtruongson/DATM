import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_SCREEN_QUERY_BY_SEAT = 'screen_seat';

const getSeatByScreen = async (payload) => {
    const { data } = await api.post(`/get-seat-by-screen`, payload);
    return data;
};

export const getSeatByScreenOptions = (payload) =>
    queryOptions({
        queryKey: [GET_SCREEN_QUERY_BY_SEAT, payload],
        queryFn: () => getSeatByScreen(payload),
    });

export const useGetSeatByScreen = ({ queryConfig, payload }) => {
    return useQuery({
        ...getSeatByScreenOptions(payload),
        ...queryConfig,
        enabled: true,
    });
};
