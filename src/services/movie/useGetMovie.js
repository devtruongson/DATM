import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_MOVIE_QUERY_KEY = 'movie';

const getMovie = async (id) => {
    const { data } = await api.get(`/movies/show/${id}`);
    return data;
};

export const getMovieOptions = (id) =>
    queryOptions({
        queryKey: [GET_MOVIE_QUERY_KEY, id],
        queryFn: () => getMovie(id),
    });

export const useGetMovie = ({ queryConfig, id }) => {
    return useQuery({
        ...getMovieOptions(id),
        ...queryConfig,
        enabled: true,
    });
};
