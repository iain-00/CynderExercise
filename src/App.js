import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import NavBar from './components/navbar';
import BlogPostWithImage from './components/posts';
import { QueryClient, QueryClientProvider } from 'react-query';

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
            <BlogPostWithImage />
            </VStack>
        </Grid>
  
   </Box>
    </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
