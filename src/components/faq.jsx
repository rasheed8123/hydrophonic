import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Highlight
  } from '@chakra-ui/react'

export const Faq=()=>{



    return (
        <Accordion style={{margin:"5%"}} allowToggle>
           <Heading lineHeight='tall' style={{margin:"2%"}}>
  <Highlight
    query={'Why Choose Hydrophonic'}
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
  >
   Why Choose Hydrophonic
  </Highlight>
</Heading>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='2' textAlign='center'>
        Is hydroponic farming is profitable?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Hydroponic farming is highly profitable. It is an example of high yield just in a small place in any season or weather condition. The hydroponic vegetables are highly accurate and balanced in fibers, minerals, and vitamins. It is the first method of doing soil-less farming/cultivation
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='2' textAlign='center'>
        Is hydroponic farming healthy?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Hydroponically grown sprouts. In their sprouting stages, seeds are known to be most nutritious due to concentration of all the nutrients. Hydroponically grown sprouts are even healthier since they draw from wholesome nutrient water solutions.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='2' textAlign='center'>
        Why is hydroponics not popular?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     "Hydroponics is technical, and not simple,” he says. “You've got to worry about plumbing, slope, pressure, and measuring nutrients. You become a plumber, you become an electrician.” He also found that growing hydroponically can quickly become expensive due to cost of equipment and lighting
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='2' textAlign='center'>
        Is hydroponic vegetables safe to eat?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    A hydroponic system gives you total control of the nutrients that your plants receive. But are hydroponic nutrients safe for the environment and for the plants themselves? The simple answer is yes…as long as you use the appropriate nutrients and understand how to properly dispose of them
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='2' textAlign='center'>
        Do hydroponic vegetables taste different?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    There is a stigma about hydroponic crops having little flavor or are “watered down”, but this is no longer the case. The truth is that crops grown in a local hydroponic vertical farm are, in fact, better in taste and safer than the food you might find farmed otherwise.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

    )
}
