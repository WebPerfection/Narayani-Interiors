import React, { useState } from 'react';
import axios from 'axios';
import './AddTestimonial.css';
import AdminNav from '../../AdminNav/AdminNav.js';
import GetAllTestimonial from '../../Get/GetAllTestimonial/GetAllTestimonial';

const AddTestimonial = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [next, setNext] = useState("")

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

        let imageUrl = null;

        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'klsr1tbt');
            formData.append('folder', `testimonials`);

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formData
                );
                imageUrl = response.data.secure_url;
                console.log('Image uploaded to Cloudinary:', imageUrl);
            } catch (error) {
                console.error('Image upload failed:', error);
            }
        }

        const payload = {
            name,
            image: imageUrl,
            message,
        };

        try {
            const response = await axios.post('https://azure-hen-cap.cyclic.app/testimonial', payload);
            if (response.status === 200) {
                console.log('Response:', response.data);
                setUploadStatus('Added Successfully');
                // Reset the form after successful upload
                setName('');
                setMessage('');
                setImage(null);
                setNext(imageUrl)
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Upload request failed:', error);
            // Delete the uploaded image from Cloudinary if the upload request failed
            if (imageUrl) {
                await deleteImageFromCloudinary(imageUrl);
            }
        }
    };

    return (
        <>
            <AdminNav />
            <div className="UploadCarousel">
                <span style={{ display: 'none' }}>{uploadStatus}</span>
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
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
                    />
                    <br />
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                    <br />
                    <input type="submit" value="Upload" className="btn3" />
                </form>
            </div>
            <GetAllTestimonial cheak={next} />
        </>
    );
};

export default AddTestimonial;
