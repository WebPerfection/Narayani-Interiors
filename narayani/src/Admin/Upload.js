import React, { useState } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import './Admin.css';

const UploadForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const imageUrls = [];

        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('file', images[i]);
            formData.append('upload_preset', 'klsr1tbt');

            try {
                const response = await axios.post('https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload', formData);
                imageUrls.push(response.data.secure_url);
            } catch (error) {
                console.error('Image upload failed:', error);
            }
        }

        const payload = {
            title,
            images: imageUrls,
            description,
            size: {
                _length: Number(length),
                _width: Number(width)
            },
            category
        };

        try {
            const response = await axios.post('http://localhost:8080/upload', payload);
            if (response.status === 200) {
                console.log('Response:', response.data);
                setUploadStatus('Bus Added Successfully');
                // Reset the form after successful upload
                setTitle('');
                setDescription('');
                setCategory('');
                setImages([]);
                setLength(0);
                setWidth(0);
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Upload request failed:', error);
        }
    };
    return (
        <div className="k">
            <span style={{ display: 'none' }}>{uploadStatus}</span>
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="description">Description:</label>
                <Editor
                    apiKey="dohoxd2snnst9ajke5u08lqsn12uoj8repac5k01cqg6h8tn" // Replace with your own TinyMCE API key
                    id="description"
                    name="description"
                    value={description}
                    onEditorChange={(content) => setDescription(content)}
                />
                <br />
                <label htmlFor="length">Length:</label>
                <input
                    type="number"
                    step="any"
                    id="length"
                    name="length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="width">Width:</label>
                <input
                    type="number"
                    step="any"
                    id="width"
                    name="width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="images">Images:</label>
                <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    onChange={(e) => setImages(e.target.files)}
                    required
                />
                <br />
                <input type="submit" value="Upload" className="btn3" />
            </form>
        </div>
    );
};

export default UploadForm;
