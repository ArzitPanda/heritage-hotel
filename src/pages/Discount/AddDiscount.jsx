import React, { useState } from 'react';
import { useDiscount } from '../../Context/DiscountContext';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const AddDiscount = () => {
  const [hotelId, setHotelId] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const { addDiscount } = useDiscount();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDiscount({ hotelId, discountRate });
    setHotelId('');
    setDiscountRate('');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input placeholder="Hotel ID" value={hotelId} onChange={(e) => setHotelId(e.target.value)} />
          <Input placeholder="Discount Rate" value={discountRate} onChange={(e) => setDiscountRate(e.target.value)} />
          <Button type="submit">Add Discount</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddDiscount;
