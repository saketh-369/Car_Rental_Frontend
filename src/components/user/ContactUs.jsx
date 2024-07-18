// src/components/ContactUs.js

import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <Box padding="6" bg="gray.50" minH="100vh">
      <VStack spacing="6" align="center">
        <Heading as="h1" size="2xl" textAlign="center" mt="4">
          Contact Us
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="600px">
          We love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </Text>
        <Box bg="white" p="6" borderRadius="md" boxShadow="md" width="100%" maxW="600px">
          <form>
            <VStack spacing="4">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input placeholder="Subject" />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button colorScheme="blue" type="submit" width="full">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactUs;
