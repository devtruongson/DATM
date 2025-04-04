import { useMutation } from '@tanstack/react-query';
import api from '../../libs/axios';

const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload);
    return data;
};

export const useRegisterUser = ({ mutationConfig }) => {
    return useMutation({
        ...mutationConfig,
        mutationFn: register,
    });
};
