import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Switch,
  Spinner,
  Alert,
  AlertIcon,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import axios from 'axios';
import { API } from '../../api';

const VehicleForm = () => {
  const [dealers, setDealers] = useState([]);
  const [vehicle, setVehicle] = useState({
    make: '',
    model: '',
    year: '',
    pricePerDay: '',
    availability: true,
    dealer: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch dealer IDs from the backend
    axios
      .get(`${API}/admin/get-dealer`)
      .then(response => {
        setDealers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dealers:', error);
        setError('Failed to load dealers');
        setLoading(false);
      });
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setVehicle(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    axios
      .post(`${API}/admin/vehiclelist`, vehicle)
      .then(response => {
        console.log('Vehicle added:', response.data);
        setIsOpen(true); // Open the success dialog
      })
      .catch(error => console.error('Error adding vehicle:', error))
      .finally(() => setIsSubmitting(false));
  };

  const handleClose = () => {
    setIsOpen(false);
    // Optionally reset the form or navigate somewhere else
    setVehicle({
      make: '',
      model: '',
      year: '',
      pricePerDay: '',
      availability: true,
      dealer: '',
    });
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  // Ensure dealers is always an array
  const dealersArray = Array.isArray(dealers) ? dealers : [];

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>Make</FormLabel>
          <Input name="make" value={vehicle.make} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Model</FormLabel>
          <Input name="model" value={vehicle.model} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Year</FormLabel>
          <NumberInput min={1886} max={new Date().getFullYear()}>
            <NumberInputField
              name="year"
              value={vehicle.year}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Price Per Day</FormLabel>
          <NumberInput min={0}>
            <NumberInputField
              name="pricePerDay"
              value={vehicle.pricePerDay}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>
        <FormControl display="flex" alignItems="center" mb={4}>
          <FormLabel mb="0">Availability</FormLabel>
          <Switch
            name="availability"
            isChecked={vehicle.availability}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Dealer</FormLabel>
          <Select
            name="dealer"
            value={vehicle.dealer}
            onChange={handleChange}
          >
            <option value="">Select Dealer</option>
            {dealersArray.map(dealer => (
              <option key={dealer._id} value={dealer._id}>
                {dealer.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>
          Add Vehicle
        </Button>
      </form>

      {/* Success Dialog */}
      <AlertDialog isOpen={isOpen} onClose={handleClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Vehicle Added Successfully
          </AlertDialogHeader>

          <AlertDialogBody>
            The vehicle has been added successfully.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={handleClose} colorScheme="teal">
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

export default VehicleForm;
