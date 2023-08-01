import React from "react";
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
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const DataCard = ({ item, updateItem, deleteItem }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Carousel responsive={responsive}>
          {item.images.map((image, index) => (
            <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            height="250px"
            borderRadius="lg"
            draggable={false}
          />
          ))}
        </Carousel>
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign="start">
            Category: {item.category}
          </Heading>
          <Text color="blue.600" fontSize="xl" textAlign="start">
            Title: {item.title}
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Description
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className="description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => updateItem(item)}
          >
            Update Item
          </Button>
          <Button variant="solid" bg="red" onClick={() => deleteItem(item._id)}>
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default DataCard;

