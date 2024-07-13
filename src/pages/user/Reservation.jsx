import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';

const Reservation = () => {
  const location = useLocation();
  const { item, fromDate, untilDate } = location.state || {};

  const calculateTotalPrice = (pricePerDay, fromDate, untilDate) => {
    const from = new Date(fromDate);
    const until = new Date(untilDate);
    const diffTime = Math.abs(until - from);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return diffDays * pricePerDay;
  };

  const totalPrice = item ? calculateTotalPrice(item.pricePerDay, fromDate, untilDate) : 0;

  return (
    <Box p={8} maxW="600px" mx="auto" mt={8} boxShadow="md" borderRadius="md" bg="white">
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Reservation Details
      </Heading>
      <Stack spacing={4}>
        {item ? (
          <>
            <Box>
              <Text fontSize="lg">
                <strong>Make:</strong> {item.make}
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">
                <strong>Model:</strong> {item.model}
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">
                <strong>Price per day:</strong> {item.pricePerDay} Rupees
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">
                <strong>Location:</strong> {item.city}
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">
                <strong>From:</strong> {new Date(fromDate).toLocaleString()}
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">
                <strong>Until:</strong> {new Date(untilDate).toLocaleString()}
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">
                <strong>Total Price:</strong> {totalPrice} Rupees
              </Text>
            </Box>
            <Box textAlign="center">
              <Button colorScheme="teal">Confirm Reservation</Button>
            </Box>
          </>
        ) : (
          <Text fontSize="lg">No reservation details available.</Text>
        )}
      </Stack>
    </Box>
  );
};

export default Reservation;
