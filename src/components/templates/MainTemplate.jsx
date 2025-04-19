import Banner from '../organisms/Banner';
import Footer from '../organisms/Footer';
import WithHeaderTemplate from './WithHeaderTemplate';

// eslint-disable-next-line react/prop-types
const MainTemplate = ({ children, isShowBanner = true }) => {
    return (
        <WithHeaderTemplate>
            <>
                {isShowBanner ? <Banner /> : ''}
                <div className="bg-[#f6f6f6] pb-[60px]">{children}</div>
                <Footer />
            </>
        </WithHeaderTemplate>
    );
};

export default MainTemplate;
