import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_LIST_MOVIE = 'LIST_MOVIE';

const getListMovie = async () => {
    const { data } = await api.get(`/api/movies`);
    return data;
};
export const getListMovieOptions = () =>
    queryOptions({
        queryKey: [GET_LIST_MOVIE],
        queryFn: () => getListMovie(),
        retry: false,
        staleTime: 1000 * 60 * 5,
    });

export const useGetListMovie = ({ queryConfig, enabled }) => {
    return useQuery({
        ...getListMovieOptions(),
        ...queryConfig,
        enabled: enabled,
    });
};
