/* eslint-disable react/prop-types */
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useUpdateUser } from '../../../services/auth/updateProfile';

const ProfileUpdateModal = ({ data }) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const handleOpenModal = () => {
        setVisible(true);
    };

    const handleCloseModal = () => {
        setVisible(false);
    };

    const updateUserMutation = useUpdateUser({
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
                alert('Mật khẩu cũ không đúng');
            },
        },
    });

    const handleFinish = (values) => {
        const birthdayMoment = values.birthday;
        const birthdayString = birthdayMoment.format('YYYY-MM-DD');
        updateUserMutation.mutate({
            _method: 'PUT',
            ...values,
            birthday: birthdayString,
        });
        handleCloseModal();
    };

    return (
        <div>
            <Button type="primary" onClick={handleOpenModal}>
                Edit Profile
            </Button>

            <Modal
                title="Update Profile"
                open={visible}
                onCancel={handleCloseModal}
                footer={null}
                className="max-w-lg mx-auto"
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    className="space-y-4"
                    initialValues={{
                        ...data,
                        birthday: moment(data.birthday ? data.birthday : ''),
                    }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Email' },
                            { type: 'email', message: 'Định dạng email không hợp lệ' },
                        ]}
                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Vui lòng nhập name' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Birthday"
                        name="birthday"
                        rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
                    >
                        <DatePicker format="YYYY-MM-DD" className="w-full" />
                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-end space-x-2">
                            <Button onClick={handleCloseModal}>Cancel</Button>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ProfileUpdateModal;
