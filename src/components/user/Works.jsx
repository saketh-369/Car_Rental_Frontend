import { Box, VStack, HStack, Heading, Text, Icon } from "@chakra-ui/react";
import { FaCar, FaClipboardCheck, FaKey } from "react-icons/fa";

const Works = () => {
  return (
    <Box p={8} bg="gray.100">
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        How It Works
      </Heading>
      <HStack justify="space-around" align="center" spacing={8}>
        <VStack>
          <Icon as={FaCar} w={16} h={16} color="teal.500" />
          <Heading as="h3" size="md" mt={4}>
            Choose Vehicle
          </Heading>
          <Text textAlign="center" maxW="200px">
            Browse and select the perfect vehicle from our extensive collection.
          </Text>
        </VStack>
        <VStack>
          <Icon as={FaClipboardCheck} w={16} h={16} color="teal.500" />
          <Heading as="h3" size="md" mt={4}>
            Reserve
          </Heading>
          <Text textAlign="center" maxW="200px">
            Reserve your selected vehicle easily through our online system.
          </Text>
        </VStack>
        <VStack>
          <Icon as={FaKey} w={16} h={16} color="teal.500" />
          <Heading as="h3" size="md" mt={4}>
            Pick Up
          </Heading>
          <Text textAlign="center" maxW="200px">
            Pick up your reserved vehicle at the scheduled time and location.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Works;
