import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Booking from './components/booking/Booking';
import BookingConfirmation from './components/bookingConfirmation/BookingConfirmation';
import CarDetails from './components/carDetails/CarDetails';
import CarListing from './components/carListing/CarListing';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.scss';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
