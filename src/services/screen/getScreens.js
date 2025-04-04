import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_SCREENS_QUERY_KEY = 'screens';

const getScreens = async () => {
    const { data } = await api.get(`/screens`);
    return data;
};

export const getScreensOptions = () =>
    queryOptions({
        queryKey: [GET_SCREENS_QUERY_KEY],
        queryFn: () => getScreens(),
    });

export const useGetScreens = ({ queryConfig }) => {
    return useQuery({
        ...getScreensOptions(),
        ...queryConfig,
        enabled: true,
    });
};
