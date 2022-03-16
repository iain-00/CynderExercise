import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../axios/axiosFunctions'; // axios
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  VStack,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

export default function BlogPostWithImage() {
  const { data: postsData } = useQuery([
    'posts',
    {
      populate: '*',
    },
], fetchPosts); // react-query
console.log(postsData)
  return (
    <Center py={6}>
    <VStack pt={50}>
    <Text
            color={'black.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'xl'}
            letterSpacing={1.1}>
            Featured Posts
          </Text>
    <SimpleGrid columns={2} spacing={10}>
    {postsData?.data.data.slice(0,4).map((item) => (
   
      <Box key={item.id}
        maxW={'500px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
           {/* {console.log(get(item, 'attributes.cover.data.attributes.url'))} */}
        <Box
          h={'auto'}
          bg={'gray.100'}
          mt={1}
          mx={-1}
          mb={1}
          pos={'relative'}>
           <Image
            src={`https://training-api-dev.cynder.io/${get(item, 'attributes.cover.data.attributes.url')}`}
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'blue.500'}
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
          <Text color={'gray.500'} dangerouslySetInnerHTML={{
             __html: get(item, 'attributes.content')}} noOfLines={5}/>
         
        </Stack>
        <Link to={`/postDetails/${item.id}`}>
            <Text
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'small'}
              letterSpacing={1.1}>
              Read More
            </Text>
        </Link>
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

    </SimpleGrid>
    </VStack>
    </Center>
  );
}