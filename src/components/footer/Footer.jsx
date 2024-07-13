import { Box, HStack, VStack, Link, Text, Icon, Divider, Center } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="white" py={10} width="100%">
      <VStack spacing={6} align="center" maxW="1200px" mx="auto">
        <HStack spacing={10} wrap="wrap" justify="center">
          <Link href="/privacy-policy" _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" _hover={{ textDecoration: "underline" }}>
            Terms of Service
          </Link>
        </HStack>
        <HStack spacing={6} justify="center">
          <Link href="https://www.facebook.com" isExternal>
            <Icon as={FaFacebook} w={6} h={6} _hover={{ color: "teal.300" }} />
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            <Icon as={FaGithub} w={6} h={6} _hover={{ color: "teal.300" }} />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <Icon as={FaInstagram} w={6} h={6} _hover={{ color: "teal.300" }} />
          </Link>
        </HStack>
        <Divider borderColor="gray.700" />
        <Center>
          <VStack spacing={1} textAlign="center">
            <Text>Contact Us: support@carrental.com</Text>
            <Text>Phone: +91 7591923705</Text>
            <Text>&copy; {new Date().getFullYear()} CarRental. All rights reserved.</Text>
          </VStack>
        </Center>
      </VStack>
    </Box>
  );
};

export default Footer;
