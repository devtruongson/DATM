/* eslint-disable react/prop-types */
import Footer from '../organisms/Footer';
import ContainerWapper from './ContainerWapper';
import WithHeaderTemplate from './WithHeaderTemplate';

const BasicTemplate = ({ children, isContainer = true }) => {
    return (
        <WithHeaderTemplate>
            <div className="bg-[#f6f6f6]">
                {isContainer ? (
                    <ContainerWapper>
                        <div className="pb-[60px]">{children}</div>
                    </ContainerWapper>
                ) : (
                    <div>
                        <div className="pb-[60px]">{children}</div>
                    </div>
                )}
            </div>
            <Footer />
        </WithHeaderTemplate>
    );
};

export default BasicTemplate;
