import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-section">
          <h2 className="logo">ammar</h2>
          <p>Building better experiences for everyone.</p>
        </div>

        {/* Links Section */}
        <div className="links-section">
          <h3>Quick Links</h3>
          <ul className="links-list">
            <li><a href="#about" className="link">About Us</a></li>
            <li><a href="#services" className="link">Services</a></li>
            <li><a href="#contact" className="link">Contact</a></li>
            <li><a href="#faq" className="link">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>Phone: +201063555754</p>
          <p>Email: ammarsbus.com</p>
          <button
            className="whatsapp-button"
            onClick={() => window.open('https://wa.me/201063555754', '_blank')}
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
      <div className="copy-right">
        <p>&copy; 2025 MOAAMMER. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
