/* eslint-disable react/prop-types */
import { CaretRightOutlined } from '@ant-design/icons';
import Empty from '../../organisms/Empty';

const ListCategories = ({ data }) => {
    return (
        <div>
            {data?.length ? (
                data.map((item) => {
                    return (
                        <div
                            className="flex justify-between items-center border-solid border-b-[1px] py-[12px]"
                            key={item.id}
                        >
                            <div className="flex justify-start items-center">
                                <CaretRightOutlined className="text-[#ff4444]" />
                                <p>{item?.label}</p>
                            </div>

                            <p>{item?.values}</p>
                        </div>
                    );
                })
            ) : (
                <Empty />
            )}
        </div>
    );
};

export default ListCategories;
