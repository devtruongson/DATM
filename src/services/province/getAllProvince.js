import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_LIST_PROVINCE = 'LIST_PROVINCE';

const getListProvince = async () => {
    const { data } = await api.get(`/provinces`);
    return data;
};
export const getListProvinceOptions = () =>
    queryOptions({
        queryKey: [GET_LIST_PROVINCE],
        queryFn: () => getListProvince(),
        retry: false,
        staleTime: 1000 * 60 * 5,
    });

export const useGetListProvince = ({ queryConfig }) => {
    return useQuery({
        ...getListProvinceOptions(),
        ...queryConfig,
        enabled: true,
    });
};
