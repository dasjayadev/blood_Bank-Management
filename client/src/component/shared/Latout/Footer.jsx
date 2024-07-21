import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>Blood Bank</h5>
            <p>Your donation can save lives. Join us in our mission to provide safe blood for all.</p>
            <div>
              <p><FontAwesomeIcon icon={faPhoneAlt} /> +1 123 456 7890</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> info@bloodbank.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="#" className="text-white text-decoration-none">Home</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Services</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Donate</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <Link href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link href="#" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="#" className="text-white me-3"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
          </div>
        </div>

        <div className="text-center py-3">
          &copy; 2024 Blood Bank | Designed by jayadev
        </div>
      </div>
    </footer> 
    </>
  );
}

export default Footer;
