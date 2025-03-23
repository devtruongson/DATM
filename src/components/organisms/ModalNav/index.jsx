import { CloseOutlined, FacebookOutlined, SearchOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Drawer, Input, Select } from 'antd';

// eslint-disable-next-line react/prop-types
const MovieProDrawer = ({ onClose, open, showModal }) => {
    return (
        <div className="bg-red-100 min-h-screen">
            <Drawer
                title={
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-red-500 rounded-full p-2 mr-2">
                                <div className="text-white">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                        <path d="M9 9L15 15M15 9L9 15" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                            <span className="font-bold text-xl">MOVIE PRO</span>
                        </div>
                        <Button type="text" onClick={onClose} icon={<CloseOutlined />} />
                    </div>
                }
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                width={300}
                // headerStyle={{ borderBottom: 'none', padding: '16px' }}
                // bodyStyle={{ padding: 0 }}
            >
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="py-4 px-6 hover:bg-gray-100 cursor-pointer font-medium">OVERVIEW</div>
                        <div className="py-4 px-6 hover:bg-gray-100 cursor-pointer font-medium">MOVIE</div>
                        <div className="py-4 px-6 hover:bg-gray-100 cursor-pointer font-medium">EVENT</div>
                        <div className="py-4 px-6 hover:bg-gray-100 cursor-pointer font-medium">GALLERY</div>
                        <div className="py-4 px-6 hover:bg-gray-100 cursor-pointer font-medium">BLOG</div>
                        <div className="py-4 px-6 hover:bg-gray-100 cursor-pointer font-medium">CONTACT</div>
                    </div>

                    <div className="mt-auto px-6 pb-6">
                        <div className="flex items-center mb-4">
                            <div className="relative w-full">
                                <Select
                                    defaultValue="all"
                                    style={{ width: '120px' }}
                                    options={[{ value: 'all', label: 'All Categories' }]}
                                    bordered={false}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white"
                                />
                                <Input
                                    placeholder="Search Movie, Video, Music"
                                    suffix={
                                        <Button
                                            type="primary"
                                            className="flex items-center justify-center bg-black h-8 w-8 p-0"
                                        >
                                            <SearchOutlined className="text-white" />
                                        </Button>
                                    }
                                    className="pr-8"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between mb-4">
                            <div className="flex items-center">
                                <FacebookOutlined className="text-gray-500 mr-2" />
                                <span className="text-gray-500">12546</span>
                            </div>
                            <div className="flex items-center">
                                <TwitterOutlined className="text-gray-500 mr-2" />
                                <span className="text-gray-500">12546</span>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 text-gray-500">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 12L10 14L16 8" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <span className="text-gray-500">12546</span>
                            </div>
                        </div>

                        <Button type="primary" block className="bg-black h-10" onClick={showModal}>
                            SIGN UP
                        </Button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default MovieProDrawer;
