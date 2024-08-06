import React from 'react';
import { useDiscount } from '../../Context/DiscountContext';
import { Box, Button, VStack, Text } from '@chakra-ui/react';

const DiscountList = () => {
  const { discounts, deleteDiscount } = useDiscount();

  return (
    <Box>
      <VStack spacing={4}>
        {discounts.map((discount) => (
          <Box key={discount.id} p={4} borderWidth={1} borderRadius="lg">
            <Text>Hotel ID: {discount.hotelId}</Text>
            <Text>Discount Rate: {discount.discountRate}</Text>
            <Button onClick={() => deleteDiscount(discount.id)}>Delete Discount</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default DiscountList;
