import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { TbPhoneCall,TbMap } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import './ContactUs.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ContactUs() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <>
            {/* <Navbar /> */}
            <div className="container-fluid contactForm">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="pr-3">Contact Us</span>
                </h2>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form bg-light p-30">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                        data-validation-required-message="Please enter your name"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                        data-validation-required-message="Please enter your email"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        placeholder="Subject"
                                        required
                                        data-validation-required-message="Please enter a subject"
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea
                                        className="form-control"
                                        rows="8"
                                        id="message"
                                        placeholder="Message"
                                        required
                                        data-validation-required-message="Please enter your message"
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <div className="bg-light p-30 mb-30">
                            <iframe
                                style={{ width: '100%', height: '250px', border: '0' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                        <div className="bg-light p-30 mb-3">
                            <p className="mb-2">
                                <TbMap className="text-primary mr-3" />
                                4A, Virdavan Apartment
                            </p>
                            <p className="mb-2">
                                <GoMail className="text-primary mr-3" />
                                ankitjewrajka1234@gmail.com
                            </p>
                            <p className="mb-2">
                                <TbPhoneCall className="text-primary mr-3" />
                                +012 345 67890
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}