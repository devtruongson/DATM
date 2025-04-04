import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_SHOWTIME_QUERY_KEY = 'showtime';

const getShowTimes = async (id) => {
    const { data } = await api.get(`/showtimes/show/${id}`);
    return data;
};

export const getShowTimeOptions = (id) =>
    queryOptions({
        queryKey: [GET_SHOWTIME_QUERY_KEY, id],
        queryFn: () => getShowTimes(id),
    });

export const useGetShowTime = ({ queryConfig, id }) => {
    return useQuery({
        ...getShowTimeOptions(id),
        ...queryConfig,
        enabled: true,
    });
};
