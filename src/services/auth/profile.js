import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_PROFILE = 'PROFILE';

const getProfile = async () => {
    const { data } = await api.get(`/auth/profile`);
    return data;
};
export const getProfileOptions = () =>
    queryOptions({
        queryKey: [GET_PROFILE],
        queryFn: () => getProfile(),
        retry: false,
        staleTime: 1000 * 60 * 5,
    });

export const useGetProfile = ({ queryConfig, enabled }) => {
    return useQuery({
        ...getProfileOptions(),
        ...queryConfig,
        enabled: enabled,
    });
};
