import './components/ultra.css'
import {
    Box,
    VStack,
    SimpleGrid,
    List,
  ListItem,
  ListIcon,
  Icon,
  OrderedList,
  UnorderedList,
  Heading,
  Highlight
  } from '@chakra-ui/react';
import WithSpeechBubbles from './review'


export const Servicesimage=()=>{

    return (
        <div>
           <Heading lineHeight='tall' style={{margin:"2%"}}>
  <Highlight
    query=' Our Services'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.200' }}
  >
  Our Services
  </Highlight>
</Heading>
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
  <Box bg='tomato' height='230px'><img src="https://briohydroponics.com/images/image/bri6.png"></img></Box>
  <Box bg='tomato' height='230px'><img src="https://briohydroponics.com/images/image/bri1.png"></img></Box>
  <Box bg='tomato' height='230px'><img src="https://briohydroponics.com/images/image/bri1.png"></img></Box>
  <Box bg='tomato' height='230px'><img src="https://briohydroponics.com/images/image/bri4.png"></img></Box>
  <Box bg='tomato' height='230px'><img src="https://briohydroponics.com/images/image/bri8.png"></img></Box>
  <Box bg='tomato' height='230px'><img src="https://briohydroponics.com/images/image/bri4.png"></img></Box>
  </SimpleGrid>
  <Heading lineHeight='tall' style={{margin:"2%"}}>
  <Highlight
    query=' We Are Good At'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.200' }}
  >
  We Are Good At
  </Highlight>
</Heading>
  <SimpleGrid columns={2} spacing={10} style={{marginTop:"3%"}}>
    
    <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Techno-Economic Feasible Study</li></Box>
    <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Crop Selection Framework</li></Box>
    <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Project Design And Site Planning</li></Box>
    <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Crop Management</li></Box>
    <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Assisteance In Raising Funds</li></Box>
    <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Project Development</li></Box>
  </SimpleGrid>
  <WithSpeechBubbles />
</div>
    )
}

