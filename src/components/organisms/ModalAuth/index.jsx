import { CloseOutlined, FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Form, Input, Modal } from 'antd';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { handleLoginUserSuccess, handleToggleModalAuth } from '../../../app/slices/appSlice';
import firebaseConfig from '../../../helpers/firebase';
import { useLoginUser } from '../../../services/auth/login';
import { useRegisterUser } from '../../../services/auth/register';

const LoginModal = () => {
    const isOpen = useSelector((state) => state.app.auth.isOpenModal);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [form] = Form.useForm();
    const [userFireBase, setUserFireBase] = useState(false);

    const handleToggle = () => {
        dispatch(handleToggleModalAuth());
    };

    const loginUserMutation = useLoginUser({
        mutationConfig: {
            onSuccess(data) {
                console.log(data);
                console.log({
                    user: data.user,
                    tokens: {
                        accessToken: data.access_token,
                        refreshToken: data.refresh_token,
                    },
                });
                dispatch(
                    handleLoginUserSuccess({
                        user: data.user,
                        tokens: {
                            accessToken: data.access_token,
                            refreshToken: data.refresh_token,
                        },
                    }),
                );
                Swal.fire({
                    icon: 'success',
                    text: 'Chúc mừng bạn đã đăng nhập thành công',
                }).then(() => {
                    // dispatch(handleToggleModalAuth());
                });
            },
            onError: () => {
                Swal.fire({
                    icon: 'info',
                    text: 'Email của bạn chưa được kích hoạt vui lòng kiểm tra email',
                });
            },
        },
    });

    const registerUserMutation = useRegisterUser({
        mutationConfig: {
            onSuccess() {
                Swal.fire({
                    icon: 'success',
                    text: 'Chúc mừng bạn đã đăng ký thành công vui lòng check email và đăng nhập lại',
                }).then(() => {
                    dispatch(handleToggleModalAuth());
                });
            },
            onError: () => {
                alert('Có lỗi xảy ra vui lòng đăng nhập lại');
            },
        },
    });

    const onFinish = (values) => {
        if (isLogin) {
            loginUserMutation.mutate(values);
        } else {
            const birthdayMoment = values.birthday;
            const birthdayString = birthdayMoment.format('YYYY-MM-DD');
            registerUserMutation.mutate({
                ...values,
                birthday: birthdayString,
            });
        }
        form.resetFields();
    };

    const provider = firebaseConfig();

    useEffect(() => {
        firebase.auth().signOut();
        if (!userFireBase) {
            firebase.auth().signOut();
            return;
        }
        const LoginFirebase = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                return;
            }
            console.log(user);
            let dataBuider = {
                name: user.displayName,
                email: user.email,
                password: 'loginGooogle',
                confirm_password: 'loginGooogle',
                phone: '0987654321',
                address: 'Đang cập nhật',
                birthday: '2025-04-03',
            };

            try {
                const res = await axios.post('http://filmgo.io.vn/api/auth/register', dataBuider);
                Swal.fire({
                    icon: 'info',
                    text: 'Email của bạn chưa được kích hoạt vui lòng kiểm tra email',
                });
            } catch (error) {
                loginUserMutation.mutate(dataBuider);
            }
        });

        return () => LoginFirebase();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userFireBase]);

    return (
        <div>
            <Modal
                open={isOpen}
                onCancel={handleToggle}
                footer={null}
                closeIcon={<CloseOutlined className="text-gray-600" />}
                title={<div className="text-center font-bold text-lg">{isLogin ? 'LOG IN' : 'Resgister'}</div>}
                centered
                width={400}
            >
                {isLogin ? (
                    <Form
                        form={form}
                        name="login"
                        className="pt-4"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email or mobile number!' }]}
                        >
                            <Input placeholder="Email/Mobile Number" className="py-2" />
                        </Form.Item>

                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password placeholder="Password" className="py-2" />
                        </Form.Item>

                        <div className="text-right mb-4">
                            <a href="/forgot-password" className="text-red-400 text-sm">
                                Forgot Password?
                            </a>
                        </div>

                        <Form.Item>
                            <Button
                                type="default"
                                htmlType="submit"
                                className="w-full py-5 h-auto bg-gray-200 font-medium"
                            >
                                LOGIN
                            </Button>
                        </Form.Item>

                        <Divider plain>
                            <div className="bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                OR
                            </div>
                        </Divider>

                        <Button className="w-full mb-3 h-10 bg-blue-600 text-white flex items-center justify-center">
                            <FacebookFilled className="mr-2" /> Connect With Facebook
                        </Button>

                        <Button
                            className="w-full mb-4 h-10 bg-white border flex items-center justify-center"
                            onClick={() => {
                                firebase.auth().signInWithPopup(provider.googleAuth);
                                setUserFireBase(true);
                            }}
                        >
                            <GoogleOutlined className="mr-2" /> Connect With Google
                        </Button>

                        <div className="text-center text-sm mt-2 mb-4">
                            Don&apos;t Have An Account?{' '}
                            <a href="#" className="text-red-400" onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? ' Sign Up' : 'Login'}
                            </a>
                        </div>

                        <div className="text-center text-xs text-gray-500">
                            I agree to the{' '}
                            <a href="#" className="text-gray-500">
                                Terms & Conditions
                            </a>{' '}
                            &{' '}
                            <a href="#" className="text-gray-500">
                                Privacy Policy
                            </a>
                        </div>
                    </Form>
                ) : (
                    <Form form={form} name="register" layout="vertical" onFinish={onFinish} className="pt-4">
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Name" className="py-2" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input placeholder="Email" className="py-2" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password" className="py-2" />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confirm_password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error('The two passwords that you entered do not match!'),
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm Password" className="py-2" />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input placeholder="Phone Number" className="py-2" />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!', min: 6 }]}
                        >
                            <Input placeholder="Address" className="py-2" />
                        </Form.Item>

                        <Form.Item
                            label="Birthday"
                            name="birthday"
                            rules={[{ required: true, message: 'Please select your birthday!' }]}
                        >
                            <DatePicker format="YYYY-MM-DD" className="w-full" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="default"
                                htmlType="submit"
                                className="w-full py-5 h-auto bg-gray-200 font-medium"
                            >
                                REGISTER
                            </Button>
                        </Form.Item>
                        <div className="text-center text-sm mt-2 mb-4">
                            Don&apos;t Have An Account?{' '}
                            <a href="#" className="text-red-400" onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? ' Sign Up' : 'Login'}
                            </a>
                        </div>

                        <div className="text-center text-xs text-gray-500">
                            I agree to the{' '}
                            <a href="#" className="text-gray-500">
                                Terms & Conditions
                            </a>{' '}
                            &{' '}
                            <a href="#" className="text-gray-500">
                                Privacy Policy
                            </a>
                        </div>
                    </Form>
                )}
            </Modal>
        </div>
    );
};

export default LoginModal;
