import { useMutation } from '@tanstack/react-query';
import api from '../../libs/axios';

const update = async (payload) => {
    const { data } = await api.post('/auth/reset-password', payload);
    return data;
};

export const useUpdatePasswordUser = ({ mutationConfig }) => {
    return useMutation({
        ...mutationConfig,
        mutationFn: update,
    });
};
