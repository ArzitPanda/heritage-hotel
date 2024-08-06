import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const bookingsCollectionRef = collection(db, 'bookings');

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getDocs(bookingsCollectionRef);
      setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchBookings();
  }, []);

  const addBooking = async (booking) => {
    await addDoc(bookingsCollectionRef, booking);
    setBookings([...bookings, { ...booking, id: booking.id }]);
  };

  const updateBooking = async (id, updatedBooking) => {
    const bookingDoc = doc(db, 'bookings', id);
    await updateDoc(bookingDoc, updatedBooking);
    setBookings(bookings.map((booking) => (booking.id === id ? updatedBooking : booking)));
  };

  const deleteBooking = async (id) => {
    const bookingDoc = doc(db, 'bookings', id);
    await deleteDoc(bookingDoc);
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBooking, deleteBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
