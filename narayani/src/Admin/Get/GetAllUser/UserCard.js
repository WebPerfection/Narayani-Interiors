import React, { useEffect, useState } from "react";
import axios from "axios"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const UserCard = ({ user, updateUser, deleteUser }) => {
  const [totalAppointment,setTotalAppointment]=useState(0)

  useEffect(()=>{
       axios.get(`https://azure-hen-cap.cyclic.app/appointment/${user._id}`)
       .then((res)=>setTotalAppointment(res.data.length))
       .catch((err)=>console.log(err))
  },[])
  return (
    // <div key={user._id} className="wrapper">
    //     <div className="product-info" style={{ width: '100%' }}>
    //         <div className="product-text">
    //             <span>
    //                 <h3>Name:-</h3>
    //                 <p>{user.name}</p>
    //             </span>
    //             <span>
    //                 <h3>Email:-</h3>
    //                 <p>{user.email}</p>
    //             </span>
    //             <span>
    //                 <h3>Number:-</h3>
    //                 <p>{user.number}</p>
    //             </span>
    //             <span>
    //                 <h3>Last Visit:- </h3>
    //                 <p>{user.last_visit}</p>
    //             </span>
    //             <span>
    //                 <h3>Next Consult Date:- </h3>
    //                 <p>{user.next_consult_date}</p>
    //             </span>
    //             <span>
    //                 <h3>Consult Status:- </h3>
    //                 <p
    //                     style={{
    //                         color: user.consult_status ? 'green' : 'red',
    //                         fontWeight: 'bold',
    //                     }}
    //                 >
    //                     {user.consult_status ? 'Consulted' : 'Not Consulted'}
    //                 </p>
    //             </span>
    //             <span>
    //                 <h3>Consulter Name:- </h3>
    //                 <p>{user.consulter_name}</p>
    //             </span>
    //             <span>
    //                 <h3>Consult Feedback:- </h3>
    //                 <p>{user.consult_feedback}</p>
    //             </span>
    //         </div>
    //         <div className="product-price-btn">
    //             <button
    //                 type="button"
    //                 className="update-btn"
    //                 onClick={() => updateUser(user)}
    //             >
    //                 Update
    //             </button>
    //             <button
    //                 type="button"
    //                 className="delete-btn"
    //                 onClick={() => deleteUser(user._id)}
    //             >
    //                 Delete
    //             </button>
    //         </div>
    //     </div>
    // </div>
    <Card boxShadow="dark-lg" rounded="md" bg="white">
    <CardHeader
      display="flex"
      alignItems="baseline"
      justifyContent="space-between"
    >
      <Heading size="md">User Details</Heading>
      {/* <Box
        gap="2"
        display="flex"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Button onClick={onOpen} p={2} backgroundColor="#92d592" fontSize="10px">
          Edit
        </Button>
        <Button
          onClick={() => setIsDeleteAlertOpen(true)}
          p={2}
          backgroundColor="red"
          color="white"
          fontSize="10px"
        >
          Delete
        </Button>
      </Box> */}
    </CardHeader>

    <CardBody>
      <Box gap={2} display="flex" alignItems="baseline">
        <span>
          <strong style={{ marginRight: "10px" }}>Name:</strong> {user.name} 
        </span>
      </Box>
      {user.email?<Box gap={2} display="flex" alignItems="baseline">
        <span>
          <strong style={{ marginRight: "10px" }}>Email:</strong> {user.email}
        </span>
      </Box>:""}
      <Box gap={2} display="flex" alignItems="baseline">
        <span>
          <strong style={{ marginRight: "10px" }}>Mobile:</strong>{" "}
          {user.number}
        </span>
      </Box>
     
      <Box gap={2} display="flex" alignItems="baseline">
        <span>
          <strong style={{ marginRight: "10px" }}> Last Visit: </strong>{" "}
          {user.last_visit}
        </span>
      </Box>
      <Box gap={2} display="flex" alignItems="baseline">
        <span>
          <strong style={{ marginRight: "10px" }}> Total Appointment: </strong>{" "}
          {totalAppointment}
        </span>
      </Box>
      
      
    </CardBody>

    <CardFooter spacing={5} justifyContent="center">
      <Link to={`/admin/Users/`}>
      <Button color="black" backgroundColor="gold" fontSize="13px"
      _hover={{color:"orange",bg:'none'}}>
        View Details
      </Button>
      </Link>
      {/* <Link to={`/admin/userEvent/${User._id}`}>
        <Button color="white" backgroundColor="#803a00" fontSize="13px">
          View Events
        </Button>
      </Link> */}
    </CardFooter>
    </Card>
  );
};

export default UserCard;
