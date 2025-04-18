import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_ALL_MOVIES_QUERY_KEY = 'movies';

const getAllMovies = async () => {
    const { data } = await api.get(`/movies`);
    return data;
};

export const getAllMoviesOptions = (data) =>
    queryOptions({
        queryKey: [GET_ALL_MOVIES_QUERY_KEY, data],
        queryFn: () => getAllMovies(data),
    });

export const useGetAllMovies = ({ queryConfig, data }) => {
    return useQuery({
        ...getAllMoviesOptions(data),
        ...queryConfig,
        enabled: true,
    });
};
