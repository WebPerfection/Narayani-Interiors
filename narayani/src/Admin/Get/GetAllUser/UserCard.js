import React from 'react';

const UserCard = ({ user, updateUser, deleteUser }) => {
    return (
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
    );
};

export default UserCard;
