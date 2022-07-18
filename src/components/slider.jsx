import { Box,Highlight,Heading,Container,SimpleGrid } from '@chakra-ui/react'
import '../App.css'

function CarouselFadeExample() {
  return (
  <div>
       <Heading lineHeight='tall'>
  <Highlight
    query='Hydroponic Farming'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.200' }}
  >
   We help you setup Commercial Hydroponic Farming System In India
  </Highlight>
</Heading>
<Container maxW='7xl' bg='blue.600' centerContent>
<img src="https://wallpaperaccess.com/full/1598445.jpg" style={{width:"100%",height:"500px"}}></img>
  <Box padding='4' bg='blue.400' color='black' maxW='m'>
  Hydroponic System is a system of growing crops without soil, often called soilless farming. In the hydroponic system, the plant roots grow in a liquid nutrient solution or inside the moist inert materials like Rockwool and Vermiculite. The liquid nutrient solution is a mixture of essential plant nutrients in the water.
  </Box>
</Container>
<Container maxW='7xl' style={{marginTop:"3%"}}centerContent>
<Heading size='lg' fontSize='50px' style={{color:"green"}}>
  WHO WE ARE
</Heading>
<Heading lineHeight='tall'>
  <Highlight
    query={['spotlight', 'emphasize', 'Accentuate']}
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
  >
    Developers in Hydroponic Farming and Soil less Farming. Its’ out-of-the-box technology solutions and unique methods are Successfully operating all across India.
  </Highlight>
</Heading>

</Container>
<Container maxW='7xl' bg='blue.200' style={{marginTop:"3%"}}centerContent>
<img src="https://images.livemint.com/img/2021/02/25/1600x900/farms_1614268918010_1614268923332.jpg" style={{width:"100%",height:"500px"}}></img>


</Container>
<Heading lineHeight='tall' style={{marginTop:"3%"}}>
  <Highlight
    query='OUR'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.200' }}
  >
   GOOD REASONS TO CHOOSE OUR HYDROPONIC FARMING
  </Highlight>
</Heading>
<SimpleGrid columns={2} spacing={10} style={{marginTop:"3%"}}>
    
  <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Well Recognised Team Of Agronomists</li></Box>
  <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Expertise in Large Scale Hydroponics Project Development</li></Box>
  <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Extended Support Till Last Mile Delivery</li></Box>
  <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Support In Assessment Of Project Feasibility Support</li></Box>
  <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Use of High Tech Software and Sensors
for Climate Control, Irrigation, etc.</li></Box>
  <Box bg='lightgreen' height='50px' style={{borderRadius:"25%",alignItems:"center"}}><li>Everything we execute, is backed by our
Own Dedicated R&D Centers</li></Box>
</SimpleGrid>
<div >
    
</div>


  </div>
  
  );
}

export default CarouselFadeExample;