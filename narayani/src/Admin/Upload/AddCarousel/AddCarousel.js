import React, { useState } from 'react';
import axios from 'axios';
import './AddCarousel.css';
import '../../AdminNav/AdminNav.js';
import AdminNav from '../../AdminNav/AdminNav.js';


const AdddCarousel = () => {
    const [heading, setHeading] = useState('');
    const [text, setText] = useState('');
    const [imageMobile, setImageMobile] = useState(null);
    const [imagePC, setImagePC] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

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

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        let imageUrlMobile = null;
        let imageUrlPC = null;
        // Unique timestamp to create dynamic folder names

        if (imageMobile) {
            const formDataMobile = new FormData();
            formDataMobile.append('file', imageMobile);
            formDataMobile.append('upload_preset', 'klsr1tbt');
            formDataMobile.append('folder', `mobile-carousel`); // Folder path for mobile images

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formDataMobile
                );
                imageUrlMobile = response.data.secure_url;
                console.log("Mobile Image uploaded to Cloudinary:", imageUrlMobile);
            } catch (error) {
                console.error('Mobile Image upload failed:', error);
            }
        }

        if (imagePC) {
            const formDataPC = new FormData();
            formDataPC.append('file', imagePC);
            formDataPC.append('upload_preset', 'klsr1tbt');
            formDataPC.append('folder', `pc-carousel`); // Folder path for PC images

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formDataPC
                );
                imageUrlPC = response.data.secure_url;
                console.log("PC Image uploaded to Cloudinary:", imageUrlPC);
            } catch (error) {
                console.error('PC Image upload failed:', error);
            }
        }

        const payload = {
            imgMobile: imageUrlMobile,
            imgPC: imageUrlPC,
            text,
            heading,
        };

        try {
            const response = await axios.post('https://azure-hen-cap.cyclic.app/upload-carousel', payload);
            if (response.status === 200) {
                console.log('Response:', response.data);
                setUploadStatus('Added Successfully');
                // Reset the form after successful upload
                setHeading('');
                setText('');
                setImageMobile(null);
                setImagePC(null);
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Upload request failed:', error);
            // Delete the uploaded images from Cloudinary if the upload request failed
            if (imageUrlMobile) {
                await deleteImageFromCloudinary(imageUrlMobile);
            }
            if (imageUrlPC) {
                await deleteImageFromCloudinary(imageUrlPC);
            }
        }
    };

    return (
        <>
            <AdminNav />
            <div className="UploadCarousel">
                <span style={{ display: 'none' }}>{uploadStatus}</span>
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
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
                    <input type="submit" value="Upload" className="btn3" />
                </form>
            </div>
        </>
    );
};

export default AdddCarousel;
