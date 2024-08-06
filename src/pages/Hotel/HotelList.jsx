import React from 'react';
import { useHotel } from '../../Context/HotelContext';
import { Box, Button, VStack, Text } from '@chakra-ui/react';

const HotelList = () => {
  const { hotels, deleteHotel } = useHotel();

  return (
    <Box>
      <VStack spacing={4}>
        {hotels.map((hotel) => (
          <Box key={hotel.id} p={4} borderWidth={1} borderRadius="lg">
            <Text>{hotel.name}</Text>
            <Text>{hotel.location}</Text>
            <Text>{hotel.roomType}</Text>
            <Text>{hotel.price}</Text>
            <Button onClick={() => deleteHotel(hotel.id)}>Delete</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HotelList;
