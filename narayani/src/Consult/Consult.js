import React, { useEffect, useState } from "react";
import {

  Box,
  Button,
  
  ChakraProvider,

  FormLabel,
 
  Input,

  Stack,
 
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useToast
} from "@chakra-ui/react";
import axios from "axios";

export default function Consult({ consult, consultClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const initialRef = React.useRef(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const toast = useToast();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    // Perform validation based on your requirements
    if (name === "name") {
      if (value.trim() === "") {
        newErrors[name] = "Name is required";
      } else {
        delete newErrors[name];
      }
    } else if (name === "number") {
      if (value.trim() === "") {
        newErrors[name] = "Number is required";
      } else {
        delete newErrors[name];
      }
    } else if (name === "email") {
      // You can use regular expressions to perform email validation
      // For example:
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (value.trim() === "") {
        newErrors[name] = "Email is required";
      } else if (!emailRegex.test(value)) {
        newErrors[name] = "Invalid email";
      } else {
        delete newErrors[name];
      }
    } else if (name === "address") {
      if (value.trim() === "") {
        newErrors[name] = "Address is required";
      } else {
        delete newErrors[name];
      }
    } else if (name === "message") {
      if (value.trim() === "") {
        newErrors[name] = "Message is required";
      } else {
        delete newErrors[name];
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors(newErrors);
  };

  useEffect(() => {
    if (consult) {
      onOpen();
    }
  }, [consult]);

  const handleSubmit = () => {
    // Perform final validation before submitting
    let newErrors = { ...errors };
    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!formData.number || formData.number.trim() === "") {
      newErrors.number = "Number is required";
    }
    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (!formData.address || formData.address.trim() === "") {
      newErrors.address = "Address is required";
    }
    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Submit the form only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      // Here, you can use the formData object as the payload
      // to send it to your backend or perform any necessary actions
      axios
        .post(`https://azure-hen-cap.cyclic.app/appointment/`, formData)
        .then((res) => {
          onClose();
          setFormData({});
          consultClick();
          toast({
            title: "Consultation Booked",
            description: "Your consultation has been successfully booked.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: "An error occurred while booking the consultation.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <ChakraProvider>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={() => {
          onClose();
          consultClick();
        }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Book Consult Form
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="10px">
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  name="name"
                  ref={initialRef}
                  placeholder="Enter Your name"
                  onChange={handleInputChange}
                  value={formData.name}
                  isInvalid={errors.name}
                />
                {errors.name && (
                  <Box color="red" fontSize="sm">
                    {errors.name}
                  </Box>
                )}
              </Box>

              <Box>
                <FormLabel htmlFor="userphone">Number</FormLabel>
                <Input
                  name="number"
                  placeholder="Enter Your Number"
                  onChange={handleInputChange}
                  value={formData.number}
                  isInvalid={errors.number}
                />
                {errors.number && (
                  <Box color="red" fontSize="sm">
                    {errors.number}
                  </Box>
                )}
              </Box>

              <Box>
                <FormLabel htmlFor="userphone">Email</FormLabel>
                <Input
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={handleInputChange}
                  value={formData.email}
                  isInvalid={errors.email}
                />
                {errors.email && (
                  <Box color="red" fontSize="sm">
                    {errors.email}
                  </Box>
                )}
              </Box>

              <Box>
                <FormLabel htmlFor="useraddress">Address</FormLabel>
                <Input
                  name="address"
                  placeholder="Enter Your Address"
                  onChange={handleInputChange}
                  value={formData.address}
                  isInvalid={errors.address}
                />
                {errors.address && (
                  <Box color="red" fontSize="sm">
                    {errors.address}
                  </Box>
                )}
              </Box>

              <Box>
                <FormLabel htmlFor="usermessage">Message</FormLabel>
                <Input
                  name="message"
                  placeholder="Write Your Message"
                  onChange={handleInputChange}
                  value={formData.message}
                  isInvalid={errors.message}
                />
                {errors.message && (
                  <Box color="red" fontSize="sm">
                    {errors.message}
                  </Box>
                )}
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                consultClick();
              }}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
}
