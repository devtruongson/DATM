import { useMutation } from '@tanstack/react-query';
import api from '../../libs/axios';

const update = async (payload) => {
    const { data } = await api.put('/profile/update', payload);
    return data;
};

export const useUpdateUser = ({ mutationConfig }) => {
    return useMutation({
        ...mutationConfig,
        mutationFn: update,
    });
};
