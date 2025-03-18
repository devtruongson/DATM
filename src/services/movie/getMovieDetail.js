import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_DETAIL_MOVIE = 'DETAIL_MOVIE';

const getDetailMovie = async (payload) => {
    const { data } = await api.get(`/api/movies/show/${payload.id}`);
    return data;
};

export const getDetailMovieOptions = (payload) =>
    queryOptions({
        queryKey: [GET_DETAIL_MOVIE, payload],
        queryFn: () => getDetailMovie(payload),
        retry: false,
        staleTime: 1000 * 60 * 5,
    });

export const useGetDetailMovie = ({ queryConfig, payload, enabled }) => {
    return useQuery({
        ...getDetailMovieOptions(payload),
        ...queryConfig,
        enabled,
    });
};
