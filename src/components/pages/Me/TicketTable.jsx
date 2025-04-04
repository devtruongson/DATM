import { Button, Input, Modal, Select, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useGetTicket } from '../../../services/auth/getTicket';

const { Option } = Select;

const TicketTable = () => {
    const [searchText, setSearchText] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleStatusChange = (value) => {
        setFilterStatus(value);
    };

    const { data } = useGetTicket({
        enabled: true,
    });
    const dataTicketArr = useMemo(() => (data?.data ? data.data : []), [data]);

    const filteredData = dataTicketArr.filter((item) => {
        const matchesSearch = Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase()),
        );
        const matchesStatus = filterStatus ? item.status === filterStatus : true;
        return matchesSearch && matchesStatus;
    });

    const columns = [
        {
            title: 'Ticket ID',
            dataIndex: 'ticket_id',
            key: 'ticket_id',
        },
        {
            title: 'Ticket Code',
            dataIndex: 'ticket_code',
            key: 'ticket_code',
        },
        {
            title: 'Movie Name',
            dataIndex: 'movie_name',
            key: 'movie_name',
        },
        {
            title: 'Showtime',
            dataIndex: 'showtime',
            key: 'showtime',
        },
        {
            title: 'Seats',
            dataIndex: 'seats',
            key: 'seats',
        },
        {
            title: 'Total Amount',
            dataIndex: 'total_amount',
            key: 'total_amount',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => <span className={text === 'paid' ? 'text-green-500' : 'text-yellow-500'}>{text}</span>,
        },
    ];

    return (
        <div className="p-4">
            <div className="flex space-x-4 mb-4">
                <Input placeholder="Tìm kiếm..." value={searchText} onChange={handleSearch} className="w-1/2" />
                <Select
                    placeholder="Lọc theo status"
                    onChange={handleStatusChange}
                    value={filterStatus || undefined}
                    className="w-1/2"
                    allowClear
                >
                    <Option value="pending">Pending</Option>
                    <Option value="paid">Paid</Option>
                    <Option value="used">Used</Option>
                </Select>
            </div>
            <Table dataSource={filteredData} columns={columns} rowKey="ticket_id" />
        </div>
    );
};

const TicketModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Xem Ticket
            </Button>
            <Modal
                title="Danh sách Ticket"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="close" onClick={handleCancel}>
                        Đóng
                    </Button>,
                ]}
                width={'80vw'}
            >
                <TicketTable />
            </Modal>
        </div>
    );
};

export default TicketModal;
