import React, { useEffect, useState } from 'react';
import './GetAllAchievement.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function GetAllAchievement({ check }) {
    const [achievements, setAchievement] = useState([]);
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [heading, setHeading] = useState('');
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllAchievement();
    }, [check]);

    function getAllAchievement() {
        axios
            .get('https://dull-lime-wombat-veil.cyclic.app/achievement')
            .then((response) => {
                console.log(response.data);
                setAchievement(response.data);
            })
            .catch((error) => {
                console.error('Error fetching achievement:', error);
            });
    }

    function updateAchievement(achievement) {
        setSelectedAchievement(achievement);
        setHeading(achievement.heading);
        setText(achievement.text);
    }

    function cancelUpdate() {
        setSelectedAchievement(null);
        setHeading('');
        setText('');
    }

    const handleImgChange = (event) => {
        const selectedImg = event.target.files[0];
        setImg(selectedImg);
    };

    const handleUpdateFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const achievementId = selectedAchievement._id;

        let imgUrl = selectedAchievement.img;

        if (img) {
            const formData = new FormData();
            formData.append('file', img);
            formData.append('upload_preset', 'klsr1tbt');
            formData.append('folder', 'achievement');

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dlcn4rghm/image/upload',
                    formData
                );
                imgUrl = response.data.secure_url;
                console.log('Image uploaded to Cloudinary:', imgUrl);
            } catch (error) {
                console.error('Image upload failed:', error);
                setIsLoading(false); // Set isLoading to false in case of an error
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Image upload failed.',
                });
                return;
            }
        }

        const updatedAchievement = {
            heading,
            img: imgUrl,
            text,
        };

        axios
            .patch(
                `https://dull-lime-wombat-veil.cyclic.app/achievement/${achievementId}`,
                updatedAchievement
            )
            .then((response) => {
                console.log(`Achievement with ID ${achievementId} updated successfully.`);
                cancelUpdate();
                getAllAchievement();
                setIsLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Achievement updated successfully.',
                    timer: 2000,
                    showConfirmButton: false,
                });
            })
            .catch((error) => {
                console.error(`Error while updating achievement with ID ${achievementId}:`, error);
                cancelUpdate();
                getAllAchievement();
                setIsLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error updating achievement.',
                });
            });
    };

    function deleteAchievement(achievementId) {
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
                fetch(`https://dull-lime-wombat-veil.cyclic.app/achievement/${achievementId}`, {
                    method: 'DELETE',
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        console.log(`Achievement with ID ${achievementId} deleted successfully.`);
                        getAllAchievement();
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Achievement deleted successfully.',
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    })
                    .catch((error) => {
                        console.error(`Error while deleting achievement with ID ${achievementId}:`, error);
                        getAllAchievement();
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error deleting achievement.',
                        });
                    });
            }
        });
    }

    return (
        <>
            <div className="testimonials">
                {achievements.length > 0 ? (
                    achievements.map((achievement) => (
                        <div key={achievement._id} className="testimonial-wrapper">
                            <div className="testimonial-img">
                                <img src={achievement.img} alt="Testimonial" />
                            </div>
                            <div className="testimonial-info">
                                <div className="testimonial-text">
                                    <span>
                                        <h3>heading:</h3>
                                        <p>{achievement.heading}</p>
                                    </span>
                                    <span>
                                        <h3>text:</h3>
                                        <p>{achievement.text}</p>
                                    </span>
                                </div>
                                <div className="testimonial-actions">
                                    <button
                                        type="button"
                                        className="update-btn"
                                        onClick={() => updateAchievement(achievement)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="delete-btn"
                                        onClick={() => deleteAchievement(achievement._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No achievement available.</p>
                )}
            </div>

            {selectedAchievement && (
                <div className="popup">
                    <div className="formparent">
                        <div className="popup-inner">
                            <button className="close-btn" onClick={cancelUpdate}>
                                Close
                            </button>
                            <h2>Update achievement</h2>
                            <form onSubmit={handleUpdateFormSubmit}>
                                <label htmlFor="name">heading:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                    required
                                />
                                <br />
                                <label htmlFor="text">Text:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    required
                                ></textarea>
                                <br />
                                <label htmlFor="image">img:</label>
                                <input type="file" onChange={handleImgChange} accept="image/*" />
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
                    </div>
                </div>
            )}
        </>
    );
}

export default GetAllAchievement;
