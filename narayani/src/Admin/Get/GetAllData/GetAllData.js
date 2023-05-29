import React, { useEffect, useState } from 'react';
import './GetAllData.css';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import AdminNav from '../../AdminNav/AdminNav';
import Swal from 'sweetalert2';



function GetAllData() {
  const [databus, setDatabus] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [_length, setLength] = useState('');
  const [_width, setWidth] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch('https://azure-hen-cap.cyclic.app/data')
      .then((res) => res.json())
      .then((resu) => {
        console.log(resu);
        setDatabus(resu.uploads);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function updateItem(item) {
    setSelectedItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setDescription(item.description);
    setLength(item.size._length);
    setWidth(item.size._width);
  }

  function cancelUpdate() {
    setSelectedItem(null);
    setTitle('');
    setCategory('');
    setDescription('');
    setLength('');
    setWidth('');
  }
  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);
  };


  // ...

  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const itemId = selectedItem._id;

    const imageUrls = [];

    if (images.length > 0) {
      // If there are selected images, upload them to Cloudinary
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
        } catch (error) {
          console.error('Image upload failed:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Image upload failed',
          });
          setIsLoading(false);
          return;
        }
      }
    }

    // Include previous image links when new images are selected
    if (images.length === 0) {
      imageUrls.push(...selectedItem.images);
    }

    const updatedItem = {
      title,
      category,
      description,
      size: {
        _length,
        _width,
      },
      images: imageUrls, // Update the images array with the new Cloudinary URLs or previous image links
    };

    // Send the updated item data to the API
    axios
      .patch(`https://azure-hen-cap.cyclic.app/data/${itemId}`, updatedItem)
      .then((response) => {
        if (response.status === 200) {
          console.log(`Item with ID ${itemId} updated successfully.`);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Upload Successful',
            timer: 2000,
            showConfirmButton: false,
          });
          cancelUpdate();
          getAll();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error(`Error while updating Item with ID ${itemId}:`, error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Upload Failed',
        });
        cancelUpdate();
        getAll();
      })
      .finally(() => {
        setIsLoading(false); // Stop the loading state
      });
  };

  // ...


  function deleteItem(itemId) {
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
        fetch(`https://azure-hen-cap.cyclic.app/data/${itemId}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(`Item with ID ${itemId} deleted successfully.`);
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Deleting successfully',
            });
            getAll();
          })
          .catch((error) => {
            console.error(`Error while deleting Item with ID ${itemId}:`, error);
            getAll();
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Deleting Failed',
            });
          });
      }
    });
  }

  return (
    <>
      <AdminNav />
      <div className="items">
        {databus.length > 0 ? (
          databus.map((item) => (
            <div key={item._id} className="wrapper">
              <div className="product-img">
                <img src={item.images[0]} alt="Product" />
              </div>
              <div className="product-info">
                <div className="product-text">
                  <span>
                    <h3>Title:</h3>
                    <p>{item.title}</p>
                  </span>
                  <span>
                    <h3>Category:</h3>
                    <p>{item.category}</p>
                  </span>
                  <span>
                    <h3>Description:</h3>
                    <span
                      className="description"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></span>
                  </span>
                  <span>
                    <h3>Size:</h3>
                    <p>{`${item.size._length}' X ${item.size._width}'`}</p>
                  </span>
                  <span>
                    <h3>Added Date:</h3>
                    <p>{item.date}</p>
                  </span>
                </div>
                <div className="product-price-btn">
                  <button
                    type="button"
                    className="update-btn"
                    onClick={() => updateItem(item)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>

      {selectedItem && (
        <div className="popup">
          <div className='formparent'>
            <div className="popup-inner">
              <button className="close-btn" onClick={cancelUpdate}>
                Close
              </button>
              <h2>Update Item</h2>
              <form onSubmit={handleUpdateFormSubmit}>
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
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Room">Room</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Balkani">Balkani</option>
                  <option value="Shop">Shop</option>
                </select>
                <br />
                <label htmlFor="description">Description:</label>
                <Editor
                  apiKey="dohoxd2snnst9ajke5u08lqsn12uoj8repac5k01cqg6h8tn"
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
                  value={_length}
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
                  value={_width}
                  onChange={(e) => setWidth(e.target.value)}
                  required
                />
                <br />
                <input type="file" multiple onChange={handleImageChange} />
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
          </div>
        </div>
      )}
    </>
  );
}

export default GetAllData;
