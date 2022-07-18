import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Faq } from './faq';
  export default function WithBackgroundImage() {
    return (
        <div>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              AcmaFresh Hydroponics feels it has an important responsibility, to combat the issues of water shortage and unhealthy food.
              We Help You Setup Your Hydrophonic Farm
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                <Link to='/home'>Show me more</Link>
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                <Link to='/contact'>Connect</Link>
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Faq />
      </div>
    );
  }