// import api from '@/libs/axios';
// import { QueryConfig } from '@/libs/query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_SHOW_TIME_QUERY_KEY = 'SHOW_TIME';

const getshowTime = async (payload) => {
    const { data } = await api.get('/movies', {
        params: payload,
    });
    return data;
};

export const getshowTimeOptions = (data) =>
    queryOptions({
        queryKey: [GET_SHOW_TIME_QUERY_KEY, data],
        queryFn: () => getshowTime(data),
    });

export const useGetShowTimes = ({ queryConfig, data }) => {
    return useQuery({
        ...getshowTimeOptions(data),
        ...queryConfig,
    });
};
