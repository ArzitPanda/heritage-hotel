import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './Context/AuthContext';
import { HotelProvider } from './Context/HotelContext';
import { BookingProvider } from './Context/BookngContext';
import { DiscountProvider } from './Context/DiscountContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css"
import App from './App';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard';
import AddHotel from './pages/Hotel/AddHotel';
import HotelList from './pages/Hotel/HotelList';
import AddBooking from './pages/Bookings/AddBooking';
import BookingList from './pages/Bookings/BookingList';
import AddDiscount from './pages/Discount/AddDiscount';
import DiscountList from './pages/Discount/DiscountList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-hotel", element: <AddHotel /> },
      { path: "hotels", element: <HotelList /> },
      { path: "add-booking", element: <AddBooking /> },
      { path: "bookings", element: <BookingList /> },
      { path: "add-discount", element: <AddDiscount /> },
      { path: "discounts", element: <DiscountList /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthProvider>
      <HotelProvider>
        <BookingProvider>
          <DiscountProvider>
            <RouterProvider router={router} />
          </DiscountProvider>
        </BookingProvider>
      </HotelProvider>
    </AuthProvider>
  </ChakraProvider>
);
