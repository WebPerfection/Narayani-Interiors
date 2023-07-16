import React, { useEffect, useState } from 'react';
import './GetAllData.css';
import axios from 'axios';
import AdminNav from '../../AdminNav/AdminNav';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import DataUpdatePopup from './DataUpdatePopup';
import DataCard from './DataCard';



function GetAllData() {
  const [databus, setDatabus] = useState([]);  // State for storing data
  const [selectedItem, setSelectedItem] = useState(null);  // State for managing the selected item
  const [title, setTitle] = useState('');  // State for title
  const [category, setCategory] = useState('');  // State for category
  const [description, setDescription] = useState('');  // State for description
  const [_length, setLength] = useState('');  // State for length
  const [_width, setWidth] = useState('');  // State for width
  const [images, setImages] = useState([]);  // State for images
  const [isLoading, setIsLoading] = useState(false);  // State for loading indicator
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total pages

  useEffect(() => {
    getAll();
  }, [currentPage]);

  function getAll() {
    // Fetch data from API and update the state
    const apiUrl = `https://azure-hen-cap.cyclic.app/sub`;
    axios
      .get(apiUrl)
      .then((res) => {
        setDatabus(res.data);
      })
      .catch((err) => console.log(err));
  }

  
  function updateItem(item) {
    // Update the state with selected item's data
    setSelectedItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setDescription(item.description);
    setLength(item.size._length);
    setWidth(item.size._width);
  }

  function cancelUpdate() {
    // Clear the state values for update form
    setSelectedItem(null);
    setTitle('');
    setCategory('');
    setDescription('');
    setLength('');
    setWidth('');
  }
  const handleImageChange = (event) => {
    // Handle image selection and update the state with selected images
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);
  };


  // ...

  const handleUpdateFormSubmit = async (e) => {
    // Handle the form submission for updating item
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
      .patch(`https://azure-hen-cap.cyclic.app/sub/${itemId}`, updatedItem)
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
    // Confirm deletion and send delete request to the API
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
        fetch(`https://azure-hen-cap.cyclic.app/sub/${itemId}`, {
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
              timer: 1500,
              showConfirmButton: false,
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
  // Pagination handler
  const handlePageChange = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <AdminNav />
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"}} className='items' >
        {databus.length > 0 ? (
          databus.map((item) => (
            <DataCard
              key={item._id}
              item={item}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
      <div style={{ paddingBottom: '50px' }}>
        {totalPages > 1 && (
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={totalPages}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        )}
      </div>

      {/* //Popup form for update the data */}
      {selectedItem && (
        <DataUpdatePopup
          cancelUpdate={cancelUpdate}
          handleUpdateFormSubmit={handleUpdateFormSubmit}
          title={title}
          setTitle={setTitle}
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
          _length={_length}
          setLength={setLength}
          _width={_width}
          setWidth={setWidth}
          handleImageChange={handleImageChange}
          isLoading={isLoading}
        />
      )}
    </>

  );
}

export default GetAllData;
