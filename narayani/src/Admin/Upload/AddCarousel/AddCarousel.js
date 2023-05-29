import React, { useState, useRef } from 'react';
import axios from 'axios';
import './AddCarousel.css';
import Swal from 'sweetalert2';
import '../../AdminNav/AdminNav.js';
import AdminNav from '../../AdminNav/AdminNav.js';

const AddCarousel = () => {
    const [heading, setHeading] = useState('');
    const [text, setText] = useState('');
    const [imageMobile, setImageMobile] = useState(null);
    const [imagePC, setImagePC] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);

    const deleteImageFromCloudinary = async (imageUrl) => {
        try {
            await axios.delete(`https://api.cloudinary.com/v1_1/dlcn4rghm/image/delete_by_token`, {
                params: {
                    token: imageUrl.split('/').pop().split('.')[0],
                    api_key: '696786133473455',
                    api_secret: 'oeAH-v-AtAKKauLa38ueTdilgcA',
                },
            });
            console.log('Image deleted from Cloudinary');
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };
    const resetForm = () => {
        setHeading('');
        setText('');
        setImageMobile(null);
        setImagePC(null);
        formRef.current.reset();
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        let imageUrlMobile = null;
        let imageUrlPC = null;

        if (imageMobile) {
            const formDataMobile = new FormData();
            formDataMobile.append('file', imageMobile);
            formDataMobile.append('upload_preset', 'klsr1tbt');
            formDataMobile.append('folder', `mobile-carousel`);

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formDataMobile
                );
                imageUrlMobile = response.data.secure_url;
                console.log('Mobile Image uploaded to Cloudinary:', imageUrlMobile);
            } catch (error) {
                console.error('Mobile Image upload failed:', error);
                setIsLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Mobile Image upload failed',
                    timer: 2000,
                    showConfirmButton: false,
                });
                return; // Stop further processing if image upload fails
            }
        }

        // Similarly, handle PC image upload failure
        if (imagePC) {
            const formDataPC = new FormData();
            formDataPC.append('file', imagePC);
            formDataPC.append('upload_preset', 'klsr1tbt');
            formDataPC.append('folder', `pc-carousel`);

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formDataPC
                );
                imageUrlPC = response.data.secure_url;
                console.log('PC Image uploaded to Cloudinary:', imageUrlPC);
            } catch (error) {
                console.error('PC Image upload failed:', error);
                setIsLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'PC Image upload failed',
                    timer: 2000,
                    showConfirmButton: false,
                });
                return; // Stop further processing if image upload fails
            }
        }

        const payload = {
            imgMobile: imageUrlMobile,
            imgPc: imageUrlPC,
            text,
            heading,
        };

        try {
            await axios.post('https://azure-hen-cap.cyclic.app/carousel', payload).then((res) => {
                console.log('Response:', res.data);
                // setUploadStatus('Added Successfully');
                // Reset the form after successful upload
                resetForm();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Upload Successful',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setIsLoading(false);
            }).catch((error) => {
                console.error('Upload failed', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Upload Failed',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setIsLoading(false);
            });
        } catch (error) {
            console.error('Upload request failed:', error);
            // Delete the uploaded images from Cloudinary if the upload request failed
            if (imageUrlMobile) {
                await deleteImageFromCloudinary(imageUrlMobile);
            }
            if (imageUrlPC) {
                await deleteImageFromCloudinary(imageUrlPC);
            }
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Upload Request Failed',
                timer: 2000,
                showConfirmButton: false,
            });
        }

        setIsLoading(false);
    };

    return (
        <>
            <AdminNav />
            <div className="UploadCarousel">
                <form  ref={formRef}  onSubmit={handleFormSubmit} encType="multipart/form-data">
                    <label htmlFor="heading">Heading:</label>
                    <input
                        type="text"
                        id="heading"
                        name="heading"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="text">Text:</label>
                    <textarea
                        id="text"
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="imageMobile">Mobile Image:</label>
                    <input
                        type="file"
                        id="imageMobile"
                        name="imageMobile"
                        accept="image/*"
                        onChange={(e) => setImageMobile(e.target.files[0])}
                        required
                    />
                    <br />
                    <label htmlFor="imagePC">PC Image:</label>
                    <input
                        type="file"
                        id="imagePC"
                        name="imagePC"
                        accept="image/*"
                        onChange={(e) => setImagePC(e.target.files[0])}
                        required
                    />
                    <br />
                    <button
                        type="submit"
                        className="btn3"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="loading-icon">
                                    {/* Add your custom spinner component here */}
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
        </>
    );
};

export default AddCarousel;
