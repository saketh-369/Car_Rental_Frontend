import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { API } from '../../api';

const Dealer = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
    companyName: '',
    companyWebsite: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the name includes "address."
    if (name.startsWith('address.')) {
      const nestedName = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        address: {
          ...prevState.address,
          [nestedName]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/admin/dealer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
      if (response.ok) {
        console.log('Dealer created successfully');
        setActiveSection('vehicles'); // Change to "Manage Vehicles" section
      } else {
        console.error('Failed to create dealer');
        // Handle error
      }
    } catch (error) {
      console.error('Error creating dealer:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="4" align="stretch">
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl id="phone" isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl id="street" isRequired>
          <FormLabel>Street Address</FormLabel>
          <Input
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            required
          />
        </FormControl>

        <HStack spacing="4">
          <FormControl id="city" isRequired>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="state" isRequired>
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              required
            />
          </FormControl>
        </HStack>

        <HStack spacing="4">
          <FormControl id="postalCode" isRequired>
            <FormLabel>Postal Code</FormLabel>
            <Input
              type="text"
              name="address.postalCode"
              value={formData.address.postalCode}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="country" isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              name="address.country"
              value={formData.address.country}
              onChange={handleChange}
              required
            />
          </FormControl>
        </HStack>

        <FormControl id="companyName" isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl id="companyWebsite">
          <FormLabel>Company Website</FormLabel>
          <Input
            type="url"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </VStack>
    </form>
  );
};

Dealer.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default Dealer;
