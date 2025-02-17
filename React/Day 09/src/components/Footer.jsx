import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best services to our customers.
              Stay connected with us for more updates.
            </p>
          </div>
          {/* Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt-fill"></i> 1234 Street, City, Country
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> email@example.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> +123 456 7890
            </p>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MyApp. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
