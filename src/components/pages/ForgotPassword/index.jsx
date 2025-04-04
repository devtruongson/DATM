import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [step, setStep] = useState(1);

    const handleSendOTP = async (e) => {
        e.preventDefault();
        if (!email) {
            Swal.fire({
                icon: 'info',
                text: 'Vui lòng nhập email',
            });
            return;
        }
        try {
            const res = await axios.post('http://filmgo.io.vn/api/auth/forgot-password/get-token', {
                email: email,
            });
            console.log(res);

            if (res.data.status) {
                setStep(2);
            } else {
                Swal.fire({
                    icon: 'info',
                    text: res.data.message,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!otp || !password || !passwordConfirm) {
            Swal.fire({
                icon: 'info',
                text: 'Vui lòng điền đầy đủ thông tin',
            });
            return;
        }
        if (password !== passwordConfirm) {
            Swal.fire({
                icon: 'error',
                text: 'Mật khẩu không trùng khớp',
            });
            return;
        }

        try {
            const res = await axios.put('http://filmgo.io.vn/api/auth/forgot-password/verify', {
                token: otp,
                email: email,
                password: password,
                password_confirm: passwordConfirm,
            });
            if (res.data.status) {
                Swal.fire({
                    icon: 'success',
                    text: 'Đổi mật khẩu thành công vui lòng đăng nhập lại!',
                }).then(() => {
                    window.location.href = '/';
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    text: res.data.message,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            {step === 1 && (
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Quên mật khẩu</h2>
                    <form onSubmit={handleSendOTP} className="space-y-4">
                        <input
                            required
                            placeholder="Nhập email của bạn..."
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded transition duration-200"
                        >
                            Lấy OTP
                        </button>
                    </form>
                </div>
            )}
            {step === 2 && (
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Xác nhận OTP & Đổi mật khẩu</h2>
                    <form onSubmit={handleVerifyOTP} className="space-y-4">
                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            type="text"
                            placeholder="Nhập OTP ..."
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Mật khẩu mới..."
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            type="password"
                            placeholder="Xác nhận mật khẩu..."
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded transition duration-200"
                        >
                            Xác nhận
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
