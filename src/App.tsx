import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Booking from './components/booking/Booking';
import BookingConfirmation from './components/bookingConfirmation/BookingConfirmation';
import CarListing from './components/carListing/CarListing';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/booking" element={
          <Box>
            <Box style={{ height: "5rem" }}></Box>
            <Booking />
          </Box>
        } />
        <Route path="/booking-confirmation" element={
          <Box>
            <Box style={{ height: "5rem" }}></Box>
            <BookingConfirmation />
          </Box>
        } />
        <Route path="/cars" element={
          <Box>
            <Box style={{ height: "5rem" }}></Box>
            <CarListing />
          </Box>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
