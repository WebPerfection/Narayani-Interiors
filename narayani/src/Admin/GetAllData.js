import React, { useEffect, useState } from 'react';
import './GetAllData.css';
import AdminNav from './AdminNav/AdminNav';

function GetAllData() {
  const [databus, setDatabus] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:8080/getdata")
      .then((res) => res.json())
      .then((resu) => {
        console.log(resu);
        setDatabus(resu);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function updateItem(ele) {
    // Handle update logic here
  }

  function deleteItem(bId) {
    fetch(`http://localhost:8080/delete/${bId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const mess = `Item with ID ${bId} deleted successfully.`;
        console.log(`Item with ID ${bId} deleted successfully.`);
        getAll();
      })
      .catch((error) => {
        const mess = `Error while deleting Item with ID ${bId}: ${error}`;
        console.error(`Error while deleting Item with ID ${bId}: ${error}`);
        getAll();
      });
  }

  return (
    <>
    <AdminNav/>
      <div className='items'>
        {databus.length > 0 ? (
          databus.map((ele) => (
            <div key={ele._id} className="wrapper">
              <div className="product-img">
                <img src={ele.images[0]} alt="Product" />
              </div>
              <div className="product-info">
                <div className="product-text">
                  <span>
                    <h3>Title :</h3>
                    <p>{ele.title}</p>
                  </span>
                  <span>
                    <h3>Category :</h3>
                    <p>{ele.category}</p>
                  </span>
                  <span>
                    <h3>Description:</h3>
                    <span className='description' dangerouslySetInnerHTML={{ __html: ele.description }}></span>
                  </span>
                  <span>
                    <h3>Size :</h3>
                    <p>{`${ele.size._length}' X ${ele.size._width}'`}</p>
                  </span>
                  <span>
                    <h3>Added Date :</h3>
                    <p>{ele.date}</p>
                  </span>
                </div>
                <div className="product-price-btn">
                  <button
                    type="button"
                    className="update-btn"
                    onClick={() => updateItem(ele)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteItem(ele._id)}
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
    </>
  );
}

export default GetAllData;
