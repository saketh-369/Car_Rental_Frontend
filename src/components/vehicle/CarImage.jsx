import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Image, Box, Flex, Spacer, Text, List, ListItem, ListIcon, Heading, Spinner, Center } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const CarImage = () => {
  const location = useLocation();
  const { vehicle } = location.state || {};

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (vehicle) {
      setLoading(false);
    } else {
      setError("No vehicle data found.");
      setLoading(false);
    }
  }, [vehicle]);

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Text color="red.500">{error}</Text>
      </Center>
    );
  }

  return (
    <div>
      <Flex p={10}>
        <Box boxSize="xl" px={10} py={10}>
          <Image
            src="https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp"
            alt={`${vehicle.make} ${vehicle.model}`}
          />
        </Box>
        <Spacer />
        <Box px={10} py={10}>
          <Heading as="h2" size="xl" mb={4}>
            {vehicle.make} {vehicle.model}
          </Heading>
          <Text fontSize="lg" mb={4}>
            <strong>Model:</strong> {vehicle.model} <br />
            <strong>Year:</strong> {vehicle.year} <br />
            <strong>Features:</strong> Advanced AI, Autonomous Driving, Electric Engine, Luxury Interior <br />
            <strong>Specifications:</strong> 1000hp, 0-60 mph in 2.5s, Top speed 220 mph
          </Text>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Rental Price: ${vehicle.pricePerDay}/day
          </Text>
          <Heading as="h3" size="md" mb={2}>
            Availability Calendar
          </Heading>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              July 10 - July 20: Available
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.500" />
              July 21 - July 25: Booked
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              July 26 - August 5: Available
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.500" />
              August 6 - August 10: Booked
            </ListItem>
          </List>
        </Box>
      </Flex>
    </div>
  );
};

export default CarImage;
