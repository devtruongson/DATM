// eslint-disable-next-line react/prop-types
const ContainerWapper = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-[100%]">
            <div className="lg:w-[1200px] md:w-[700px] w-[100%]">{children}</div>
        </div>
    );
};

export default ContainerWapper;
