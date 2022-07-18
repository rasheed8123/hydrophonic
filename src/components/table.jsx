
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'




export const Tabledata=()=>{

    return (
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Our Projects</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Accomplishment</Th>
        <Th>Place</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Welspun Group</Td>
        <Td>This project has earned special applauds from the Welspun Conglomerate.</Td>
        <Td>Anjar, Kachchh District, Gujarat</Td>
      </Tr>
      <Tr>
        <Td>HMG Ventures</Td>
        <Td>They successfully installed dutch bucket and NFT systems on a barren land and gifted a new lease of life to that land parcel in Jamnagar District.</Td>
        <Td>Jamnagar, Gujarat</Td>
      </Tr>
      <Tr>
        <Td>Urban Farmers & Co.</Td>
        <Td>Setting up an entry level ‘Standard Hydroponics System’for new age agripreneurs in moderately sized</Td>
        <Td >Shahapur, Thane District, Maharashtra</Td>
      </Tr>
      <Tr>
        <Td>Anand Agriculture University</Td>
        <Td>Designed Multisystem Projects for the university, by bringing into play the use of NFT, Dutch Bucket and NFT Vertical methods</Td>
        <Td>Anand District, Gujarat</Td>
      </Tr>
      <Tr>
        <Td>VASP Advisors Group</Td>
        <Td>This project spanned an area extending beyond 2000 Square Metres. Our hard work paid off and we rolled out an all exclusive Hydroponics Farm system designed for this heavy flood zone. </Td>
        <Td>Guwahati, Assam</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>NAME</Th>
        <Th>ACCOMPLISHMENT</Th>
        <Th>PLACE</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    )
}