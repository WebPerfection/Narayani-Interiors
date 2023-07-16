import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const DataUpdatePopup = ({
    cancelUpdate,
    handleUpdateFormSubmit,
    title,
    setTitle,
    category,
    setCategory,
    description,
    setDescription,
    _length,
    setLength,
    _width,
    setWidth,
    handleImageChange,
    isLoading
}) => {
    return (
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
                            // required
                        />
                        <br />
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            // required
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
    );
};

export default DataUpdatePopup;
