import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../axios/axiosFunctions'; // axios
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  VStack,
  Image,
} from '@chakra-ui/react';

export default function BlogPostWithImage() {
  const { data: postsData } = useQuery([
    'posts',
    {
        _limit: 5,
    },
], fetchPosts); // react-query

  // const newList = postsData?.data.data.slice(4);
  // console.log(postsData?.data.data)

  return (
    <Center py={6}>
    <VStack>
    {postsData?.data.data.slice(0,4).map((item) => (
      <Box key={item.id}
        maxW={'445px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'auto'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
           <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Post
          </Text>
          <Heading
            // color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {item.attributes.title}
          </Heading>
          <Text color={'gray.500'}>
          {item.attributes.content}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}>Published on: {item.attributes.publishedAt}</Text>
          </Stack>
        </Stack>
      </Box>

    ))}
    </VStack>

    </Center>
  );
}