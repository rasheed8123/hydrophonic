import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex,Heading,Highlight } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} style={{margin:"3%"}}>
        <Heading lineHeight='tall' style={{margin:"2%"}}>
  <Highlight
    query={'HYDROPONIC'}
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
  >
   NEW OPPORTUNITIES WITH HYDROPONIC FARMING
  </Highlight>
</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Supermarkets'}
          text={
'To expand the access of hydroponically grown crops to masses, supermarket chains have also come forward to partner with hydroponics farm owners.'          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Community Spaces'}
          text={
'A large number of Residential Societies, Malls and Clubs, have started utilising their rooftops and spaces for installation of hydroponics setups.'          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Exotic Crops'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}