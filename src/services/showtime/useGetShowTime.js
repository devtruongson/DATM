// import api from '@/libs/axios';
// import { QueryConfig } from '@/libs/query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_TODO_QUERY_KEY = 'communes';

const getTodo = async (payload) => {
    const { data } = await api.get('/movies', {
        params: payload,
    });
    return data;
};

export const getTodoOptions = (data) =>
    queryOptions({
        queryKey: [GET_TODO_QUERY_KEY, data],
        queryFn: () => getTodo(data),
    });

export const useGetTodo = ({ queryConfig, data }) => {
    return useQuery({
        ...getTodoOptions(data),
        ...queryConfig,
    });
};
