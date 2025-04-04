import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useUpdatePasswordUser } from '../../../services/auth/updatePassword';

const PasswordUpdateModal = () => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const handleOpenModal = () => {
        setVisible(true);
    };

    const handleCloseModal = () => {
        setVisible(false);
    };

    const updatePasswordUserMutation = useUpdatePasswordUser({
        mutationConfig: {
            onSuccess() {
                Swal.fire({
                    icon: 'success',
                    text: 'Chúc mừng bạn đã cập nhật thành công',
                }).then(() => {
                    window.location.reload();
                });
            },
            onError: () => {
                alert('Có lỗi xảy ra vui lòng cập nhật lại');
            },
        },
    });

    const handleFinish = (values) => {
        updatePasswordUserMutation.mutate(values);
        handleCloseModal();
    };

    return (
        <div>
            <Button type="primary" onClick={handleOpenModal}>
                Đổi mật khẩu
            </Button>

            <Modal
                title="Update Password"
                open={visible}
                onCancel={handleCloseModal}
                footer={null}
                className="max-w-md mx-auto"
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    className="space-y-4"
                    initialValues={{
                        password: '',
                        new_password: '',
                        confirm_password: '',
                    }}
                >
                    <Form.Item
                        label="Mật khẩu cũ"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu cũ!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu mới"
                        name="new_password"
                        rules={[
                            { required: true, message: 'Vui lòng nhập mật khẩu mới!' },
                            { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu mới"
                        name="confirm_password"
                        dependencies={['new_password']}
                        rules={[
                            { required: true, message: 'Vui lòng nhập lại mật khẩu mới!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('new_password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-end space-x-2">
                            <Button onClick={handleCloseModal}>Hủy</Button>
                            <Button type="primary" htmlType="submit">
                                Lưu
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default PasswordUpdateModal;
