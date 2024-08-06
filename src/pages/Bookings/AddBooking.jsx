import React, { useState } from 'react';
import { useBooking } from '../../Context/BookngContext';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const AddBooking = () => {
  const [hotelId, setHotelId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [dates, setDates] = useState('');
  const { addBooking } = useBooking();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBooking({ hotelId, roomId, dates });
    setHotelId('');
    setRoomId('');
    setDates('');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input placeholder="Hotel ID" value={hotelId} onChange={(e) => setHotelId(e.target.value)} />
          <Input placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
          <Input placeholder="Dates" value={dates} onChange={(e) => setDates(e.target.value)} />
          <Button type="submit">Add Booking</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddBooking;
