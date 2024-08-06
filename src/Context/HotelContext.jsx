import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const hotelsCollectionRef = collection(db, 'hotels');

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getDocs(hotelsCollectionRef);
      setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchHotels();
  }, []);

  const addHotel = async (hotel) => {
    await addDoc(hotelsCollectionRef, hotel);
    setHotels([...hotels, { ...hotel, id: hotel.id }]);
  };

  const updateHotel = async (id, updatedHotel) => {
    const hotelDoc = doc(db, 'hotels', id);
    await updateDoc(hotelDoc, updatedHotel);
    setHotels(hotels.map((hotel) => (hotel.id === id ? updatedHotel : hotel)));
  };

  const deleteHotel = async (id) => {
    const hotelDoc = doc(db, 'hotels', id);
    await deleteDoc(hotelDoc);
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  return (
    <HotelContext.Provider value={{ hotels, addHotel, updateHotel, deleteHotel }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => useContext(HotelContext);
