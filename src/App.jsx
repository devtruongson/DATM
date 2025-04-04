import { Route, Routes, useSearchParams } from 'react-router-dom';
import LayoutAdmin from './layouts/admin/LayoutAdmin';
import CinemaAdd from './pages/admin/Cinemas/CinemaAdd';
import CinemaEdit from './pages/admin/Cinemas/CinemaEdit';
import CinemaList from './pages/admin/Cinemas/CinemaList';
import Dashboard from './pages/admin/Dashboard';
// import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Swal from 'sweetalert2';
import { handleDataVideoPreview } from './app/slices/appSlice';
import PreviewTrailler from './components/molecules/PrivewTrailler';
import LoginModal from './components/organisms/ModalAuth/index';
import About from './components/pages/About';
import BlogCategory from './components/pages/BlogCategory';
import BlogSingle from './components/pages/BlogSingle';
import MovieTicketBooking from './components/pages/BookingType';
import ConfirmationScreen from './components/pages/ConfirmationScreen/ConfirmationScreen';
import Contact from './components/pages/Contact';
import FilmDetail from './components/pages/FilmDetail/FilmDetail';
import ForgotPassword from './components/pages/ForgotPassword';
import Me from './components/pages/Me';
import MovieBooking from './components/pages/MovieBooking';
import MovieCate from './components/pages/MovieCategorie';
import MovieSingle from './components/pages/MovieSingle';
import MovieSingleSecond from './components/pages/MovieSingleSecond';
import SeatBooking from './components/pages/SeatBooking';
import { routes } from './routes';
import './style.css';

function App() {
    const { isOpenModalPriviewVideo, url } = useSelector((state) => state.app.dataVideoPreview);
    const { isLoginIn } = useSelector((state) => state.app.auth);
    const [searchParams] = useSearchParams();
    const paymentStatus = searchParams.get('payment');

    useEffect(() => {
        if (paymentStatus === 'success') {
            Swal.fire({
                icon: 'success',
                text: '✅ Thanh toán thành công!',
            }).then(() => {
                window.location.href = '/';
            });
        } else if (paymentStatus === 'failed') {
            Swal.fire({
                icon: 'success',
                text: '❌ Thanh toán thất bại, vui lòng thử lại.',
            }).then(() => {
                window.location.href = '/';
            });
        }
    }, [paymentStatus]);
    const dispatch = useDispatch();

    const handleCancelPreviewVideo = () => {
        dispatch(
            handleDataVideoPreview({
                isOpenModalPriviewVideo: false,
                url: '',
            }),
        );
    };

    return (
        <>
            <Routes>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="cinemas" element={<CinemaList />} />
                    <Route path="cinemas/add" element={<CinemaAdd />} />
                    <Route path="cinemas/edit/:id" element={<CinemaEdit />} />
                </Route>
            </Routes>
            <Routes>
                <Route path={routes.film_detail} element={<FilmDetail />}></Route>
                <Route path={routes.movie_booking} element={<MovieBooking />} />
                <Route path={routes.seat_booking} element={<SeatBooking />} />
                <Route path={routes.contact} element={<Contact />} />
                <Route path={routes.confirmation_screen} element={<ConfirmationScreen />} />
                <Route path={routes.blog_category} element={<BlogCategory />} />
                <Route path={routes.blog_single} element={<BlogSingle />} />
                <Route path={routes.about} element={<About />} />
                <Route path={routes.bookingType} element={<MovieTicketBooking />} />
                <Route path={routes.movie_category} element={<MovieCate />} />
                <Route path={routes.movie_single_second} element={<MovieSingleSecond />} />
                <Route path={routes.movie_single} element={<MovieSingle />} />
                <Route path={routes.me} element={<Me />} />
                <Route path={routes.forgotPassword} element={<ForgotPassword />} />
            </Routes>
            <PreviewTrailler isModalOpen={isOpenModalPriviewVideo} url={url} handleCancel={handleCancelPreviewVideo} />
            {!isLoginIn && <LoginModal />}
        </>
    );
}

export default App;
