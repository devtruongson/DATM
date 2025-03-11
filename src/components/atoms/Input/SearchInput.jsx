import { SearchOutlined } from '@ant-design/icons';

const SearchInput = ({ ...props }) => {
    return (
        <div className="flex justify-center items-center w-[100%] mb-[40px]" {...props}>
            <input
                type="text"
                placeholder="Search Movie"
                className="bg-[#f8f8f8] w-[70%] px-[8px] py-[8px] rounded-l-[10px] outline-none"
            />
            <button className="w-[30%] bg-[#ff4444] py-[8px] rounded-r-[10px]">
                <SearchOutlined className="text-white" />
            </button>
        </div>
    );
};

export default SearchInput;
