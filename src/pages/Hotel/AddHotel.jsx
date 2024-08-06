import React, { useState } from 'react';
import { useHotel } from '../../Context/HotelContext';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const AddHotel = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [price, setPrice] = useState('');
  const { addHotel } = useHotel();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addHotel({ name, location, roomType, price });
    setName('');
    setLocation('');
    setRoomType('');
    setPrice('');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input placeholder="Hotel Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <Input placeholder="Room Type" value={roomType} onChange={(e) => setRoomType(e.target.value)} />
          <Input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <Button type="submit">Add Hotel</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddHotel;
