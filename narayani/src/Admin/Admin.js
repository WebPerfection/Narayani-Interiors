import React, { useState } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import './Admin.css';
const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [images, setImages] = useState([]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const imageUrls = [];

        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('file', images[i]);
            formData.append('upload_preset', 'klsr1tbt');

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formData
                );
                imageUrls.push(response.data.secure_url);
            } catch (error) {
                console.error('Image upload failed:', error);
            }
        }

        const payload = {
            title,
            images: imageUrls,
            description,
            date,
        };

        console.log(payload);

        try {
            const response = await axios.post('/upload', payload);
            if (response.status === 200) {
                console.log('Upload successful:', response.data);
                // Reset the form after successful upload
                setTitle('');
                setDescription('');
                setDate('');
                setImages([]);
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Upload request failed:', error);
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <form id="uploadForm" encType="multipart/form-data" onSubmit={handleFormSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <br />
                <label htmlFor="description">Description:</label>
                <Editor
                    id="description"
                    name="description"
                    value={description}
                    onEditorChange={(content) => setDescription(content)}
                    init={{
                        plugins: 'advlist autolink lists link image charmap print preview anchor',
                        toolbar: 'bold italic underline | bullist numlist | link image',
                        menubar: false
                    }}
                />
                <br />
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                />
                <br />
                <label htmlFor="images">Images:</label>
                <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    onChange={(event) => setImages([...event.target.files])}
                    required
                />
                <br />
                <input type="submit" value="Upload" />
            </form>
        </div>
    );
};

export default AdminPanel;
