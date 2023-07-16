import React, { useState } from "react";
import {
  Card,
  Box,
  Heading,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
const DataCard = ({ item, updateItem, deleteItem }) => {
    return (
        // <div key={item._id} className="wrapper">
        //     <div className="product-img">
        //         <img src={item.images[0]} alt="Product" />
        //     </div>
        //     <div className="product-info">
        //         <div className="product-text">
        //             <span>
        //                 <h3>Title:</h3>
        //                 <p>{item.title}</p>
        //             </span>
        //             <span>
        //                 <h3>Category:</h3>
        //                 <p>{item.mainname}</p>
        //             </span>
        //             <span>
        //                 <h3>Description:</h3>
        //                 <span
        //                     className="description"
        //                     dangerouslySetInnerHTML={{ __html: item.description }}
        //                 ></span>
        //             </span>
        //             <span>
        //                 <h3>Size:</h3>
        //                 <p>{`${item.size._length}' X ${item.size._width}'`}</p>
        //             </span>
        //             <span>
        //                 <h3>Added Date:</h3>
        //                 <p>{item.date}</p>
        //             </span>
        //         </div>
        //         <div className="product-price-btn">
        //             <button
        //                 type="button"
        //                 className="update-btn"
        //                 onClick={() => updateItem(item)}
        //             >
        //                 Update
        //             </button>
        //             <button
        //                 type="button"
        //                 className="delete-btn"
        //                 onClick={() => deleteItem(item._id)}
        //             >
        //                 Delete
        //             </button>
        //         </div>
        //     </div>
        // </div>


<Card maxW='sm'>
  <CardBody>
    <Image
      src={item.images[0]} 
      alt='Green double couch with wooden legs'
      height="250px"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' textAlign="start">Category: {item.mainname}</Heading>
      <Text  color='blue.600' fontSize='xl' textAlign="start">
        Title: {item.title}
      </Text>
      
      <Accordion  allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Description
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className="description" dangerouslySetInnerHTML={{ __html: item.description }}>
     
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup>
      <Button variant='solid'  colorScheme='blue' onClick={() => updateItem(item)}>
        Update Item
      </Button>
      <Button variant='solid' bg="red"   onClick={() => deleteItem(item._id)}>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


       
    );
};

export default DataCard;
