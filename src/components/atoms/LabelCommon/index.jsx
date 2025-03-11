/* eslint-disable react/prop-types */
import Indicator from '../Indicator';

const LabelCommon = ({ label, ...props }) => {
    return (
        <div {...props}>
            <p className="tetx-[20px] font-[500] uppercase mb-[10px]">{label}</p>
            <Indicator />
        </div>
    );
};

export default LabelCommon;
