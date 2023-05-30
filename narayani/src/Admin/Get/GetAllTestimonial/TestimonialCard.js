import React from 'react';

const TestimonialCard = ({ testimonial, updateTestimonial, deleteTestimonial }) => {
    return (
        <div key={testimonial._id} className="testimonial-wrapper">
            <div className="testimonial-img">
                <img src={testimonial.image} alt="Testimonial" />
            </div>
            <div className="testimonial-info">
                <div className="testimonial-text">
                    <span>
                        <h3>Name:</h3>
                        <p>{testimonial.name}</p>
                    </span>
                    <span>
                        <h3>Message:</h3>
                        <p>{testimonial.message}</p>
                    </span>
                </div>
                <div className="testimonial-actions">
                    <button
                        type="button"
                        className="update-btn"
                        onClick={() => updateTestimonial(testimonial)}
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="delete-btn"
                        onClick={() => deleteTestimonial(testimonial._id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
