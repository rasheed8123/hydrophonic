import {Tabledata} from './table'
import {
    Box,
    SimpleGrid,
    Heading,
    Highlight
  } from '@chakra-ui/react';



export const Project=()=>{

    return (
        <div>
          <Heading lineHeight='tall' style={{margin:"1%"}}>
  <Highlight
    query='Projects'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.200' }}
  >
  Projects
  </Highlight>
</Heading>
        <SimpleGrid columns={[2, null, 3]} spacing='40px' style={{margin:"3%"}}>
  <Box height="230px" ><img src="https://briohydroponics.com/images/projects/4.jpg"></img></Box>
  <Box height="230px" ><img src="https://briohydroponics.com/images/projects/5.jpg"></img></Box>
  <Box height="230px" ><img src="https://briohydroponics.com/images/projects/2.jpg"></img></Box>
  <Box height="230px"><img src="https://briohydroponics.com/images/projects/3.jpg"></img></Box>
  <Box height="230px"><img src="https://briohydroponics.com/images/project/Welspun_1.png"></img></Box>
  <Box height="230px" ><img src="https://briohydroponics.com/images/projects/4.jpg"></img></Box>

</SimpleGrid>
<Tabledata />
</div>
    )
}


