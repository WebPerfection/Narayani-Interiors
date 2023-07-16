import React from "react";
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
} from "@chakra-ui/react";
const UserCard = ({ user, updateUser, deleteUser }) => {
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

    <Card textAlign="start" width="50%">
      <CardHeader textAlign="start">
        <Heading size="lg">Client Report</Heading>
      </CardHeader>

      <CardBody display="flex" flexWrap="wrap">
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="md" textTransform="uppercase">
              Client Details
            </Heading>
            <Text pt="2" fontSize="sl" fontWeight="600">
              Name: {user.name}
            </Text>
            <Text pt="2" fontSize="sl" fontWeight="600">
              Email: {user.email}
            </Text>
            <Text pt="2" fontSize="sl" fontWeight="600">
              Last Visit: {user.last_visit}
            </Text>
          </Box>
          <Box>
            <Heading size="md" textTransform="uppercase">
              Consult Details
            </Heading>
            <Text pt="2" fontSize="sl" fontWeight="600">
              Next Consult Date: {user.next_consult_date}
            </Text>
            <Text pt="2" fontSize="sl" fontWeight="600">
              Consult Status:{" "}
              <span
                style={{
                  color: user.consult_status ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {user.consult_status ? "Consulted" : "Not Consulted"}
              </span>
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Consulter Details
            </Heading>
            <Text pt='2' fontSize='sl' fontWeight="600">
            Consulter Name:  {user.consulter_name}
        </Text>
        <Text pt='2' fontSize='sl' fontWeight="600">
        Consult Feedback:  {user.consult_feedback}
        </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserCard;
