import React, { useEffect, useState } from 'react';
import './GetAllData.css';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import AdminNav from '../../AdminNav/AdminNav';


function GetAllData() {
  const [databus, setDatabus] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [_length, setLength] = useState('');
  const [_width, setWidth] = useState('');
  const [images, setImages] = useState([]);


  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch('https://azure-hen-cap.cyclic.app/getdata')
      .then((res) => res.json())
      .then((resu) => {
        console.log(resu);
        setDatabus(resu);
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


  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
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
        }
      }
    } else {
      // If no images are selected, assign the previous image links
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
    fetch(`https://azure-hen-cap.cyclic.app/update/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`Item with ID ${itemId} updated successfully.`);
        cancelUpdate();
        getAll();
      })
      .catch((error) => {
        console.error(`Error while updating Item with ID ${itemId}:`, error);
        cancelUpdate();
        getAll();
      });
  }

  function deleteItem(itemId) {
    fetch(`http://localhost:5000/delete/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`Item with ID ${itemId} deleted successfully.`);
        getAll();
      })
      .catch((error) => {
        console.error(`Error while deleting Item with ID ${itemId}:`, error);
        getAll();
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
                <button type="submit">Update</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GetAllData;
