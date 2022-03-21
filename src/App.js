import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import NavBar from './components/navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import BlogPostWithImage from './components/posts';
import About from './components/about';
import Services from './components/services';
import ProcessPage from './components/process';
import ContactUs from './components/contactUs';
import PostDetails from './components/postDetails';
import PostList from './components/postList';


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
    <Box zIndex={1000} position={'fixed'} w={'100%'} h={'auto'}>
      <NavBar/>
      </Box>
      <Box textAlign="center" fontSize="xl" z-index='-1'>
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}> 
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<BlogPostWithImage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/process' element={<ProcessPage/>}/>
              <Route path='/contactUs' element={<ContactUs/>}/>
              <Route path='/postDetails/:id' element={<PostDetails/>}/>
              <Route path='/postList' element={<PostList/>}/>
            </Routes>
          </BrowserRouter>  
            </VStack>
        </Grid>
  
   </Box>
    </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;