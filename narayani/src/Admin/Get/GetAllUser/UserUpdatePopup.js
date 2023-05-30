import React from 'react';

const UserUpdatePopup = ({
    cancelUpdate,
    handleUpdateFormSubmit,
    name,
    setName,
    email,
    setEmail,
    number,
    setNumber,
    nextConsultDate,
    setNextConsultDate,
    consultStatus,
    setConsultStatus,
    consulterName,
    setConsulterName,
    consultFeedback,
    setConsultFeedback,
    isLoading
}) => {
    return (
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
                                    Updating...
                                </>
                            ) : (
                                'Update'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserUpdatePopup;
