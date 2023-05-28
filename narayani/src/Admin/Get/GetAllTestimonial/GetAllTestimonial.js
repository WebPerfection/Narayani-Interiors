import React, { useEffect, useState } from 'react';
import './GetAllTestimonial.css';
import axios from 'axios';
import AdminNav from '../../AdminNav/AdminNav';

function GetAllTestimonial({cheak}) {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  useEffect(() => {
    getAllTestimonials();
  }, [cheak]);
console.log(cheak)
  function getAllTestimonials() {
    axios
      .get('https://azure-hen-cap.cyclic.app/testimonial/get')
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
      }
    }
  
    const updatedTestimonial = {
      name,
      image: imageUrl,
      message,
    };
  
    axios
      .patch(
        `https://azure-hen-cap.cyclic.app/testimonial/upload/${testimonialId}`,
        updatedTestimonial
      )
      .then((response) => {
        console.log(`Testimonial with ID ${testimonialId} updated successfully.`);
        cancelUpdate();
        getAllTestimonials();
      })
      .catch((error) => {
        console.error(`Error while updating testimonial with ID ${testimonialId}:`, error);
        cancelUpdate();
        getAllTestimonials();
      });
  };

  function deleteTestimonial(testimonialId) {
    axios
      .delete(`https://azure-hen-cap.cyclic.app/testimonial/delete/${testimonialId}`)
      .then((response) => {
        console.log(`Testimonial with ID ${testimonialId} deleted successfully.`);
        getAllTestimonials();
      })
      .catch((error) => {
        console.error(`Error while deleting testimonial with ID ${testimonialId}:`, error);
        getAllTestimonials();
      });
  }

  return (
    <>
      <AdminNav />
      <div className="testimonials">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
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
          ))
        ) : (
          <p>No testimonials available.</p>
        )}
      </div>

      {selectedTestimonial && (
        <div className="popup">
          <div className="form-parent">
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
                <button type="submit">Update</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GetAllTestimonial;
