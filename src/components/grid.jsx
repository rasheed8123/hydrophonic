import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import './ultra.css'
  import { Link } from 'react-router-dom';
  import {} from '@chakra-ui/react';
  
  
  const Feature = ({ heading, text }) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function GridListWithCTA() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4} style={{margin:"2%",backgroundColor:"lightgreen"}}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
              LET’S RISE TOGETHER
              </chakra.h2>
              <Button colorScheme="green" size="md">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
              Well, it makes us proud to say that we are committed to spread the benefits of Hydroponic Farming far and wide across our whole nation.

Every day we dedicate our growth to the positive change brought by our work
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Outdoor Hydroponics Farm Setup'}
            text={'A 360 degree solution for setting up commercially profitable outdoor hydroponics farms that deliver maximum crop yield.'}
          />
          <Feature
            heading={'Indoor Hydroponics Farm Setup'}
            text={'Indoor Farms by Rise Hydroponics, raises crops In an all-round controlled environment monitored by latest technologies.'}
          />
          <Feature
            heading={'Subsidy Based Soilless Agriculture Farm'}
            text={'Avail handsome subsidies by Central & State Governments By installing special soil-less farming systems in your space.'}
          />
          <Feature
            heading={'Polyhouse Structure Development '}
            text={'We build and Install Hydroponics based Poly house- Farming Setups for growing various seasonal and non-seasonal crops.'}
          />
        </Grid>
      </Box>
    );
  }