import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { get } from 'lodash';
import {
  Stack,
  Text,
  Heading,
  Avatar,
  Container,
} from '@chakra-ui/react';

const test = (params) => {
  const { queryKey } = params;
  const [, id ] = queryKey;
  const res = axios.get("https://training-api-dev.cynder.io/api/posts/" + id.id)
  return res;
}

export default function PostDetails() {
  const {id} = useParams()
  const { data } = useQuery([
    'posts',
    {
      id: id,
    },
  ], 
test); // react-query

console.log(data)


    return (
      <Container mt={10} maxW={'3xl'}>
      <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
     
      <Heading
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        lineHeight={'110%'}
        dangerouslySetInnerHTML={{
          __html: get(data, 'data.data.attributes.title')}}  
        /> 
        
      <Text
        align={'right'}
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}
        dangerouslySetInnerHTML={{
          __html: get(data, 'data.data.attributes.content')}}
      
       />
     <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}>Published on:</Text> <Text  dangerouslySetInnerHTML={{
          __html: get(data, 'data.data.attributes.publishedAt')}}/>
          </Stack>
        </Stack>
     
    </Stack>
    </Container>
  );
}
 
