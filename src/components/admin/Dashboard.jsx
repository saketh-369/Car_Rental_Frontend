import { useState } from 'react';
import { Box, Flex, Heading, Link, Text, VStack, Button, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dealer from './Dealer';
import Vehicle from './Vehicle';
import Cookies from 'js-cookie';

const Sidebar = ({ setActiveSection }) => (
  <Box as="nav" w="250px" p="4" bg="gray.100">
    <VStack align="start" spacing="4">
      <Link onClick={() => setActiveSection('home')}>Dashboard Home</Link>
      <Link onClick={() => setActiveSection('vehicles')}>Manage Vehicles</Link>
      <Link onClick={() => setActiveSection('members')}>Manage Members</Link>
      <Link onClick={() => setActiveSection('reservations')}>Reservations Overview</Link>
      <Link onClick={() => setActiveSection('reports')}>Reports & Analytics</Link>
    </VStack>
  </Box>
);

Sidebar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token')
    // Perform any logout logic here (e.g., clearing tokens, etc.)
    navigate('/'); // Navigate to home page
  };

  return (
    <Flex as="header" w="100%" p="4" bg="blue.500" color="white" align="center">
      <Heading size="lg">Admin Dashboard</Heading>
      <Spacer />
      <Button colorScheme="blue" onClick={handleLogout}>Logout</Button>
    </Flex>
  );
};

const DashboardContent = ({ activeSection, setActiveSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Heading size="md" mb="4">Register Dealer</Heading>
            <Dealer setActiveSection={setActiveSection} />
          </>
        );
      case 'vehicles':
        return (
          <>
            <Heading size="md" mb="4">Add/Edit/Delete Vehicle Form</Heading>
            <Vehicle />
          </>
        );
      case 'members':
        return (
          <>
            <Heading size="md" mb="4">Member Management Section</Heading>
            <Text>Add new member, cancel membership, etc.</Text>
          </>
        );
      case 'reservations':
        return (
          <>
            <Heading size="md" mb="4">Reservations Overview</Heading>
            <Text>Overview of reservations goes here.</Text>
          </>
        );
      case 'reports':
        return (
          <>
            <Heading size="md" mb="4">Reports & Analytics</Heading>
            <Text>Reports and analytics content goes here.</Text>
          </>
        );
      default:
        return null;
    }
  };

  return <Box p="4">{renderContent()}</Box>;
};

DashboardContent.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar setActiveSection={setActiveSection} />
        <DashboardContent activeSection={activeSection} setActiveSection={setActiveSection} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;