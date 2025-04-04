/* eslint-disable react/prop-types */
import { Button, Modal } from 'antd';
import { useState } from 'react';

const TicketModal = ({ data }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Xem chi tiết
            </Button>

            <Modal
                title="Thông tin vé"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={'60vw'}
                className="w-full max-w-xl"
            >
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <strong>ID vé:</strong>
                        <span>{data.ticket_id}</span>
                    </div>
                    <div className="flex justify-between">
                        <strong>Mã vé:</strong>
                        <span>{data.ticket_code}</span>
                    </div>
                    <div className="flex justify-between">
                        <strong>Tên phim:</strong>
                        <span>{data.movie_name}</span>
                    </div>
                    <div className="flex justify-between">
                        <strong>Giờ chiếu:</strong>
                        <span>{data.showtime}</span>
                    </div>
                    <div className="flex justify-between">
                        <strong>Số ghế:</strong>
                        <span>{data.seats}</span>
                    </div>
                    <div className="flex justify-between">
                        <strong>Tổng tiền:</strong>
                        <span>{data.total_amount}</span>
                    </div>
                    <div className="flex justify-between">
                        <strong>Trạng thái:</strong>
                        <span>{data.status}</span>
                    </div>
                </div>
            </Modal>
        </>
    );
};

const TableAction = ({ record }) => {
    return (
        <TicketModal
            data={{
                ticket_id: record.ticket_id,
                ticket_code: record.ticket_code,
                movie_name: record.movie_name,
                showtime: record.showtime,
                seats: record.seats,
                total_amount: record.total_amount,
                status: record.status,
            }}
        />
    );
};

export default TableAction;
