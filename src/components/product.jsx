import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    SimpleGrid,
  Heading,
  Highlight
  } from '@chakra-ui/react';
import { useSelector } from "react-redux";

// product page could been better made it as e-store can also place order could not do so due to  time contsraits
const Todolist  =()=>{
    const state = useSelector((state)=>state.todos);
    return (
        <div>
            <Heading lineHeight='tall' style={{margin:"2%"}}>
  <Highlight
    query=' Our Products'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.200' }}
  >
  Have A Look At Some Of Our Products For More Info Contact Us
  </Highlight>
</Heading>
<SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            {state.map((e)=>{
                return (<Box ><img src={e.title}></img></Box>)
            })}
            </SimpleGrid>
        </div>
    )
}
export {Todolist}