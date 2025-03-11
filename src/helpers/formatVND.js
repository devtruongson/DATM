export const formatVND = (price) => {
    if (!Number(price)) return '';
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VNĐ';
};
