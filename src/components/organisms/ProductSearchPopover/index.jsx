/* eslint-disable react/prop-types */
import { Popover } from 'antd';
import { useMemo, useState } from 'react';

const ProductSearchPopover = ({ products }) => {
    const [searchValue, setSearchValue] = useState('');
    const [visible, setVisible] = useState(false);

    const filteredProducts = useMemo(() => {
        // Nếu searchValue trống, trả về mảng rỗng
        if (!searchValue.trim()) return [];
        return products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    }, [products, searchValue]);

    const popoverContent = (
        <div className="max-h-60 overflow-y-auto">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setSearchValue(product.title);
                            setVisible(false);
                            window.location.href = `/movie_booking/${product.id}`;
                        }}
                    >
                        <div className="font-medium flex items-center gap-2">
                            <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src={product.poster} alt="" />
                            <p>{product.title}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="p-2 text-gray-500">Không tìm thấy sản phẩm nào</div>
            )}
        </div>
    );

    return (
        <Popover
            content={popoverContent}
            trigger="click"
            open={visible}
            onOpenChange={(v) => setVisible(v)}
            overlay="w-80"
        >
            <input
                className="h-[100%] border-none px-2 w-[250px] outline-none"
                placeholder="Tìm kiếm sản phẩm theo tên..."
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    if (!visible) setVisible(true);
                }}
            />
        </Popover>
    );
};

export default ProductSearchPopover;
