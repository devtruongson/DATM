import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_SCREEN_QUERY_KEY = 'screen';

const getScreen = async (id) => {
    const { data } = await api.get(`/screens/show/${id}`);
    return data;
};

export const getScreenOptions = (id) =>
    queryOptions({
        queryKey: [GET_SCREEN_QUERY_KEY, id],
        queryFn: () => getScreen(id),
    });

export const useGetScreen = ({ queryConfig, id }) => {
    return useQuery({
        ...getScreenOptions(id),
        ...queryConfig,
        enabled: true,
    });
};
