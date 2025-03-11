const Indicator = ({ ...props }) => {
    return (
        <div className="flex justify-start items-center" {...props}>
            <div className="h-[4px] w-[30px] bg-red-500"></div>
            <div className="h-[2px] w-[60px] bg-[#707070]"></div>
        </div>
    );
};

export default Indicator;
