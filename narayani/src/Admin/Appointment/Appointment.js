import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav/AdminNav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
    AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  ChakraProvider,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import "./Appointment.css";

export default function Appointment() {
  const { id } = useParams();
  const [userData, setUserData] = useState("");
  const [appointmentData, setAppointmentData] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const initialRef = React.useRef(null);
  const [formData, setFormData] = useState({});
  const [update,setUpdate]=useState(false)
  const finalRef = React.useRef(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false);
  const navigate=useNavigate()
  const handleInputChange =async (e) => {
    const { name, value } = e.target;
    // if(name==="image"){
    //   let imageD=e.target.files[0]
    //   let imageUrl = '';
    //     try {
    //       const imageData = new FormData();
    //       imageData.append('file', imageD);
    //       imageData.append('upload_preset', 'tekxwxfz'); // Replace with your Cloudinary unsigned upload preset
    //       console.log(imageData,value)
    //       const response = await axios.post(
    //         `https://api.cloudinary.com/v1_1/dzidj8k7j/auto/upload`,
    //         imageData
    //       );
    //       imageUrl = response.data.secure_url;
    //       console.log("url",imageUrl)
    //       setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: imageUrl,
    //       }));
    //     } catch (error) {
    //       console.error(error);
    //       return;
    //     }
    // }
     if(name=="next_consult_date"){
      const [year, month, day] = value.split("-");
      const formattedDate = `${day}/${month}/${year}`;
 
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: formattedDate,
      }));
    }

    else if(name=="consult_status"){
     
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value=="false"?false:true,
      }));
    }
    else{
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    
  };
  const hendelUserData=()=>{
    axios
    .patch(
      `https://azure-hen-cap.cyclic.app/users/${selectedEvent._id}`,
      formData
    )
    .then((res) => {
      setUpdate(!update);
      onCloseUser();
      setFormData({});
    })
    .catch((err) => console.log(err));
  }
  const handleSubmit = () => {
    console.log(formData);
    // Here, you can use the formData object as the payload
    // to send it to your backend or perform any necessary actions
    axios
      .patch(
        `https://azure-hen-cap.cyclic.app/appointment/${selectedEvent._id}`,
        formData
      )
      .then((res) => {
        setUpdate(!update);
        onCloseEditApoi1();
        setFormData({});
      })
      .catch((err) => console.log(err));
  };

  const openUser=()=>{
    setSelectedEvent(userData[0]);
    onOpenUser();
  }
  const {
    isOpen: isOpenModal1,
    onOpen: onOpenModal1,
    onClose: onCloseModal1,
  } = useDisclosure();
  const {
    isOpen: isOpenEditApoi1,
    onOpen: onOpenEditApoi1,
    onClose: onCloseEditApoi1,
  } = useDisclosure();
  const {
    isOpen: isOpenUser,
    onOpen: onOpenUser,
    onClose: onCloseUser,
  } = useDisclosure();
  useEffect(() => {
    axios
      .get(`https://azure-hen-cap.cyclic.app/users/${id}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`https://azure-hen-cap.cyclic.app/appointment/${id}`)
      .then((res) => setAppointmentData(res.data))
      .catch((err) => console.log(err));
  }, [update]);
  const filteredData =
    userData &&
    Object.fromEntries(
      Object.entries(userData[0]).filter(
        ([key]) => key !== "__v" && key !== "_id"
      )
    );
    const openAppointmentModal = (event) => {
        setSelectedEvent(event);
        onOpenModal1();
      };
      const onOpenEditAppointment = (event) => {
        setSelectedEvent(event);
        onOpenEditApoi1();
      };


      const onDeleteConfirmUser=()=>{
        axios
        .delete(
          `https://azure-hen-cap.cyclic.app/users/${userData[0]._id}`
        )
        .then((res) => {
          setUpdate(!update);
          setIsDeleteUserOpen(false)
          navigate("/admin/users")
          // Perform any necessary actions after successful deletion
        })
        .catch((err) => console.log(err));
      }

      const onDeleteConfirm = () => {
        setIsDeleteAlertOpen(false);
        // Perform delete logic here
        axios
          .delete(
            `https://azure-hen-cap.cyclic.app/appointment/${selectedEvent._id}`
          )
          .then((res) => {
            setUpdate(!update);
            // Perform any necessary actions after successful deletion
          })
          .catch((err) => console.log(err));
      };
  return (
    <>
      <AdminNav />
      <ChakraProvider>
        <div className="item" style={{ marginTop: "90px" }}>
          <Card>
            <CardHeader display="flex" justifyContent="space-between">
              <Heading size="xl">Client Report</Heading>
              <Box
                gap="2"
                display="flex"
                alignItems="baseline"
                justifyContent="space-between"
              >
                <Button
                  _hover={{
                    color: "orange",
                    bg: "transparent",
                  }}
                    onClick={openUser}
                  p={2}
                  backgroundColor="#92d592"
                  fontSize="10px"
                >
                  Edit
                </Button>
                <Button
                  _hover={{
                    color: "orange",
                    bg: "transparent",
                  }}
                  onClick={() => setIsDeleteUserOpen(true)}
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
                              <Th>
                                {key}
                              </Th>
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
                    Pending Appointments
                  </Heading>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Full Name</Th>
                          <Th>Email ID</Th>
                          <Th>Appointment Date</Th>
                          <Th>View Details</Th>
                          <Th>Edit</Th>
                          <Th>Delete</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {appointmentData &&
                          appointmentData.map((el) => {
                            if (!el.consult_status) {
                              return (
                                <Tr>
                                  <Td>{`${el.name}`}</Td>
                                  <Td>{el.email}</Td>
                                  <Td>{el.next_consult_date}</Td>
                                  <Td>
                                    <Button
                                      _hover={{
                                        color: "orange",
                                        bg: "transparent",
                                      }}
                                        onClick={() => {
                                          openAppointmentModal(el);
                                        }}
                                      bg="orange"
                                    >
                                      View
                                    </Button>
                                  </Td>
                                  <Td
                                    Button
                                    onClick={() => {
                                      onOpenEditAppointment(el);
                                    }}
                                  >
                                    <Button
                                      _hover={{
                                        color: "orange",
                                        bg: "transparent",
                                      }}
                                      bg="yellow"
                                    >
                                      Edit
                                    </Button>
                                  </Td>
                                  <Th>
                                    <Button
                                      _hover={{
                                        color: "orange",
                                        bg: "transparent",
                                      }}
                                        onClick={() => {
                                          setSelectedEvent(el);
                                          setIsDeleteAlertOpen(true);
                                        }}
                                      bg="red"
                                    >
                                      Delete
                                    </Button>
                                  </Th>
                                </Tr>
                              );
                            }
                          })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>


                <Box>
                  <Heading
                    size="md"
                    textTransform="uppercase"
                    textAlign="center"
                    p={10}
                  >
                    Completed Appointments
                  </Heading>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Full Name</Th>
                          <Th>Email ID</Th>
                          <Th>Appointment Date</Th>
                          <Th>View Details</Th>
                          <Th>Edit</Th>
                          <Th>Delete</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {appointmentData &&
                          appointmentData.map((el) => {
                            if (el.consult_status) {
                              return (
                                <Tr>
                                  <Td>{`${el.name}`}</Td>
                                  <Td>{el.email}</Td>
                                  <Td>{el.next_consult_date}</Td>
                                  <Td>
                                    <Button
                                      _hover={{
                                        color: "orange",
                                        bg: "transparent",
                                      }}
                                        onClick={() => {
                                          openAppointmentModal(el);
                                        }}
                                      bg="orange"
                                    >
                                      View
                                    </Button>
                                  </Td>
                                  <Td
                                    Button
                                    onClick={() => {
                                      onOpenEditAppointment(el);
                                    }}
                                  >
                                    <Button
                                      _hover={{
                                        color: "orange",
                                        bg: "transparent",
                                      }}
                                      bg="yellow"
                                    >
                                      Edit
                                    </Button>
                                  </Td>
                                  <Th>
                                    <Button
                                      _hover={{
                                        color: "orange",
                                        bg: "transparent",
                                      }}
                                        onClick={() => {
                                          setSelectedEvent(el);
                                          setIsDeleteAlertOpen(true);
                                        }}
                                      bg="red"
                                    >
                                      Delete
                                    </Button>
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
        </div>
   {/* User Edit */}
        {selectedEvent && (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenUser}
          onClose={onCloseUser}
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
              Edit User
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr", sm: "1fr" }}
                gap={4}
              >
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    ref={initialRef}
                    placeholder={selectedEvent.fname}
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                </FormControl>
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    name="number"
                    ref={initialRef}
                    type="tel"
                    placeholder={selectedEvent.fname}
                    onChange={handleInputChange}
                    value={formData.number}
                  />
                </FormControl>

                

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    placeholder={selectedEvent.email}
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </FormControl>


                
              </Grid>
            </ModalBody>

            <ModalFooter>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }}
                color="white"
                gb="brown"
                mr={3}
                onClick={() => hendelUserData()}
                backgroundColor="gold"
              >
                Save
              </Button>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }} onClick={onCloseUser}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

   {/* Appointment Details */}

   {selectedEvent && (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenModal1}
          onClose={onCloseModal1}
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
              Appointment Details
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr", sm: "1fr" }}
                gap={4}
              >
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Name</FormLabel>
                  <Box>{`${selectedEvent.name} `}</Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Email</FormLabel>
                  <Box
                   
                  >
                    {selectedEvent.email}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Mobile number</FormLabel>
                  <Box
                   
                  >
                    {selectedEvent.number}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Consult Date</FormLabel>
                  <Box
                    
                  >
                    {selectedEvent.next_consult_date}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Full address</FormLabel>
                  <Box
       
                  >{`${selectedEvent.address}`}</Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Consult Status</FormLabel>
                  <Box
                   
                  >
                    {selectedEvent.consult_status?"Completed":"Pending"}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Message</FormLabel>
                  <Box
                    
                  >
                    {selectedEvent.message}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Consulter Name</FormLabel>
                  <Box
                    
                  >
                    {selectedEvent.consulter_name}
                  </Box>
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Consult Feedback</FormLabel>
                  <Box
                    
                  >
                    {selectedEvent.consult_feedback}
                  </Box>
                </FormControl>
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Last Visit</FormLabel>
                  <Box
                    
                  >
                    {selectedEvent.last_visit}
                  </Box>
                </FormControl>
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}

      {/* Appointment Edit */}


      {selectedEvent && (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenEditApoi1}
          onClose={onCloseEditApoi1}
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
              Edit Appointment
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr", sm: "1fr" }}
                gap={4}
              >
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    ref={initialRef}
                    placeholder={selectedEvent.name}
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    name="number"
                    placeholder={selectedEvent.number}
                    onChange={handleInputChange}
                    value={formData.number}
                  />
                </FormControl>
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    placeholder={selectedEvent.email}
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </FormControl>



                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Consult Date</FormLabel>
                  <Input
                    type="date"
                    name="next_consult_date"
                    placeholder={selectedEvent.next_consult_date}
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
                  <FormLabel>Consulter Name</FormLabel>
                  <Input
                    name="consulter_name"
                    placeholder={selectedEvent.consulter_name}
                    onChange={handleInputChange}
                    value={formData.consulter_name}
                  />
                </FormControl>

                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Consult Feedback</FormLabel>
                  <Input
                    placeholder="Author Message"
                    name="consult_feedback"
                    onChange={handleInputChange}
                    value={formData.consult_feedback}
                  />
                </FormControl>
                <FormControl gridColumn={{ base: "1 / span 2", md: "auto" }}>
                  <FormLabel>Consul Status</FormLabel>
                  <Select
                    name="consult_status"
                    value={
                      formData.consult_status ||
                      selectedEvent.consult_status
                    }
                    onChange={handleInputChange}
                  >
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                  </Select>
                </FormControl>
              </Grid>
            </ModalBody>

            <ModalFooter>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }}
                color="white"
                gb="brown"
                mr={3}
                onClick={() => handleSubmit()}
                backgroundColor="gold"
              >
                Save
              </Button>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }} onClick={onCloseEditApoi1}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}


<AlertDialog
        isOpen={isDeleteUserOpen}
        leastDestructiveRef={finalRef}
        onClose={() => setIsDeleteUserOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Confirmation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this User?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }}
                ref={finalRef}
                onClick={() => setIsDeleteUserOpen(false)}
              >
                Cancel
              </Button>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }} colorScheme="red" onClick={onDeleteConfirmUser} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

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
              Are you sure you want to delete this appointment?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }}
                ref={finalRef}
                onClick={() => setIsDeleteAlertOpen(false)}
              >
                Cancel
              </Button>
              <Button   _hover={{

            color: "orange",
            bg:'transparent'
          }} colorScheme="red" onClick={onDeleteConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </ChakraProvider>
    </>
  );
}
