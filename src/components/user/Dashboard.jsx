
import { Box, Heading, Text, VStack, HStack, Avatar, SimpleGrid, GridItem, Badge } from '@chakra-ui/react';

const Dashboard = () => {
  // Sample data for demonstration
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
  };

  const rentedCars = [
    { id: 1, make: 'Toyota', model: 'Camry', status: 'Active' },
    { id: 2, make: 'Honda', model: 'Accord', status: 'Returned' },
  ];

  return (
    <Box padding="6" bg="gray.50" minH="100vh">
      <VStack spacing="6" align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" mt="4">
          User Dashboard
        </Heading>

        {/* Profile Summary */}
        <HStack spacing="4" p="4" bg="white" borderRadius="md" boxShadow="md">
          <Avatar size="xl" src={userProfile.avatarUrl} />
          <VStack align="start">
            <Text fontSize="2xl">{userProfile.name}</Text>
            <Text fontSize="md" color="gray.500">{userProfile.email}</Text>
          </VStack>
        </HStack>

        {/* Rented Cars */}
        <Box>
          <Heading as="h2" size="lg" mb="4">Rented Cars</Heading>
          <SimpleGrid columns={[1, null, 2]} spacing="6">
            {rentedCars.map(car => (
              <GridItem key={car.id} p="4" bg="white" borderRadius="md" boxShadow="md">
                <VStack align="start">
                  <Text fontSize="xl">{car.make} {car.model}</Text>
                  <Badge colorScheme={car.status === 'Active' ? 'green' : 'gray'}>{car.status}</Badge>
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
