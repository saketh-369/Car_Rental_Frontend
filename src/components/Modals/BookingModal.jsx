import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Input,
  VStack,
  useToast,
  Select, // Import Select component from Chakra UI
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BookingModal = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const navigate = useNavigate();
  const toast = useToast();

  const [location, setLocation] = useState('');
  const [car, setCar] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [untilDate, setUntilDate] = useState('');

  const handleSearch = () => {
    if (!location || !car || !fromDate || !untilDate) {
      toast({
        title: 'Error',
        description: 'All fields are required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    navigate('/vehicle', {
      state: {
        location,
        car,
        fromDate,
        untilDate,
      },
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Check Availability
      </Button>
      
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Search Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="flex-start">
              <Select 
                placeholder='Select Location' 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value='Calicut'>Calicut</option>
                <option value='Kochi'>Kochi</option>
                <option value='Bengaluru'>Bengaluru</option>
                {/* Add more options as needed */}
              </Select>
              <Select 
                placeholder='Select Car' 
                value={car} 
                onChange={(e) => setCar(e.target.value)}
              >
                <option value='Toyota'>Toyota</option>
                <option value='Ford'>Ford</option>
                <option value='Hyundai'>Hyundai</option>
                <option value='Tata'>Tata</option>
                <option value='Honda'>Honda</option>
                {/* Add more options as needed */}
              </Select>
              <Text textAlign="left">From </Text>
              <Input 
                placeholder='From' 
                size='md' 
                type='datetime-local' 
                value={fromDate} 
                onChange={(e) => setFromDate(e.target.value)} 
              />
              <Text textAlign="left">Until </Text>
              <Input 
                placeholder='Until' 
                size='md' 
                type='datetime-local' 
                value={untilDate} 
                onChange={(e) => setUntilDate(e.target.value)} 
              />
            </VStack>
          </ModalBody>
          <ModalFooter className='gap-2'>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={handleSearch}>Search</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingModal;
