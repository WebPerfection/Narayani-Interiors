import React, { useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './AddAchievement.css';
import AdminNav from '../../AdminNav/AdminNav.js';
import GetAllAchievement from '../../Get/GetAllAchievement/GetAllAchievement';



const AddAchievement = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [next, setNext] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const MySwal = withReactContent(Swal);

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
    formRef.current.reset();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

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
        setIsLoading(false);
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Image upload failed.',
        });
        return;
      }
    }

    const payload = {
      img: imageUrl,
      text: message,
      heading: name,
    };

    try {
      await axios.post(
        'https://azure-hen-cap.cyclic.app/achievement',
        payload
      ).then(res => {
        console.log(res.response)
        console.log('Achievement created:');
        setUploadStatus('Added Successfully');
        setName('');
        setMessage('');
        setImage(null);
        setNext(imageUrl);
        setIsLoading(false);
        MySwal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Upload Successful',
          timer: 2000,
          showConfirmButton: false,
        });
        resetForm();
      })

    } catch (error) {
      console.error('Error creating achievement:', error);
      if (imageUrl) {
        await deleteImageFromCloudinary(imageUrl);
      }
      setIsLoading(false);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Upload Failed',
      });
    }
  };

  return (
    <>
      <AdminNav />
      <div className="UploadCarousel">
        <span style={{ display: 'none' }}>{uploadStatus}</span>
        <form ref={formRef} onSubmit={handleFormSubmit} encType="multipart/form-data">
          <label htmlFor="name">Heading:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="message">Text:</label>
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
      <GetAllAchievement cheak={next} />
    </>
  );
};

export default AddAchievement;
