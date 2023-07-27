import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import axios from "axios";
import './Testimonial.css'

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://azure-hen-cap.cyclic.app/testimonial")
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex = 0;
  const maxIndex = reviews.length - 1;

  const getRandomPerson = () => {
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    };

    let randomIndex = getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  if (reviews.length === 0) {
    return <div>Loading...</div>;
  }

  const { id, name, job, image, text } = reviews[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandomPerson}>
        Get Random Review
      </button>
    </article>
  );
};

export default Review;
