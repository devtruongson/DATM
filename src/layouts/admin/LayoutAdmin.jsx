import {
    AlertFilled,
    ClockCircleFilled,
    EnvironmentFilled,
    FolderAddFilled,
    FolderOpenFilled,
    HddFilled,
    IdcardTwoTone,
    PieChartTwoTone,
    PlaySquareTwoTone,
    PlusOutlined,
    RocketFilled,
    ScheduleFilled,
    TeamOutlined,
    UnorderedListOutlined,
    VideoCameraTwoTone,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<Link to="/admin">Thống kê</Link>, '1', <PieChartTwoTone />),
    getItem('Phim', '2', <PlaySquareTwoTone />, [
        getItem(<Link to="/admin/movie">Danh sách phim</Link>, '2.1', <FolderOpenFilled />),
        getItem(<Link to="/admin/movie/add">Thêm mới </Link>, '2.2', <FolderAddFilled />),
        getItem(<Link to="/admin/movie/category">Thể loại</Link>, '2.3', <HddFilled />, [
            getItem(<Link to="/admin/products">Danh sách</Link>, '2.3.1', <UnorderedListOutlined />),
            getItem(<Link to="/admin/products">Thêm mới</Link>, '2.3.2', <PlusOutlined />),
        ]),
        getItem(<Link to="/admin/products/category">Diễn viên</Link>, '2.4', <TeamOutlined />, [
            getItem(<Link to="/admin/products">Danh sách</Link>, '2.4.1', <UnorderedListOutlined />),
            getItem(<Link to="/admin/products">Thêm mới</Link>, '2.4.2', <PlusOutlined />),
        ]),
        getItem(<Link to="/admin/products/category">Xuất chiếu</Link>, '2.5', <ClockCircleFilled />, [
            getItem(<Link to="/admin/products">Danh sách</Link>, '2.5.1', <UnorderedListOutlined />),
            getItem(<Link to="/admin/products">Thêm mới</Link>, '2.5.2', <PlusOutlined />),
        ]),
        getItem(<Link to="/admin/products/category">Vé </Link>, '2.6', <ScheduleFilled />, [
            getItem(<Link to="/admin/products">Danh sách</Link>, '2.6.1', <UnorderedListOutlined />),
            getItem(<Link to="/admin/products">Thêm mới</Link>, '2.6.2', <PlusOutlined />),
        ]),
    ]),
    getItem('Rạp phim', '3', <VideoCameraTwoTone />, [
        getItem(<Link to="/admin/cinemas">Danh sách</Link>, '3.1', <FolderOpenFilled />),
        getItem(<Link to="/admin/cinemas/add">Thêm</Link>, '3.2', <FolderAddFilled />),
        getItem(<Link to="/admin/cinemas/category">Thành phố/Tỉnh thành</Link>, '3.3', <EnvironmentFilled />, [
            getItem(<Link to="/admin/products">Danh sách</Link>, '3.3.1', <UnorderedListOutlined />),
            getItem(<Link to="/admin/products">Thêm mới</Link>, '3.3.2', <PlusOutlined />),
        ]),
        getItem(<Link to="/admin/products/category">Phòng chiếu</Link>, '3.4', <AlertFilled />, [
            getItem(<Link to="/admin/products">Danh sách</Link>, '3.4.1', <UnorderedListOutlined />),
            getItem(<Link to="/admin/products">Thêm mới</Link>, '3.4.2', <PlusOutlined />),
        ]),
        getItem(<Link to="/admin/products/category">Ghế</Link>, '3.5', <RocketFilled />, [
            getItem(<Link to="/admin/products">Danh sách</Link>, '3.5.1', <UnorderedListOutlined />),
            getItem(<Link to="/admin/products">Thêm mới</Link>, '3.5.2', <PlusOutlined />),
        ]),
    ]),
    getItem('Người dùng', '4', <IdcardTwoTone />, [
        getItem(<Link to="/admin/products">Danh sách</Link>, '4.1', <UnorderedListOutlined />),
        getItem(<Link to="/admin/products/add">Thêm</Link>, '4.2', <PlusOutlined />),
    ]),
];

const LayoutAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        {/* <Breadcrumb.Item>User</Breadcrumb.Item> */}
                        {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                ></Footer>
            </Layout>
        </Layout>
    );
};
export default LayoutAdmin;
