import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  useToast,
  Heading,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllusersCard({ User, updateClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [formData, setFormData] = useState({});
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [totalAppointmetn, setTotalAppointment] = useState(0);
  const [totalEvent, setTotalEvent] = useState(0);
  const [totalAstro, setTotalAstro] = useState(0);
  const toast = useToast();
  // const updateClick = () => {
  //   axios
  //     .patch(
  //       `https://testing-j8ci.onrender.com/users/`,
  //       { appointmentStatus }
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "DOB") {
      // Reformat the date value to "dd/mm/yyyy"
      const [year, month, day] = value.split("-");
      const formattedDate = `${day}/${month}/${year}`;
      //   console.log(value)
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: formattedDate,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  useEffect(() => {
    axios
      .get(`https://dull-lime-wombat-veil.cyclic.app/appointment/${User._id}`)
      .then((res) => setTotalAppointment(res.data.length))
      .catch((err) => console.log(err));

   
  }, []);

  const onDeleteConfirm = () => {
    setIsDeleteAlertOpen(false);
    // Perform delete logic here
    axios
      .delete(`https://testing-j8ci.onrender.com/users/${User._id}`)
      .then((res) => {
        console.log(res);
        toast({
          title: "User Deleted",
          description: "User deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        // Perform any necessary actions after successful deletion
      })
      .catch((err) => {
        toast({
          title: "Error",
          description:
            "An error occurred while submitting the form. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Card boxShadow="dark-lg" rounded="md" bg="white">
      <CardHeader
        display="flex"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Heading size="md">User Details</Heading>
       
      </CardHeader>

      <CardBody>
        <Box gap={2} display="flex" alignItems="baseline">
          <span>
            <strong style={{ marginRight: "10px" }}>Name:</strong> {User.name}
          </span>
        </Box>
        {User.email ? (
          <Box gap={2} display="flex" alignItems="baseline">
            <span>
              <strong style={{ marginRight: "10px" }}>Email:</strong>{" "}
              {User.email}
            </span>
          </Box>
        ) : (
          ""
        )}
        <Box gap={2} display="flex" alignItems="baseline">
          <span>
            <strong style={{ marginRight: "10px" }}>Mobile:</strong>{" "}
            {User.number}
          </span>
        </Box>

        <Box gap={2} display="flex" alignItems="baseline">
          <span>
            <strong style={{ marginRight: "10px" }}>
              {" "}
              Total Appointments:{" "}
            </strong>{" "}
            {totalAppointmetn}
          </span>
        </Box>
        
      </CardBody>

      <CardFooter spacing={5} justifyContent="center">
        <Link to={`/admin/appointment/${User._id}`}>
          <Button
            color="black"
            backgroundColor="gold"
            fontSize="13px"
            _hover={{ color: "orange", bg: "none" }}
          >
            View Details
          </Button>
        </Link>
        {/* <Link to={`/admin/userEvent/${User._id}`}>
          <Button color="white" backgroundColor="#803a00" fontSize="13px">
            View Events
          </Button>
        </Link> */}
      </CardFooter>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Users Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                ref={initialRef}
                onChange={handleInputChange}
                placeholder="Full Name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input
                type="text"
                ref={initialRef}
                onChange={handleInputChange}
                placeholder="Mobile Number"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => updateClick(formData, User._id)}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={finalRef}
        onClose={() => setIsDeleteAlertOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Confirmation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this user?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={finalRef}
                onClick={() => setIsDeleteAlertOpen(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDeleteConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Card>
  );
}

export default AllusersCard;
