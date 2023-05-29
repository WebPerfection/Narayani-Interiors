
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';
import AdminNav from '../../AdminNav/AdminNav';
import './Upload.css';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [uploadStatus, setUploadStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const deleteImagesFromCloudinary = async (imageUrls) => {
    try {
      const deleteRequests = imageUrls.map((imageUrl) =>
        axios.delete(`https://api.cloudinary.com/v1_1/dlcn4rghm/image/delete_by_token`, {
          params: {
            token: imageUrl.split('/').pop().split('.')[0],
            api_key: '696786133473455',
            api_secret: 'oeAH-v-AtAKKauLa38ueTdilgcA',
          },
        })
      );

      await Promise.all(deleteRequests);
      console.log('Images deleted from Cloudinary');
    } catch (error) {
      console.error('Error deleting images:', error);
    }
  };
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setImages([]);
    setLength("");
    setWidth("");
    formRef.current.reset();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const imageUrls = [];

    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.append('file', images[i]);
      formData.append('upload_preset', 'klsr1tbt');
      formData.append('folder', category);

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
          formData
        );
        imageUrls.push(response.data.secure_url);
        console.log('Upload to Cloudinary:', response.data.secure_url);
      } catch (error) {
        console.error('Image upload failed:', error);
        await deleteImagesFromCloudinary(imageUrls);
        setIsLoading(false);
        return;
      }
    }
    const payload = {
      title,
      images: imageUrls,
      description,
      size: {
        _length: Number(length),
        _width: Number(width),
      },
      category,
    };

    try {
      const response = await axios.post('https://azure-hen-cap.cyclic.app/data', payload)
        .then(res => {
          console.log('Response:', res.data);
          resetForm();
          setIsLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Upload Successful',
            timer: 2000,
            showConfirmButton: false,
          });
        })
        .catch(error => {
          console.error('Upload failed');
          setIsLoading(false);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Upload Failed',
          });
        });
    } catch (error) {
      console.error('Upload request failed:', error);
      await deleteImagesFromCloudinary(imageUrls);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Upload Failed',
      });
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  return (
    <>
      <AdminNav />
      <div className="Upload">
        <span style={{ display: 'none' }}>{uploadStatus}</span>
        <form ref={formRef} onSubmit={handleFormSubmit} encType="multipart/form-data">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <br />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <br />
          <label htmlFor="description">Description:</label>
          <Editor
            apiKey="dohoxd2snnst9ajke5u08lqsn12uoj8repac5k01cqg6h8tn" // TinyMCE API key
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
            placeholder="Length"
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
            placeholder="Width"
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


export default Upload;
