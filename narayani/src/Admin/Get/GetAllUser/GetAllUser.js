import React, { useEffect, useState } from 'react';
import './GetAllUser.css';
import AdminNav from '../../AdminNav/AdminNav';
import Swal from 'sweetalert2';
import UserUpdatePopup from './UserUpdatePopup';
import UserCard from './UserCard';

function GetAllUser() {
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [lastVisit, setLastVisit] = useState('');
    const [nextConsultDate, setNextConsultDate] = useState('Not Updated');
    const [consultStatus, setConsultStatus] = useState(false);
    const [consulterName, setConsulterName] = useState('Not Consulted');
    const [consultFeedback, setConsultFeedback] = useState('Not Consulted');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllUsers();
    }, []);

    function getAllUsers() {
        fetch('https://azure-hen-cap.cyclic.app/users')
            .then((res) => res.json())
            .then((resu) => {
                console.log(resu);
                setUserList(resu);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    function updateUser(user) {
        setSelectedUser(user);
        setName(user.name);
        setEmail(user.email);
        setNumber(user.number);
        setLastVisit(user.last_visit);
        setNextConsultDate(user.next_consult_date);
        setConsultStatus(user.consult_status);
        setConsulterName(user.consulter_name);
        setConsultFeedback(user.consult_feedback);
    }

    function cancelUpdate() {
        setSelectedUser(null);
        setName('');
        setEmail('');
        setNumber('');
        setLastVisit('');
        setNextConsultDate('Not Updated');
        setConsultStatus(false);
        setConsulterName('Not Consulted');
        setConsultFeedback('Not Consulted');
    }

    const handleUpdateFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const userId = selectedUser._id;

        // Check if the Next Consult Date is in the past
        const currentDate = new Date();
        const selectedDate = new Date(nextConsultDate);
        if (selectedDate < currentDate) {
            // Display an error message or prevent form submission
            console.error('Next Consult Date cannot be in the past.');
            setIsLoading(false);
            return;
        }

        const updatedUser = {
            name,
            email,
            number,
            next_consult_date: nextConsultDate,
            consult_status: consultStatus,
            consulter_name: consulterName,
            consult_feedback: consultFeedback,
        };

        // Send the updated user data to the API
        fetch(`https://azure-hen-cap.cyclic.app/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log(`User with ID ${userId} updated successfully.`);
                cancelUpdate();
                getAllUsers();
                setIsLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'User updated successfully.',
                    timer: 2000,
                    showConfirmButton: false,
                });
            })
            .catch((error) => {
                console.error(`Error while updating User with ID ${userId}:`, error);
                cancelUpdate();
                getAllUsers();
                setIsLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error updating User.',
                });
            });
    };

    function deleteUser(userId) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff1403',
            cancelButtonColor: '#6fe273',
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://azure-hen-cap.cyclic.app/users/${userId}`, {
                    method: 'DELETE',
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        console.log(`User with ID ${userId} deleted successfully.`);
                        getAllUsers();
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'User deleted successfully.',
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    })
                    .catch((error) => {
                        console.error(`Error while deleting User with ID ${userId}:`, error);
                        getAllUsers();
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error deleting User.',
                        });
                    });
            }
        });
    }

    return (
        <>
            <AdminNav />
            <div className="items">
                {userList.length > 0 ? (
                    userList.map((user) => (
                        <UserCard
                            key={user._id}
                            user={user}
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                        />
                    ))
                ) : (
                    <p>No data available.</p>
                )}
            </div>

            {selectedUser && (
                <UserUpdatePopup
                    cancelUpdate={cancelUpdate}
                    handleUpdateFormSubmit={handleUpdateFormSubmit}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    number={number}
                    setNumber={setNumber}
                    nextConsultDate={nextConsultDate}
                    setNextConsultDate={setNextConsultDate}
                    consultStatus={consultStatus}
                    setConsultStatus={setConsultStatus}
                    consulterName={consulterName}
                    setConsulterName={setConsulterName}
                    consultFeedback={consultFeedback}
                    setConsultFeedback={setConsultFeedback}
                    isLoading={isLoading}
                />
            )}
        </>
    );
}

export default GetAllUser;
