

import './index.css'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { Box, useColorModeValue } from '@chakra-ui/react'

function App() {


  return(
   <Box bg={useColorModeValue("gray.100","gray.900")} minH={"100vh"} >
    <Navbar/>
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/create' element={<CreatePage />} />
</Routes>
   </Box>
  );
}

export default App
