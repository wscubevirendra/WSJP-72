import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
          
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <p className="text-center text-muted mb-5">
                        We'd love to hear from you! Please fill out the form below or reach out using the contact details.
                    </p>
                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-md-8 mb-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                        {/* Contact Information */}
                        <div className="col-md-4">
                            <h5>Contact Information</h5>
                            <p>
                                <i className="bi bi-geo-alt-fill"></i> 1234 Street, City, Country
                            </p>
                            <p>
                                <i className="bi bi-envelope-fill"></i> email@example.com
                            </p>
                            <p>
                                <i className="bi bi-telephone-fill"></i> +123 456 7890
                            </p>
                            <h5>Follow Us</h5>
                            <a href="#" className="text-primary me-2">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-info me-2">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-danger">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
         
        </>

    );
};

export default Contact;
