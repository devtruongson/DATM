import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_TICKET = 'TICKET';

const getTicket = async () => {
    const { data } = await api.get(`/tickets`);
    return data;
};
export const getTicketOptions = () =>
    queryOptions({
        queryKey: [GET_TICKET],
        queryFn: () => getTicket(),
        retry: false,
        staleTime: 1000 * 60 * 5,
    });

export const useGetTicket = ({ queryConfig, enabled }) => {
    return useQuery({
        ...getTicketOptions(),
        ...queryConfig,
        enabled: enabled,
    });
};
