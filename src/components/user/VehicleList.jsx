import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Button,
  Spinner,
  Center,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/get-vehicle")
      .then((response) => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -500, // Adjust the value to scroll by the desired amount
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 500, // Adjust the value to scroll by the desired amount
      behavior: "smooth",
    });
  };

  const showVehicleDetails = (vehicle) => {
    navigate("/vehicle-detail", { state: { vehicle } });
  };

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
        <Text color="red.500">Failed to load vehicles.</Text>
      </Center>
    );
  }

  return (
    <Box position="relative" width="100%">
      <IconButton
        icon={<ArrowBackIcon />}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      />
      <HStack
        spacing="8"
        overflowX="hidden"
        p="4"
        ref={scrollRef}
        width="100%"
        whiteSpace="nowrap"
      >
        {vehicles.map((vehicle) => (
          <Box
            key={vehicle._id}
            minW="300px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p="6"
            display="inline-block"
          >
            <Image
              src="https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"
              alt={`${vehicle.make} ${vehicle.model}`}
            />
            <VStack align="start" mt="4" spacing="2">
              <Heading size="md">{`${vehicle.make} ${vehicle.model}`}</Heading>
              <Text>{`${vehicle.year}`}</Text>
              <Text>{`${vehicle.city}`}</Text>
              <HStack justify="space-between" width="100%">
                <Text fontWeight="bold">{`${vehicle.pricePerDay}/day`}</Text>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => showVehicleDetails(vehicle)}
                >
                  Show
                </Button>
              </HStack>
            </VStack>
          </Box>
        ))}
      </HStack>
      <IconButton
        icon={<ArrowForwardIcon />}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={scrollRight}
        aria-label="Scroll Right"
      />
    </Box>
  );
};

export default VehicleList;
