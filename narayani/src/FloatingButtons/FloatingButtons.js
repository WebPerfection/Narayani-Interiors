import React, { useEffect } from 'react';
import './FloatingButtons.css'
import '../Footer/Footer.css'
import { FaWhatsapp, FaChevronUp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";

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
            <div className="floating-button">+</div>
            <div className="element-container">
                <span className="float-element tooltip-left" onClick={() => {
                    const phoneNumber = "+917670834090"; // replace with your desired phone number
                    window.location.href = `tel:${phoneNumber}`;
                }}>
                    <TbPhoneCall />

                </span>
                <span className="float-element" id="icon-style"
                    onClick={() => {
                        const phoneNumber = "+917670834090"; // replace with your WhatsApp contact's phone number
                        window.open(
                            `https://api.whatsapp.com/send?phone=${phoneNumber}`,
                            "_blank"
                        );
                    }}>
                    <FaWhatsapp />
                </span>
                <span onClick={handleScrollTop} className="float-element">
                    <button id="return-to-top" title="Go to top">
                        <FaChevronUp />
                    </button>
                </span>
            </div>
        </div>
    );
}

export default FloatingButtons;
