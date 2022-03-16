import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { get } from 'lodash';
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

const test = (params) => {
  const { queryKey } = params;
  const [, id ] = queryKey;
  const res = axios.get("https://training-api-dev.cynder.io/api/pages/" + id.id)
  return res;
}

export default function ServicesPage() {
  const { data } = useQuery([
    'pages',
    {
      id: 3,
    },
  ], 
test); // react-query

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={10} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Web App Development
            </Text>{' '}
          </Heading>
          <Text align={'left'} dangerouslySetInnerHTML={{
          __html: get(data, 'data.data.attributes.content')}} noOfLines={10}/>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
        />
      </Flex>
    </Stack>
  );
}