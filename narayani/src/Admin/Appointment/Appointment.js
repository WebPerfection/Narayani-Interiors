import React, { useEffect, useState } from "react";
import {
  // Button,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Grid,
  GridItem,
  Image,
  Select,
  Flex,
} from "@chakra-ui/react";
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  ChakraProvider,
  Button,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminNav from "../AdminNav/AdminNav";
export default function Appointment() {
  const navigate=useNavigate()
 
  const {
    isOpen: isOpenModal2,
    onOpen: onOpenModal2,
    onClose: onCloseModal2,
  } = useDisclosure();
 
  const {
    isOpen: isOpenEditEvent1,
    onOpen: onOpenEditEvent1,
    onClose: onCloseEditEvent1,
  } = useDisclosure();
 
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { id } = useParams();
  const [eventData, setEventData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({});
  const [update, setUpdate] = useState(false);
  const [isDeleteAlertOpenEvent, setIsDeleteAlertOpenEvent] = useState(false)
  const [subEvent,setSubEvent]=useState("")
  const handleInputChange =async (e) => {
    const { name, value } = e.target;
    
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    
    
  };
 
  const handleSubmitEvent = () => {
    axios
      .patch(
        `https://azure-hen-cap.cyclic.app/appointment/${selectedEvent._id}`,
        formData
      )
      .then((res) => {
        setUpdate(!update);
        onCloseEditEvent1();
        setFormData({});
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
    .get(
      `https://azure-hen-cap.cyclic.app/appointment/${id}`
    )
    .then((res) => setSubEvent(res.data))
    .catch((err) => console.log(err));
  
    axios
      .get(`https://azure-hen-cap.cyclic.app/users/${id}`)
      .then((res) => setEventData(res.data))
      .catch((err) => console.log(err));
  }, [update]);
 
  const onDeleteConfirmEvent = () => {
    axios
      .delete(
        `https://azure-hen-cap.cyclic.app/appointment/${selectedEvent._id}`
      )
      .then((res) => {
        setUpdate(!update);
        setIsDeleteAlertOpenEvent(false)
        // Perform any necessary actions after successful deletion
      })
      .catch((err) => console.log(err));
  }
 
  const openEventModal = (event, model) => {
    setSelectedEvent(event);
    onOpenModal2();
  };
 
  const openEditEvent = (event) => {
    setSelectedEvent(event);
    onOpenEditEvent1();
  };
  const filteredData =
    eventData &&
    Object.fromEntries(
      Object.entries(eventData[0]).filter(
        ([key]) => key !== "__v" && key !== "_id"
      )
    );
   
  return (
    <ChakraProvider>
      <AdminNav />
      <Card>
      <CardHeader display="flex" justifyContent="space-between">
          <Heading size="xl">Client Report</Heading>
          <Box
          gap="2"
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }} 
        //   onClick={openUser} 
          p={2} backgroundColor="#92d592" fontSize="10px">
            Edit
          </Button>
          <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }}
            // onClick={() => setIsDeleteUserOpen(true)}
            p={2}
            backgroundColor="red"
            color="white"
            fontSize="10px"
          >
            Delete
          </Button>
        </Box>
        </CardHeader>


        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
           

          <Box>
              <Heading
                size="md"
                textTransform="uppercase"
                textAlign="center"
                p={10}
              >
                Client Details
              </Heading>
             <Box display="flex" flexWrap="wrap">
             <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    {Object.entries(filteredData).map(([key, value]) => (
                      <Tr key={key}>
                        <Th>{key}</Th>
                        <Td>{value}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

             </Box>
            </Box>

            <Box>
              <Heading
                size="md"
                textTransform="uppercase"
                textAlign="center"
                p={10}
              >
                Completed Events
              </Heading>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Full Name</Th>
                      <Th>Event Name</Th>
                      <Th>Event Date</Th>
                      <Th>Payment</Th>
                      <Th>View Details</Th>
                      <Th>Edit</Th>
                      <Th>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {eventData &&
                      eventData.map((el) => {
                        if (el.eventStatus == "Completed") {
                          return (
                            <Tr>
                              <Td>{`${el.fname} ${el.lname ? el.lname : ""
                                }`}</Td>
                              <Th>{el.eventName}</Th>
                              <Td>{el.eventDate}</Td>
                              <Td color={el.paymentStatus ? "green" : "red"}>
                                {el.paymentStatus ? "Paid" : "Not Paid"}
                              </Td>
                              <Td>
                                <Button
                                  onClick={() => {
                                    openEventModal(el);
                                  }}
                                  bg="orange"
                                >
                                  View
                                </Button>
                              </Td>
                              <Td>
                                <Button onClick={() => {
                                  openEditEvent(el);
                                }} bg="yellow">Edit</Button>
                              </Td>
                              <Th>
                                <Button onClick={() => {
                                  setSelectedEvent(el);
                                  setIsDeleteAlertOpenEvent(true);
                                }} bg="red">Delete</Button>
                              </Th>
                            </Tr>
                          );
                        }
                      })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </CardBody>
      </Card>
     
      {/* // Events Details */}
      {selectedEvent && (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenModal2}
          onClose={onCloseModal2}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              style={{
                backgroundColor: "brown",
                color: "white",
                textAlign: "center",
              }}
            >
              Event Details
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr", sm: "1fr" }}
                gap={4}
              >
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Full Name</FormLabel>
                  <Box>{`${selectedEvent.fname} ${selectedEvent.lname ? selectedEvent.lname : ""
                    }`}</Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Email</FormLabel>
                  <Box
                    name="fname"
                    ref={initialRef}
                    placeholder="First name"
                  // onChange={handleInputChange}
                  // value={formData.fname}
                  >
                    {selectedEvent.email}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Mobile number</FormLabel>
                  <Box
                    name="fname"
                    ref={initialRef}
                    placeholder="First name"
                  // onChange={handleInputChange}
                  // value={formData.fname}
                  >
                    {selectedEvent.phone}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Date</FormLabel>
                  <Box
                    name="fname"
                    ref={initialRef}
                    placeholder="First name"
                  // onChange={handleInputChange}
                  // value={formData.fname}
                  >
                    {selectedEvent.eventDate}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Full address</FormLabel>
                  <Box
                    name="fname"
                    ref={initialRef}
                    placeholder="First name"
                  // onChange={handleInputChange}
                  // value={formData.fname}
                  >{`${selectedEvent.address}, ${selectedEvent.pincode}`}</Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Event Status</FormLabel>
                  <Box
                    name="fname"
                    ref={initialRef}
                    placeholder="First name"
                  // onChange={handleInputChange}
                  // value={formData.fname}
                  >
                    {selectedEvent.eventStatus}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Message</FormLabel>
                  <Box
                    name="fname"
                    ref={initialRef}
                    placeholder="First name"
                  // onChange={handleInputChange}
                  // value={formData.fname}
                  >
                    {selectedEvent.message}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Author Message</FormLabel>
                  <Box
                    name="fname"
                    ref={initialRef}
                    placeholder="First name"
                  // onChange={handleInputChange}
                  // value={formData.fname}
                  >
                    {selectedEvent.authorMessage}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                <FormLabel>Event Image</FormLabel>
                  <Image src={selectedEvent.image?selectedEvent.image:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} />
                </FormControl>
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
     
      {/* Edit Event */}
      {selectedEvent && (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenEditEvent1}
          onClose={onCloseEditEvent1}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              style={{
                background: "linear-gradient(315deg, #f5d020 0%, #f53803 74%)",
                color: "white",
                textAlign: "center",
                borderRadius: '5px 5px 0 0'
              }}
            >
              Edit Event
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr", sm: "1fr" }}
                gap={4}
              >
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>First name</FormLabel>
                  <Input
                    name="fname"
                    ref={initialRef}
                    placeholder={selectedEvent.fname}
                    onChange={handleInputChange}
                    value={formData.fname}
                  />
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    name="lname"
                    placeholder={selectedEvent.lname}
                    onChange={handleInputChange}
                    value={formData.lname}
                  />
                </FormControl>



                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    name="eventDate"
                    placeholder={selectedEvent.eventDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().slice(0, 10)}

                  />
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Full address</FormLabel>
                  <Input
                    name="address"
                    placeholder={selectedEvent.address}
                    onChange={handleInputChange}
                    value={formData.address}
                  />
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Pin code</FormLabel>
                  <Input
                    name="pincode"
                    placeholder={selectedEvent.pincode}
                    onChange={handleInputChange}
                    value={formData.pincode}
                  />
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Author Message</FormLabel>
                  <Input
                    placeholder="Author Message"
                    name="authorMessage"
                    onChange={handleInputChange}
                    value={formData.authorMessage}
                  />
                </FormControl>
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Event Status</FormLabel>
                  <Select
                    name="eventStatus"
                    value={formData.eventStatus || selectedEvent.eventStatus}
                    onChange={handleInputChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </Select>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Payment</FormLabel>
                  <Select
                    name="paymentStatus"
                    value={formData.paymentStatus || selectedEvent.paymentStatus}
                    onChange={handleInputChange}
                    defaultValue={selectedEvent.paymentStatus ? "paid" : "notPaid"}

                  >
                    <option value={false}>Not Paid</option>
                    <option value={true}>Paid</option>
                  </Select>
                  
                </FormControl>
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Upload Image</FormLabel>
                  {/* <Input
                  type="file"
                    placeholder="Image"
                    name="image"
                    onChange={handleInputChange}
                  /> */}
                  <Input
                        type="file"
                        id="imageMobile"
                        name="image"
                        accept="image/*"
                        onChange={ handleInputChange}
                        required
                    />
                </FormControl>
              </Grid>
            </ModalBody>

            <ModalFooter>
              <Button
                color="white"
                gb="brown"
                mr={3}
                onClick={() => handleSubmitEvent()}
                backgroundColor="gold"
              >
                Save
              </Button>
              <Button onClick={onCloseModal2}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
{/* Edit User */}



     


      <AlertDialog
        isOpen={isDeleteAlertOpenEvent}
        leastDestructiveRef={finalRef}
        onClose={() => setIsDeleteAlertOpenEvent(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Confirmation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this Event?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={finalRef}
                onClick={() => setIsDeleteAlertOpenEvent(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDeleteConfirmEvent} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ChakraProvider>
  );
}