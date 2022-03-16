import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { get } from 'lodash';
import {
  Heading,
  Text,
  Container,
  Stack,
  Box,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react';


const test = (params) => {
  const { queryKey } = params;
  const [, id ] = queryKey;
  const res = axios.get("https://training-api-dev.cynder.io/api/pages/" + id.id)
  return res;
}

export default function AboutPage() {
  const { data } = useQuery([
    'pages',
    {
      id: 1,
    },
  ], 
test); // react-query

    return (
      <>
       
  
        <Container mt={-10} maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              About <br />
              <Text as={'span'} color={'blue.400'}>
                Us
              </Text>
            </Heading>
            <Text  dangerouslySetInnerHTML={{
          __html: get(data, 'data.data.attributes.content')}}/>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Box textAlign={'center'}>
                  <Avatar
                    src={
                      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                    }
                    alt={'Jenny Wilson'}
                    mb={2}
                  />

        <Text fontWeight={600}>Jenny Wilson</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  


