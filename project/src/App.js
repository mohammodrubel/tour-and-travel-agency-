import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import AddTravelInfo from './components/AddTravelInfo/AddTravelInfo';
import Blog from './components/Blog/Blog';
import Booking from './components/Booking/Booking';
import BookingInfo from './components/BookingInfo/BookingInfo';
import ConfirmBooking from './components/ConfirmBooking/ConfirmBooking';
import Header from './components/Header/Header';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/LoginSystem/Login/Login';
import Reg from './components/LoginSystem/Reg/Reg';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Travel from './components/Travel/Travel';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
            <BrowserRouter>
                <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>

                        <Route exact path="/home">
                            <Home></Home>
                        </Route>

                        <PrivateRoute exact path="/addtonewtravel">
                            <AddTravelInfo></AddTravelInfo>
                        </PrivateRoute>

                        <PrivateRoute exact path="/home/:travel">
                            <Travel></Travel>
                        </PrivateRoute>

                        <PrivateRoute exact path="/booking/:bookingInfo">
                            <BookingInfo></BookingInfo>
                        </PrivateRoute>

                        <PrivateRoute exact path="/booking/:information">
                            <BookingInfo></BookingInfo>
                        </PrivateRoute>

                        <PrivateRoute exact path="/confirmbooking">
                            <ConfirmBooking></ConfirmBooking>
                        </PrivateRoute>
                        
                        <Route exact path="/login">
                            <Login></Login>
                        </Route>

                        <Route exact path="/reg">
                            <Reg></Reg>
                        </Route>

                        <PrivateRoute exact path="/blog">
                            <Blog></Blog>
                        </PrivateRoute>

                        <Route exact path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
            </BrowserRouter>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
