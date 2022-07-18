import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
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
              Hydrophonic
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Farming
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Hydroponic System is a system of growing crops without soil, often called soilless farming. In the hydroponic system, the plant roots grow in a liquid nutrient solution or inside the moist inert materials like Rockwool and Vermiculite. The liquid nutrient solution is a mixture of essential plant nutrients in the water.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              <Link to='/contact'>Contact us</Link>
            </Button>
            <Button rounded={'full'}><Link to="/services">Our Services</Link></Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
'https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1605501946877-SCPH8PKNZFBYQJ4C12PL/Photo+1.jpg'          }
        />
      </Flex>
    </Stack>
  );
}