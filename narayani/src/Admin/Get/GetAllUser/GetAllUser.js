import React, { useEffect, useState } from 'react';
import './GetAllUser.css';
import AdminNav from '../../AdminNav/AdminNav';
import Swal from 'sweetalert2';

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
                        <div key={user._id} className="wrapper">
                            <div className="product-info" style={{ width: '100%' }}>
                                <div className="product-text">
                                    <span>
                                        <h3>Name:-</h3>
                                        <p>{user.name}</p>
                                    </span>
                                    <span>
                                        <h3>Email:-</h3>
                                        <p>{user.email}</p>
                                    </span>
                                    <span>
                                        <h3>Number:-</h3>
                                        <p>{user.number}</p>
                                    </span>
                                    <span>
                                        <h3>Last Visit:- </h3>
                                        <p>{user.last_visit}</p>
                                    </span>
                                    <span>
                                        <h3>Next Consult Date:- </h3>
                                        <p>{user.next_consult_date}</p>
                                    </span>
                                    <span>
                                        <h3>Consult Status:- </h3>
                                        <p
                                            style={{
                                                color: user.consult_status ? 'green' : 'red',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {user.consult_status ? 'Consulted' : 'Not Consulted'}
                                        </p>
                                    </span>
                                    <span>
                                        <h3>Consulter Name:- </h3>
                                        <p>{user.consulter_name}</p>
                                    </span>
                                    <span>
                                        <h3>Consult Feedback:- </h3>
                                        <p>{user.consult_feedback}</p>
                                    </span>
                                </div>
                                <div className="product-price-btn">
                                    <button
                                        type="button"
                                        className="update-btn"
                                        onClick={() => updateUser(user)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="delete-btn"
                                        onClick={() => deleteUser(user._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No data available.</p>
                )}
            </div>

            {selectedUser && (
                <div className="popup">
                    <div className="formparent">
                        <div className="popup-inner">
                            <button className="close-btn" onClick={cancelUpdate}>
                                Close
                            </button>
                            <h2>Update User</h2>
                            <form onSubmit={handleUpdateFormSubmit}>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="number">Number:</label>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    required
                                />
                                <label htmlFor="nextConsultDate">Next Consult Date:</label>
                                <input
                                    type="date"
                                    id="nextConsultDate"
                                    name="nextConsultDate"
                                    value={nextConsultDate}
                                    min={new Date().toISOString().split('T')[0]}
                                    onChange={(e) => setNextConsultDate(e.target.value)}
                                />
                                <label htmlFor="consultStatus">Consult Status:</label>
                                <select
                                    id="consultStatus"
                                    name="consultStatus"
                                    value={consultStatus}
                                    onChange={(e) => setConsultStatus(e.target.value === 'true')}
                                    required
                                >
                                    <option value={false}>Not Consulted</option>
                                    <option value={true}>Consulted</option>
                                </select>
                                <label htmlFor="consulterName">Consulter Name:</label>
                                <input
                                    type="text"
                                    id="consulterName"
                                    name="consulterName"
                                    value={consulterName}
                                    onChange={(e) => setConsulterName(e.target.value)}
                                    required={consultStatus}
                                    disabled={!consultStatus}
                                />
                                <label htmlFor="consultFeedback">Consult Feedback:</label>
                                <textarea
                                    id="consultFeedback"
                                    name="consultFeedback"
                                    value={consultFeedback}
                                    onChange={(e) => setConsultFeedback(e.target.value)}
                                    required={consultStatus}
                                    disabled={!consultStatus}
                                ></textarea>
                                <button type="submit" className="btn3" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <span className="loading-icon">
                                                <div className="spinner"></div>
                                            </span>
                                            updating...
                                        </>
                                    ) : (
                                        'Update'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default GetAllUser;
