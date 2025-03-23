import { useMutation } from '@tanstack/react-query';
import api from '../../libs/axios';

const login = async (payload) => {
    const { data } = await api.post('/auth/login', payload);
    return data;
};

export const useLoginUser = ({ mutationConfig }) => {
    return useMutation({
        ...mutationConfig,
        mutationFn: login,
    });
};
