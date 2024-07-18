
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box padding="6" bg="gray.50" minH="100vh">
      <VStack spacing="6" align="center">
        <Heading as="h1" size="2xl" textAlign="center" mt="4">
          About Us
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="600px">
          Welcome to CarRental! We are dedicated to providing you with the best car rental experience.
          Our fleet consists of a wide range of vehicles to suit your needs, from compact cars to luxury SUVs.
        </Text>
        <Image
          src="https://www.shutterstock.com/image-illustration/white-midsize-family-urban-suv-600nw-2130585614.jpg"
          alt="Car rental service"
          borderRadius="md"
          boxShadow="md"
        />
        <Text fontSize="lg" textAlign="center" maxW="600px">
          Our mission is to offer high-quality, reliable, and affordable car rental services. We take pride in our customer service 
          and are always here to help you with any questions or concerns. Thank you for choosing us!
        </Text>
        <Text fontSize="lg" textAlign="center" maxW="600px">
          Contact us at +91 7591923705 for more information or to book a car today!
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
