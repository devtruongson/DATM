import { useMutation } from '@tanstack/react-query';
import api from '../../libs/axios';

const order = async (payload) => {
    const { data } = await api.post('/tickets/create', payload);
    return data;
};

export const useCreateOrder = ({ mutationConfig }) => {
    return useMutation({
        ...mutationConfig,
        mutationFn: order,
    });
};
