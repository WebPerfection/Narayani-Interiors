import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import founder from "./founder.jpeg";
import bni from "./bni.jpeg";
// import livingArea from "./living-area.jpeg";
// import kitchen from "./kitchen.jpeg";
// import commercialSpace from "./commercial-space.jpeg";
// import map from "./map.png";
import "./Dummy.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

const Dummy = () => {
  return (
    <>
    <Navbar />
    <div>Hello world</div>
    <div className="dummy-container">
      <div className="founder-container">
        <Heading as="h1" size="xl" textDecoration="underline">
          Meet our Founder
        </Heading>
        <Box className="card">
          <Image src={founder} alt="Founder" borderRadius="md" />
          <Stack spacing={4} mt={6}>
            <Heading as="h2" size="lg">
              Ankit Agarwal
            </Heading>
            <Divider />
            <Text>
              Ankit Agarwal is the passionate founder and lead designer of
              Narayani Interiors, a renowned interior design firm. With over 10
              years of experience in the industry, Ankit has established himself
              as a visionary and creative force. Specializing in modern and
              minimalist designs, he brings a fresh and innovative approach to
              every project. His meticulous attention to detail and ability to
              transform spaces into stunning yet functional environments have
              earned him recognition and numerous industry accolades.
            </Text>
          </Stack>
        </Box>
      </div>

      <div className="organization-container">
        <Heading as="h1" size="xl" textDecoration="underline">
          Organization We are connected
        </Heading>
        <Box className="card">
          <Heading as="h2" size="lg">
            BNI RANCHI
          </Heading>
          <Divider />
          <Text>
            BNI is an organization that helps their members increase their
            business through a structured, positive, and professional
            "word-of-mouth" program that enables them to develop long-term,
            meaningful relationships with quality business professionals.
          </Text>
          <Image src={bni} alt="BNI" borderRadius="md" mt={4} />
        </Box>
      </div>

      <div className="services-container">
        <Heading as="h1" size="xl" textDecoration="underline">
          Area of Services
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          className="service-card-container"
        >
          <GridItem>
            <Box className="card">
              <Image src="https://res.cloudinary.com/dlcn4rghm/image/upload/v1685288241/Kitchen/fdosxlbkd8m07uj0z9hl.jpg" alt="Living Area" borderRadius="md" />
              <Stack spacing={4} mt={6}>
                <Heading as="h2" size="lg">
                  Living Area Designing
                </Heading>
                {/* <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450-$550
                </Text> */}
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Box className="card">
              <Image src="https://res.cloudinary.com/dlcn4rghm/image/upload/v1686478753/Room/modhml1gxua0111clnam.webp" alt="Modular Kitchen" borderRadius="md" />
              <Stack spacing={4} mt={6}>
                <Heading as="h2" size="lg">
                  Modular Kitchen Designing
                </Heading>
                {/* <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450-$550
                </Text> */}
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Box className="card">
              <Image
                src="http://localhost:3000/static/media/working-2.ad8982ef9a46c2181a14.jpg"
                alt="Commercial Space"
                borderRadius="md"
              />
              <Stack spacing={4} mt={6}>
                <Heading as="h2" size="lg">
                  Commercial Space Designing
                </Heading>
                {/* <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450-$550
                </Text> */}
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </div>

      <div className="map-container">
        <Heading as="h1" size="xl" textDecoration="underline">
          Map Location
        </Heading>
        {/* <Image src={map} alt="Map" borderRadius="md" className="map-image" /> */}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Dummy;
