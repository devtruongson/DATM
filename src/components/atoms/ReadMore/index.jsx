const ReadMore = ({ ...props }) => {
    return (
        <p className="text-[16px] text-[#ff4444] cursor-pointer" {...props}>
            Read More <i className="bi bi-arrow-right"></i>
        </p>
    );
};

export default ReadMore;
