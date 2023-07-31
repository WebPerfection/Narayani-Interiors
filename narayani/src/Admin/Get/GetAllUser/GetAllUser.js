import React, { useEffect, useState } from "react";
import { SimpleGrid, ChakraProvider, Button } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";
import { IconButton, HStack, VStack, Box } from "@chakra-ui/react";
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";
import AdminNav from "../../AdminNav/AdminNav";
import UserCard from "./UserCard";
import AllusersCard from "./UserCard";
import { useDispatch } from "react-redux";
import { toggelModel } from "../../../Redux/Action";
import { useNavigate } from "react-router-dom";
function Allusers() {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(8);
  const [totalusers, setTotalUsers] = useState(0);
  const [update, setUpdate] = useState(false);
const navigate=useNavigate()
 
  const openModel = () => {
    dispatch(toggelModel());
    
  };
  useEffect(() => {
    axios
      .get(`https://dull-lime-wombat-veil.cyclic.app/users/`)
      .then((res) => setTotalUsers(res.data.length))
      .catch((err) => console.log(err));
  }, [update]);
  useEffect(() => {
    axios
      .get(`https://dull-lime-wombat-veil.cyclic.app/users/?query=${search}`)
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }, [update, search]);

  // Get current appointments based on pagination
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < Math.ceil(appointments.length / appointmentsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const updateClick = (appointmentStatus, id) => {
    axios
      .patch(`https://dull-lime-wombat-veil.cyclic.app/users/${id}`, {
        name: appointmentStatus,
      })
      .then((res) => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  if(!localStorage.getItem("adminAuthenticate")){
    return navigate("/")
}
 
  return (
    <ChakraProvider>
      <AdminNav />
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" marginTop="100px">
        <Box
          borderBottom="1px solid black"
          width="fit-content"
          minWidth="100px"
          margin="auto"
          marginTop="20px"
          display="flex"
          alignItems="center"
        >
          <input
            onChange={(e) => setSearch(e.target.value)}
            style={{
              height: "100%",
              border: "none",
              width: "100%",
              borderColor: "transparent",
              outline: "none",
              fontSize: "20px",
              marginLeft: "10px",
            }}
            placeholder="Search"
            type="search"
          />
          <IconButton
            aria-label="Search database"
            bg="none"
            icon={<BsSearch />}
          />
        </Box>
        <Box marginTop="20px" marginRight="10px" paddingLeft="10px" display="flex" alignItems="center" justifyContent="center">
          <Box gap={2} display="flex" alignItems="baseline">
            <span>
              <strong style={{ marginRight: "10px" }}> Total Users: </strong>{" "}
              {totalusers}
            </span>
          </Box>
          <Box>
            <Button onClick={()=>{
                openModel()
                setUpdate(!update)
            }}>Add User</Button>
          </Box>
        </Box>
      </Box>

      <SimpleGrid
        p="3"
        spacing={4}
        gap={5}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {currentAppointments.map((apt) => (
          <AllusersCard key={apt._id} User={apt} updateClick={updateClick} />
        ))}
      </SimpleGrid>
      <VStack mt="4" spacing="2">
        <HStack>
          <Button
            onClick={goToPreviousPage}
            isDisabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          {Array.from(
            { length: Math.ceil(appointments.length / appointmentsPerPage) },
            (_, index) => (
              <Button
                key={index}
                onClick={() => paginate(index + 1)}
                variant={currentPage === index + 1 ? "solid" : "outline"}
              >
                {index + 1}
              </Button>
            )
          )}
          <Button
            onClick={goToNextPage}
            isDisabled={
              currentPage ===
              Math.ceil(appointments.length / appointmentsPerPage)
            }
            variant="outline"
          >
            Next
          </Button>
        </HStack>
      </VStack>
      <br></br>
    </ChakraProvider>
  );
}

export default Allusers;
