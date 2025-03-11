import Header from '../organisms/Header/Header';

// eslint-disable-next-line react/prop-types
const WithHeaderTemplate = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default WithHeaderTemplate;
