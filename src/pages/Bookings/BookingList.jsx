import React from 'react';
import { useBooking } from '../../Context/BookngContext';
import { Box, Button, VStack, Text } from '@chakra-ui/react';

const BookingList = () => {
  const { bookings, deleteBooking } = useBooking();

  return (
    <Box>
      <VStack spacing={4}>
        {bookings.map((booking) => (
          <Box key={booking.id} p={4} borderWidth={1} borderRadius="lg">
            <Text>Hotel ID: {booking.hotelId}</Text>
            <Text>Room ID: {booking.roomId}</Text>
            <Text>Dates: {booking.dates}</Text>
            <Button onClick={() => deleteBooking(booking.id)}>Cancel Booking</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default BookingList;
