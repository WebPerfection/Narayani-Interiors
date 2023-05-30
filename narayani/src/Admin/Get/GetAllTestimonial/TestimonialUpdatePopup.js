import React from 'react';

const TestimonialUpdatePopup = ({
    cancelUpdate,
    handleUpdateFormSubmit,
    name,
    setName,
    message,
    setMessage,
    handleImageChange,
    isLoading
}) => {
    return (
        <div className="popup">
            <div className="formparent">
                <div className="popup-inner">
                    <button className="close-btn" onClick={cancelUpdate}>
                        Close
                    </button>
                    <h2>Update Testimonial</h2>
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
                        <br />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <br />
                        <label htmlFor="image">Image:</label>
                        <input type="file" onChange={handleImageChange} />
                        <br />
                        <button type="submit" className="btn3" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <span className="loading-icon">
                                        <div className="spinner"></div>
                                    </span>
                                    Uploading...
                                </>
                            ) : (
                                'Upload'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TestimonialUpdatePopup;
