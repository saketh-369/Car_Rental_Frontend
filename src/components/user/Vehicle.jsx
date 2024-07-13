import { Box, Heading, Text, Stack, Flex, Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Vehicle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { location: loc, car, fromDate, untilDate } = location.state || {};
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/user/get-vehicle');
        setItems(response.data);
      } catch (error) {
        console.log('Error fetching data: ', error.message);
      }
    };
    fetchData();
  }, []);

  // Filter the items based on the location (city) and car model
  const filteredItems = items.filter(item => {
    return (!loc || item.city.toLowerCase().includes(loc.toLowerCase())) &&
           (!car || item.make.toLowerCase().includes(car.toLowerCase()) || item.model.toLowerCase().includes(car.toLowerCase()));
  });

  const handleBookNow = (item) => {
    navigate('/vehicle/reservation', { state: { item, fromDate, untilDate } });
  };

  return (
    <>
      <Box p={8} maxW="600px" mx="auto" mt={8} boxShadow="md" borderRadius="md" bg="white">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Vehicle Search Results
        </Heading>
        <Stack spacing={4}>
          <Box>
            <Text fontSize="lg">
              <strong>Location:</strong> {loc}
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg">
              <strong>Car:</strong> {car}
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
        </Stack>
      </Box>
      <Flex justify="center" align="center" height="20vh">
        <Heading>Available Cars</Heading>
      </Flex>
      <Box p={8} maxW="900px" mx="auto" mt={8} boxShadow="md" borderRadius="md" bg="white">
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <Heading size='md'>{item.make}</Heading>
              </CardHeader>
              <CardBody>
                <Heading size='sm'>{item.model}</Heading>
                <Text>{item.pricePerDay} Rupees per day</Text>
              </CardBody>
              <CardFooter>
                <Button onClick={() => handleBookNow(item)}>Book now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Vehicle;
