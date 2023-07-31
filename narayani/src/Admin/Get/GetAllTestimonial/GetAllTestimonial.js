import React, { useEffect, useState } from 'react';
import './GetAllTestimonial.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import TestimonialUpdatePopup from './TestimonialUpdatePopup';
import TestimonialCard from './TestimonialCard';
import { useNavigate } from 'react-router-dom';

function GetAllTestimonial({ check }) {
    const [testimonials, setTestimonials] = useState([]);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate()
    useEffect(() => {
        getAllTestimonials();
    }, [check]);

    function getAllTestimonials() {
        axios
            .get('https://dull-lime-wombat-veil.cyclic.app/testimonial')
            .then((response) => {
                console.log(response.data);
                setTestimonials(response.data);
            })
            .catch((error) => {
                console.error('Error fetching testimonials:', error);
            });
    }

    function updateTestimonial(testimonial) {
        setSelectedTestimonial(testimonial);
        setName(testimonial.name);
        setMessage(testimonial.message);
    }

    function cancelUpdate() {
        setSelectedTestimonial(null);
        setName('');
        setMessage('');
    }

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleUpdateFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const testimonialId = selectedTestimonial._id;

        let imageUrl = selectedTestimonial.image;

        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'klsr1tbt');
            formData.append('folder', 'testimonials');

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formData
                );
                imageUrl = response.data.secure_url;
                console.log('Image uploaded to Cloudinary:', imageUrl);
            } catch (error) {
                console.error('Image upload failed:', error);
                setIsLoading(false); // Set isLoading to false in case of an error
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Image upload failed.',
                });
                return;
            }
        }

        const updatedTestimonial = {
            name,
            image: imageUrl,
            message,
        };

        axios
            .patch(
                `https://dull-lime-wombat-veil.cyclic.app/testimonial/${testimonialId}`,
                updatedTestimonial
            )
            .then((response) => {
                console.log(`Testimonial with ID ${testimonialId} updated successfully.`);
                cancelUpdate();
                getAllTestimonials();
                setIsLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Testimonial updated successfully.',
                    timer: 2000,
                    showConfirmButton: false,
                });
            })
            .catch((error) => {
                console.error(`Error while updating testimonial with ID ${testimonialId}:`, error);
                cancelUpdate();
                getAllTestimonials();
                setIsLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error updating testimonial.',
                });
            });
    };

    function deleteTestimonial(testimonialId) {
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
                fetch(`https://dull-lime-wombat-veil.cyclic.app/testimonial/${testimonialId}`, {
                    method: 'DELETE',
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        console.log(`Testimonial with ID ${testimonialId} deleted successfully.`);
                        getAllTestimonials();
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Testimonial deleted successfully.',
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    })
                    .catch((error) => {
                        console.error(`Error while deleting testimonial with ID ${testimonialId}:`, error);
                        getAllTestimonials();
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error deleting testimonial.',
                        });
                    });
            }
        });
    }
    if(!localStorage.getItem("adminAuthenticate")){
        return navigate("/")
    }
    return (
        <>
            <div className="testimonials">
                {testimonials.length > 0 ? (
                    testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial._id}
                            testimonial={testimonial}
                            updateTestimonial={updateTestimonial}
                            deleteTestimonial={deleteTestimonial}
                        />
                    ))
                ) : (
                    <p>No testimonials available.</p>
                )}
            </div>

            {selectedTestimonial && (
                <TestimonialUpdatePopup
                    cancelUpdate={cancelUpdate}
                    handleUpdateFormSubmit={handleUpdateFormSubmit}
                    name={name}
                    setName={setName}
                    message={message}
                    setMessage={setMessage}
                    handleImageChange={handleImageChange}
                    isLoading={isLoading}
                />
            )}
        </>

    );
}

export default GetAllTestimonial;
