import { Flex, Image } from '@chakra-ui/react'
import './App.css'
import BookingModal from './components/Modals/BookingModal'
import VehicleList from './components/user/VehicleList'
import Works from './components/user/Works'
import Footer from './components/footer/Footer'


function App() {
  

  return (
    <>
    <Flex direction="column" align="center" justify="center" gap="6">
      <Image w="100%" h="500px" objectFit='cover' src='https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg' alt='Car Image' />
      <BookingModal />
      <VehicleList />
      <Works />
      <Footer />
    </Flex>
      

    </>
  )
}

export default App
