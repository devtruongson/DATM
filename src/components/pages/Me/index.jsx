import { CalendarOutlined, HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Divider, Row } from 'antd';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { handleLogoutUser } from '../../../app/slices/appSlice';
import { useGetProfile } from '../../../services/auth/profile';
import BasicTemplate from '../../templates/BasicTemplate';
import PasswordUpdateModal from './PasswordUpdateModal';
import ProfileUpdateModal from './ProfileUpdateModal';
import TicketModal from './TicketTable';

const { Meta } = Card;

const ProfileView = () => {
    const { data } = useGetProfile({
        enabled: true,
    });
    const dispatch = useDispatch();
    const user = useMemo(() => (data?.data ? data.data : null), [data]);

    if (!user) return;
    const { email, phone, address, birthday, avatar, status, name } = user;

    return (
        <BasicTemplate>
            <div className="flex justify-center items-center  bg-gray-100 p-4">
                <Card
                    className="w-full shadow-lg"
                    cover={
                        <div className="!flex justify-center mt-6">
                            <Avatar size={100} src={avatar} icon={!avatar && <UserOutlined />} />
                        </div>
                    }
                >
                    <Meta
                        title={<div className="text-center mt-2 mb-4 text-lg font-bold">{name}</div>}
                        description={
                            <div className="text-center text-sm text-gray-500">
                                Status: <span className="font-medium">{status}</span>
                            </div>
                        }
                    />

                    <Divider />

                    <Row gutter={[8, 16]}>
                        <Col span={24}>
                            <div className="flex items-center mb-2">
                                <MailOutlined className="mr-2 text-lg text-gray-600" />
                                <span className="font-medium text-gray-600">Email:</span>
                                <span className="ml-2">{email}</span>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="flex items-center mb-2">
                                <PhoneOutlined className="mr-2 text-lg text-gray-600" />
                                <span className="font-medium text-gray-600">Phone:</span>
                                <span className="ml-2">{phone}</span>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="flex items-center mb-2">
                                <HomeOutlined className="mr-2 text-lg text-gray-600" />
                                <span className="font-medium text-gray-600">Address:</span>
                                <span className="ml-2">{address}</span>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="flex items-center mb-2">
                                <CalendarOutlined className="mr-2 text-lg text-gray-600" />
                                <span className="font-medium text-gray-600">Birthday:</span>
                                <span className="ml-2">{birthday}</span>
                            </div>
                        </Col>
                    </Row>

                    <Divider />

                    <div className="flex justify-between">
                        <ProfileUpdateModal
                            data={{
                                email,
                                phone,
                                address,
                                birthday,
                                name: name,
                            }}
                        />
                        <PasswordUpdateModal />
                        <TicketModal />
                        <Button
                            danger
                            onClick={() => {
                                Swal.fire({
                                    icon: 'info',
                                    text: 'Bạn chắc chắn muốn đăng xuất?',
                                    showConfirmButton: true,
                                    showCancelButton: true,
                                }).then((res) => {
                                    if (res.isConfirmed) {
                                        dispatch(handleLogoutUser());
                                    }
                                });
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </Card>
            </div>
        </BasicTemplate>
    );
};

export default ProfileView;
