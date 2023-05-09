import React, { useEffect } from 'react';
import './FloatingButtons.css'
import '../Footer/Footer.css'
import { FaPhoneAlt, FaWhatsapp, FaChevronUp } from "react-icons/fa";

function FloatingButtons() {
    useEffect(() => {
        const $scrollButton = document.querySelector(".floating-container");
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                $scrollButton.style.display = "block";
            } else {
                $scrollButton.style.display = "none";
            }
        }
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="floating-container">
            <div  className="floating-button">+</div>
            <div className="element-container">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <span className="float-element tooltip-left">
                        <FaPhoneAlt />
                    </span>
                </a>
                <span className="float-element">
                    <FaWhatsapp />
                </span>
                <span onClick={handleScrollTop} className="float-element">
                    <button  id="return-to-top" title="Go to top">
                        <FaChevronUp />
                    </button>
                </span>
            </div>
        </div>
    );
}

export default FloatingButtons;
