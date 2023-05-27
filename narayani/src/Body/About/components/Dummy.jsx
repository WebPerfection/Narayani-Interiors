import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

import founder from "./founder.jpeg";
import bni from "./bni.jpeg";

const Dummy = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <div>
        <Heading size="3xl" textDecoration={"underline"}>
          Meet our Founder
        </Heading>
        <br />
        <br />
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src={founder}
            alt="founder img"
          />

          <Stack mt={"50px"}>
            <CardBody>
              <Heading size="xl">Ankit Agarwal </Heading>
              <Divider />

              <Text py="2">
                Ankit Agarwal is the passionate founder and lead designer of
                Narayani Interiors, a renowned interior design firm. With over
                10 years of experience in the industry, Ankit has established
                himself as a visionary and creative force.
                <br />
                Specializing in modern and minimalist designs, he brings a fresh
                and innovative approach to every project. His meticulous
                attention to detail and ability to transform spaces into
                stunning yet functional environments have earned him recognition
                and numerous industry accolades.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </div>
      <div>
        <Heading size="3xl" textDecoration={"underline"}>
          Organization We are connected
        </Heading>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent:"center"}}>
          <Card maxW="md">
            <CardHeader>
              <Heading size="xl">BNI RANCHI </Heading>
            </CardHeader>
            <CardBody>
              <Text>
              BNI is a organization that help their members increase their business through a structured, positive, 
              and professional "word-of-mouth" program that enables them to develop long-term, 
              meaningful relationships with quality business professionals.
              </Text>
            </CardBody>
            <Image objectFit="cover" src={bni} alt="Chakra UI" />
          </Card>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Heading size="3xl" textDecoration={"underline"}>
          Area of Services
        </Heading>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living Area Designing</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450-$550
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Modular Kitchen Designing</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450-$550
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Commercial Space Designing</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450-$550
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
