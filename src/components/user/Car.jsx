// VehicleDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Image,
  VStack,
  Heading,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";

const Car = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/get-vehicle/${vehicleId}`)
      .then((response) => {
        setVehicle(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [vehicleId]);

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
        <Text color="red.500">Failed to load vehicle details.</Text>
      </Center>
    );
  }

  if (!vehicle) {
    return (
      <Center>
        <Text>No vehicle details available.</Text>
      </Center>
    );
  }

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p="6" m="4" mx="auto">
      <Image src={vehicle.imageUrl || "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"} alt={`${vehicle.make} ${vehicle.model}`} />
      <VStack align="start" mt="4" spacing="2">
        <Heading size="md">{`${vehicle.make} ${vehicle.model}`}</Heading>
        <Text>Year: {vehicle.year}</Text>
        <Text>City: {vehicle.city}</Text>
        <Text>Price per day: {vehicle.pricePerDay}</Text>
        <Text>Availability: {vehicle.availability ? "Available" : "Not Available"}</Text>
      </VStack>
    </Box>
  );
};

export default Car;
