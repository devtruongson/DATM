import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_LIST_MOVIE_SHOWING = 'LIST_MOVIE_SHOWING';

const getListMovie = async () => {
    const { data } = await api.get(`/moviesShowing`);
    return data;
};
export const getListMovieOptions = () =>
    queryOptions({
        queryKey: [GET_LIST_MOVIE_SHOWING],
        queryFn: () => getListMovie(),
        retry: false,
        staleTime: 1000 * 60 * 5,
    });

export const useGetListMovieShowing = ({ queryConfig, enabled }) => {
    return useQuery({
        ...getListMovieOptions(),
        ...queryConfig,
        enabled: enabled,
    });
};
