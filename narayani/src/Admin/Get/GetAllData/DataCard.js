import React from 'react';

const DataCard = ({ item, updateItem, deleteItem }) => {
    return (
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
    );
};

export default DataCard;
