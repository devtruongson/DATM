import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_GENRES_QUERY_KEY = 'genres';

const getAllGenres = async () => {
    const { data } = await api.get(`/genres`);
    return data;
};

export const getAllGenresOptions = (data) =>
    queryOptions({
        queryKey: [GET_GENRES_QUERY_KEY, data],
        queryFn: () => getAllGenres(data),
        retry: 0,
    });

export const useGetAllGenres = ({ queryConfig, data }) => {
    return useQuery({
        ...getAllGenresOptions(data),
        ...queryConfig,
        enabled: true,
    });
};
