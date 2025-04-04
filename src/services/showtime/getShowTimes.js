import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_TODO_QUERY_KEY = 'communes';

const getShowTimes = async () => {
    const { data } = await api.get('/showtimes');
    return data;
};

export const getShowTimesOptions = () =>
    queryOptions({
        queryKey: [GET_TODO_QUERY_KEY],
        queryFn: () => getShowTimes(),
    });

export const useGetShowtimes = ({ queryConfig }) => {
    return useQuery({
        ...getShowTimesOptions(),
        ...queryConfig,
        enabled: true,
    });
};
