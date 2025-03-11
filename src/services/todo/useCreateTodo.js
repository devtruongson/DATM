// import { MutationConfig } from '@/libs/query';

import { useMutation } from '@tanstack/react-query';
import api from '../../libs/axios';

const todo = async (payload) => {
    const { data } = await api.post('', payload); // or patch - put - delete
    return data;
};

export const useCreateTodo = ({ mutationConfig }) => {
    return useMutation({
        ...mutationConfig,
        mutationFn: todo,
    });
};
