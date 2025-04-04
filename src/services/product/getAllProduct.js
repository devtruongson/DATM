import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_PRODUCT_QUERY_KEY = 'genres';

const getAllProduct = async () => {
    const { data } = await api.get(`/products`);
    return data;
};

export const getAllProductOptions = () =>
    queryOptions({
        queryKey: [GET_PRODUCT_QUERY_KEY],
        queryFn: () => getAllProduct(),
        retry: 0,
    });

export const useGetAllProduct = ({ queryConfig }) => {
    return useQuery({
        ...getAllProductOptions(),
        ...queryConfig,
        enabled: true,
    });
};
