import { useState } from 'react';

export default function Policy() {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', title: 'Điều khoản chung' },
        { id: 'booking', title: 'Đặt vé & Thanh toán' },
        { id: 'refund', title: 'Hoàn tiền & Hủy vé' },
        { id: 'privacy', title: 'Bảo mật thông tin' },
        { id: 'contact', title: 'Liên hệ hỗ trợ' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-2">Chính sách & Điều khoản dịch vụ</h1>
                    <p className="text-blue-100">
                        Cảm ơn bạn đã sử dụng dịch vụ đặt vé xem phim của chúng tôi. Vui lòng đọc kỹ các điều khoản dưới
                        đây.
                    </p>
                </div>
            </div>

            {/* Tabs navigation */}
            <div className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`py-4 px-4 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* General Terms */}
                    {activeTab === 'general' && (
                        <div className="policy-content">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Điều khoản chung</h2>

                            <div className="space-y-6">
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                    <p className="text-sm text-blue-700">
                                        Điều khoản dịch vụ này có hiệu lực từ ngày 01/04/2025. Chúng tôi có quyền thay
                                        đổi các điều khoản mà không cần thông báo trước.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Phạm vi dịch vụ</h3>
                                    <p className="text-gray-600 mb-3">
                                        Dịch vụ đặt vé xem phim trực tuyến của chúng tôi cho phép khách hàng đặt vé xem
                                        phim tại các cụm rạp đối tác trên toàn quốc. Dịch vụ bao gồm việc hiển thị thông
                                        tin lịch chiếu, đặt vé, thanh toán và quản lý vé đã mua.
                                    </p>
                                    <p className="text-gray-600">
                                        Chúng tôi không phải là đơn vị sở hữu rạp chiếu phim mà chỉ là đơn vị cung cấp
                                        dịch vụ đặt vé. Mọi vấn đề liên quan đến chất lượng chiếu phim, cơ sở vật chất
                                        tại rạp vui lòng liên hệ trực tiếp với đơn vị vận hành rạp.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Quy định sử dụng</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>
                                            Người dùng phải đăng ký tài khoản với thông tin chính xác để sử dụng dịch vụ
                                        </li>
                                        <li>Mỗi tài khoản chỉ được sử dụng bởi một cá nhân duy nhất</li>
                                        <li>Người dùng chịu trách nhiệm bảo mật thông tin tài khoản của mình</li>
                                        <li>Nghiêm cấm sử dụng dịch vụ cho mục đích bất hợp pháp</li>
                                        <li>Không được mua bán, trao đổi tài khoản hoặc vé với bên thứ ba</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        3. Giới hạn trách nhiệm
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        Chúng tôi không chịu trách nhiệm đối với những thiệt hại phát sinh từ:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>
                                            Thông tin phim, lịch chiếu thay đổi từ phía nhà rạp mà không thông báo trước
                                        </li>
                                        <li>
                                            Sự cố kỹ thuật nằm ngoài tầm kiểm soát như mất điện, mất mạng, lỗi máy chủ
                                        </li>
                                        <li>Người dùng cung cấp thông tin sai lệch khi đặt vé</li>
                                        <li>Các trường hợp bất khả kháng theo quy định của pháp luật</li>
                                    </ul>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                    <h3 className="text-md font-semibold text-orange-800 mb-1">Lưu ý quan trọng:</h3>
                                    <p className="text-sm text-orange-700">
                                        Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý với tất cả các điều khoản
                                        được nêu trong tài liệu này. Vui lòng đọc kỹ và hiểu rõ trước khi sử dụng dịch
                                        vụ.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Booking & Payment */}
                    {activeTab === 'booking' && (
                        <div className="policy-content">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Đặt vé & Thanh toán</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Quy trình đặt vé</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                        <div className="bg-white rounded-lg shadow p-4 text-center">
                                            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-blue-600 font-bold">1</span>
                                            </div>
                                            <h4 className="font-medium text-gray-800 mb-1">Chọn phim</h4>
                                            <p className="text-sm text-gray-500">
                                                Lựa chọn phim, rạp, ngày giờ chiếu phù hợp
                                            </p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow p-4 text-center">
                                            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-blue-600 font-bold">2</span>
                                            </div>
                                            <h4 className="font-medium text-gray-800 mb-1">Chọn ghế</h4>
                                            <p className="text-sm text-gray-500">Lựa chọn vị trí ghế ngồi mong muốn</p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow p-4 text-center">
                                            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-blue-600 font-bold">3</span>
                                            </div>
                                            <h4 className="font-medium text-gray-800 mb-1">Thanh toán</h4>
                                            <p className="text-sm text-gray-500">Thanh toán bằng phương thức có sẵn</p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow p-4 text-center">
                                            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <span className="text-blue-600 font-bold">4</span>
                                            </div>
                                            <h4 className="font-medium text-gray-800 mb-1">Nhận vé</h4>
                                            <p className="text-sm text-gray-500">
                                                Nhận mã QR vé điện tử qua email hoặc ứng dụng
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        Thời gian hoàn tất mỗi giao dịch đặt vé là 5 phút. Sau thời gian này, hệ thống
                                        sẽ tự động hủy giao dịch và trả lại ghế cho người dùng khác.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        2. Phương thức thanh toán
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        Chúng tôi hỗ trợ các phương thức thanh toán sau:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        <div className="border border-gray-200 rounded p-3">
                                            <h4 className="font-medium text-gray-800 mb-1">Thẻ ngân hàng nội địa</h4>
                                            <p className="text-sm text-gray-500">
                                                Hỗ trợ tất cả ngân hàng tại Việt Nam có liên kết Napas
                                            </p>
                                        </div>
                                        <div className="border border-gray-200 rounded p-3">
                                            <h4 className="font-medium text-gray-800 mb-1">Thẻ quốc tế</h4>
                                            <p className="text-sm text-gray-500">
                                                Visa, Mastercard, JCB, Amex, UnionPay
                                            </p>
                                        </div>
                                        <div className="border border-gray-200 rounded p-3">
                                            <h4 className="font-medium text-gray-800 mb-1">Ví điện tử</h4>
                                            <p className="text-sm text-gray-500">MoMo, ZaloPay, VNPay, ShopeePay</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        Mọi giao dịch thanh toán đều được bảo mật theo tiêu chuẩn PCI DSS. Chúng tôi
                                        không lưu trữ thông tin thẻ của khách hàng.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Giá vé & Phụ phí</h3>
                                    <p className="text-gray-600 mb-3">
                                        Giá vé được hiển thị trên hệ thống đã bao gồm thuế VAT nhưng chưa bao gồm phí
                                        dịch vụ. Phí dịch vụ được tính như sau:
                                    </p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border-b text-left">Loại giao dịch</th>
                                                    <th className="py-2 px-4 border-b text-left">Phí dịch vụ (VND)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border-b">Đặt vé thường</td>
                                                    <td className="py-2 px-4 border-b">10,000/vé</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b">Đặt vé VIP/Premium</td>
                                                    <td className="py-2 px-4 border-b">15,000/vé</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b">Đặt vé sự kiện đặc biệt</td>
                                                    <td className="py-2 px-4 border-b">20,000/vé</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                    <h3 className="text-md font-semibold text-yellow-800 mb-1">Lưu ý về giá:</h3>
                                    <p className="text-sm text-yellow-700">
                                        Giá vé có thể thay đổi tùy theo loại phim, thời gian chiếu, loại ghế và chính
                                        sách của từng rạp. Giá hiển thị tại thời điểm bạn chọn ghế là giá cuối cùng áp
                                        dụng cho giao dịch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Refund & Cancellation */}
                    {activeTab === 'refund' && (
                        <div className="policy-content">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hoàn tiền & Hủy vé</h2>

                            <div className="space-y-6">
                                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                                    <p className="text-sm text-red-700">
                                        <strong>Lưu ý quan trọng:</strong> Vé đã mua không thể hoàn tiền 100% trong mọi
                                        trường hợp. Vui lòng đọc kỹ chính sách bên dưới để hiểu rõ các điều kiện áp
                                        dụng.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Hủy vé và hoàn tiền</h3>
                                    <p className="text-gray-600 mb-3">
                                        Việc hủy vé và hoàn tiền được quy định như sau:
                                    </p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border-b text-left">Thời điểm hủy vé</th>
                                                    <th className="py-2 px-4 border-b text-left">Tỷ lệ hoàn tiền</th>
                                                    <th className="py-2 px-4 border-b text-left">Điều kiện áp dụng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border-b">
                                                        Trước 72 giờ so với giờ chiếu
                                                    </td>
                                                    <td className="py-2 px-4 border-b">80% giá vé</td>
                                                    <td className="py-2 px-4 border-b">Áp dụng cho mọi loại vé</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b">
                                                        Từ 24-72 giờ so với giờ chiếu
                                                    </td>
                                                    <td className="py-2 px-4 border-b">50% giá vé</td>
                                                    <td className="py-2 px-4 border-b">Áp dụng cho mọi loại vé</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b">Dưới 24 giờ so với giờ chiếu</td>
                                                    <td className="py-2 px-4 border-b">0% (không hoàn tiền)</td>
                                                    <td className="py-2 px-4 border-b">Áp dụng cho mọi loại vé</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-gray-600 mt-3">
                                        Phí dịch vụ và phí thanh toán sẽ không được hoàn lại trong mọi trường hợp.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Quy trình hoàn tiền</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">
                                                <span className="text-blue-600 text-xs font-bold">1</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">
                                                    Đăng nhập vào tài khoản và truy cập mục "Vé của tôi"
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">
                                                <span className="text-blue-600 text-xs font-bold">2</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">
                                                    Chọn vé muốn hủy và nhấn vào nút "Yêu cầu hoàn tiền"
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">
                                                <span className="text-blue-600 text-xs font-bold">3</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Chọn lý do hủy vé và xác nhận yêu cầu</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3">
                                                <span className="text-blue-600 text-xs font-bold">4</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">
                                                    Số tiền hoàn lại sẽ được chuyển vào phương thức thanh toán gốc trong
                                                    vòng 7-14 ngày làm việc
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        3. Các trường hợp đặc biệt
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                                            <h4 className="font-medium text-gray-800 mb-1">
                                                Hủy suất chiếu từ phía rạp
                                            </h4>
                                            <p className="text-gray-600">
                                                Trong trường hợp suất chiếu bị hủy bởi rạp phim, khách hàng sẽ được hoàn
                                                100% tiền vé đã thanh toán, bao gồm cả phí dịch vụ.
                                            </p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                                            <h4 className="font-medium text-gray-800 mb-1">Lỗi kỹ thuật</h4>
                                            <p className="text-gray-600">
                                                Nếu có lỗi kỹ thuật xảy ra trong quá trình đặt vé và thanh toán dẫn đến
                                                việc tiền bị trừ nhưng không nhận được vé, khách hàng sẽ được hoàn tiền
                                                trong vòng 24 giờ.
                                            </p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                                            <h4 className="font-medium text-gray-800 mb-1">Thay đổi lịch chiếu</h4>
                                            <p className="text-gray-600">
                                                Nếu có sự thay đổi về lịch chiếu, khách hàng có thể chọn đổi sang suất
                                                chiếu khác hoặc hoàn tiền 100% không tính phí.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                    <h3 className="text-md font-semibold text-purple-800 mb-1">
                                        Đặc quyền khách hàng VIP:
                                    </h3>
                                    <p className="text-sm text-purple-700">
                                        Khách hàng thuộc chương trình thành viên VIP có thể được hưởng chính sách hoàn
                                        tiền ưu đãi hơn. Vui lòng liên hệ bộ phận Chăm sóc Khách hàng để biết thêm chi
                                        tiết.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Privacy Policy */}
                    {activeTab === 'privacy' && (
                        <div className="policy-content">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bảo mật thông tin</h2>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-600 mb-4">
                                        Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng theo quy định của pháp
                                        luật hiện hành. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng và
                                        bảo vệ thông tin của bạn.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        1. Thông tin chúng tôi thu thập
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <h4 className="font-medium text-gray-800 mb-1">Thông tin cá nhân</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                <li>Họ tên</li>
                                                <li>Địa chỉ email</li>
                                                <li>Số điện thoại</li>
                                                <li>Ngày tháng năm sinh</li>
                                                <li>Giới tính</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <h4 className="font-medium text-gray-800 mb-1">Thông tin giao dịch</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                <li>Lịch sử đặt vé</li>
                                                <li>Phương thức thanh toán</li>
                                                <li>Chi tiết hóa đơn</li>
                                                <li>Các khuyến mãi đã sử dụng</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        Chúng tôi không thu thập thông tin thẻ tín dụng hoặc thẻ ghi nợ. Mọi giao dịch
                                        thanh toán được xử lý thông qua các cổng thanh toán an toàn của đối tác.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        2. Mục đích sử dụng thông tin
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <div className="mr-3 text-green-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="text-gray-600">
                                                <strong>Xử lý giao dịch:</strong> Chúng tôi sử dụng thông tin để xử lý
                                                đơn đặt vé, gửi xác nhận và gửi vé điện tử đến bạn.
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mr-3 text-green-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="text-gray-600">
                                                <strong>Hỗ trợ khách hàng:</strong> Chúng tôi sử dụng thông tin để hỗ
                                                trợ bạn khi có vấn đề với đơn đặt vé hoặc tài khoản.
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mr-3 text-green-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="text-gray-600">
                                                <strong>Cá nhân hóa trải nghiệm:</strong> Chúng tôi sử dụng thông tin để
                                                đề xuất phim, cung cấp ưu đãi phù hợp với sở thích của bạn.
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mr-3 text-green-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="text-gray-600">
                                                <strong>Truyền thông tiếp thị:</strong> Gửi thông tin về phim mới,
                                                khuyến mãi và sự kiện đặc biệt (chỉ khi bạn đồng ý).
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mr-3 text-green-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="text-gray-600">
                                                <strong>Phân tích và cải thiện:</strong> Nghiên cứu cách bạn sử dụng
                                                dịch vụ để cải thiện trải nghiệm người dùng.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Bảo vệ thông tin</h3>
                                    <p className="text-gray-600 mb-3">
                                        Chúng tôi thực hiện các biện pháp bảo mật sau để bảo vệ thông tin của bạn:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                                            <h4 className="font-medium text-gray-800 mb-1">Bảo mật kỹ thuật</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                <li>Mã hóa SSL/TLS cho mọi giao dịch</li>
                                                <li>Xác thực hai yếu tố cho tài khoản</li>
                                                <li>Hệ thống phát hiện xâm nhập</li>
                                                <li>Mã hóa dữ liệu lưu trữ</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                                            <h4 className="font-medium text-gray-800 mb-1">Bảo mật vận hành</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                <li>Giới hạn quyền truy cập dữ liệu</li>
                                                <li>Kiểm tra bảo mật định kỳ</li>
                                                <li>Đào tạo nhân viên về bảo mật</li>
                                                <li>Quy trình ứng phó sự cố</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Quyền của bạn</h3>
                                    <p className="text-gray-600 mb-3">
                                        Bạn có các quyền sau đối với thông tin cá nhân của mình:
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <div className="mr-3 text-blue-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-medium">Quyền truy cập</p>
                                                <p className="text-gray-600">
                                                    Bạn có quyền yêu cầu bản sao thông tin cá nhân mà chúng tôi lưu trữ
                                                    về bạn.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mr-3 text-blue-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-medium">Quyền chỉnh sửa</p>
                                                <p className="text-gray-600">
                                                    Bạn có quyền yêu cầu chúng tôi cập nhật hoặc sửa đổi thông tin không
                                                    chính xác.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mr-3 text-blue-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-medium">Quyền xóa</p>
                                                <p className="text-gray-600">
                                                    Bạn có quyền yêu cầu chúng tôi xóa thông tin cá nhân của bạn trong
                                                    một số trường hợp.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mr-3 text-blue-500">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-medium">Quyền hạn chế xử lý</p>
                                                <p className="text-gray-600">
                                                    Bạn có quyền yêu cầu chúng tôi hạn chế cách sử dụng thông tin của
                                                    bạn.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="text-md font-semibold text-blue-800 mb-1">
                                        Cách thực hiện quyền của bạn:
                                    </h3>
                                    <p className="text-sm text-blue-700">
                                        Để thực hiện bất kỳ quyền nào của bạn, vui lòng liên hệ với chúng tôi qua email
                                        privacy@movieticket.vn hoặc qua mục Liên hệ trong ứng dụng. Chúng tôi sẽ phản
                                        hồi yêu cầu của bạn trong vòng 30 ngày.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Contact Support */}
                    {activeTab === 'contact' && (
                        <div className="policy-content">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Liên hệ hỗ trợ</h2>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-600 mb-6">
                                        Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi thắc mắc liên quan đến dịch vụ đặt vé xem
                                        phim. Vui lòng liên hệ với chúng tôi qua một trong các kênh sau:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-lg shadow p-6 text-center">
                                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg
                                                    className="w-8 h-8 text-blue-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                                            <p className="text-gray-600 mb-4">
                                                Gửi email tới địa chỉ:
                                                <br />
                                                <span className="text-blue-600 font-medium">
                                                    support@movieticket.vn
                                                </span>
                                            </p>
                                            <p className="text-gray-500 text-sm">Phản hồi trong vòng 24 giờ</p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow p-6 text-center">
                                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg
                                                    className="w-8 h-8 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hotline</h3>
                                            <p className="text-gray-600 mb-4">
                                                Gọi số hotline:
                                                <br />
                                                <span className="text-green-600 font-medium">1900 1234 56</span>
                                            </p>
                                            <p className="text-gray-500 text-sm">Hoạt động từ 8:00 - 22:00 hàng ngày</p>
                                        </div>

                                        <div className="bg-white rounded-lg shadow p-6 text-center">
                                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg
                                                    className="w-8 h-8 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                Chat trực tuyến
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                Chat với nhân viên CSKH qua ứng dụng hoặc website
                                            </p>
                                            <p className="text-gray-500 text-sm">Hỗ trợ trực tuyến 24/7</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Địa chỉ văn phòng</h3>
                                    <div className="bg-white rounded-lg shadow overflow-hidden">
                                        <div className="p-6">
                                            <div className="flex items-start mb-4">
                                                <div className="mr-3 text-gray-400">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">Văn phòng Hà Nội</p>
                                                    <p className="text-gray-600">
                                                        Tầng 15, Tòa nhà Sunshine, 156 Phố Huế
                                                        <br />
                                                        Hai Bà Trưng, Hà Nội
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="mr-3 text-gray-400">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-800 font-medium">
                                                        Văn phòng TP. Hồ Chí Minh
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Tầng 10, Tòa nhà Moonlight, 123 Nguyễn Huệ
                                                        <br />
                                                        Quận 1, TP. Hồ Chí Minh
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 px-6 py-4">
                                            <p className="text-gray-500 text-sm">
                                                Giờ làm việc: Thứ Hai - Thứ Sáu (8:30 - 17:30), trừ các ngày lễ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Gửi yêu cầu hỗ trợ</h3>
                                    <div className="bg-white rounded-lg shadow p-6">
                                        <form className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block text-gray-700 text-sm font-medium mb-2"
                                                        htmlFor="name"
                                                    >
                                                        Họ và tên
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        type="text"
                                                        id="name"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block text-gray-700 text-sm font-medium mb-2"
                                                        htmlFor="email"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        type="email"
                                                        id="email"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-sm font-medium mb-2"
                                                    htmlFor="subject"
                                                >
                                                    Tiêu đề
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    type="text"
                                                    id="subject"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-sm font-medium mb-2"
                                                    htmlFor="message"
                                                >
                                                    Nội dung
                                                </label>
                                                <textarea
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    id="message"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-sm font-medium mb-2"
                                                    htmlFor="orderid"
                                                >
                                                    Mã đơn hàng (nếu có)
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    type="text"
                                                    id="orderid"
                                                />
                                            </div>
                                            <div>
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                                                    Gửi yêu cầu
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <h3 className="text-md font-semibold text-indigo-800 mb-1">Thời gian phản hồi:</h3>
                                    <p className="text-sm text-indigo-700">
                                        Chúng tôi cam kết phản hồi mọi yêu cầu hỗ trợ trong vòng 24 giờ làm việc. Đối
                                        với các vấn đề khẩn cấp liên quan đến đặt vé hoặc thanh toán, vui lòng sử dụng
                                        dịch vụ Hotline để được hỗ trợ ngay lập tức.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <p className="text-gray-500 text-sm">© 2025 FirmGo. Tất cả các quyền được bảo lưu.</p>
                        <div className="mt-2 flex justify-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">
                                Điều khoản sử dụng
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">
                                Chính sách bảo mật
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">
                                Giới thiệu
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
