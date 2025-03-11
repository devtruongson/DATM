import { CloseOutlined, FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Modal } from 'antd';

// eslint-disable-next-line react/prop-types
const LoginModal = ({ isModalOpen, handleCancel, onFinish }) => {
    return (
        <div>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                closeIcon={<CloseOutlined className="text-gray-600" />}
                title={<div className="text-center font-bold text-lg">LOG IN</div>}
                centered
                width={400}
            >
                <Form
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
                        <a href="#" className="text-red-400 text-sm">
                            Forgot Password?
                        </a>
                    </div>

                    <Form.Item>
                        <Button type="default" htmlType="submit" className="w-full py-5 h-auto bg-gray-200 font-medium">
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

                    <Button className="w-full mb-4 h-10 bg-white border flex items-center justify-center">
                        <GoogleOutlined className="mr-2" /> Connect With Google
                    </Button>

                    <div className="text-center text-sm mt-2 mb-4">
                        Don&apos;t Have An Account?{' '}
                        <a href="#" className="text-red-400">
                            Sign Up
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
            </Modal>
        </div>
    );
};

export default LoginModal;
