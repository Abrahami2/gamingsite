import React from 'react';
import './App.css';

// Import your images – update paths if needed
import locationImg from './images/location.jpg';
import ps5pic from './images/ps5pic.jpg';
import racepic from './images/racepic.jpg';
import pool from './images/pool.jpg';
import food from './images/food.jpg';
import soccer from './images/soccer.jpg';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <div className="header-content container">
          <div className="logo">
            <h1>ZS GameHouse</h1>
            <p className="tagline">Your Ultimate Gaming Destination</p>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Welcome to ZS GameHouse</h2>
          <p>Experience gaming like never before.</p>
          <a href="#gallery" className="btn">Explore Now</a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Our Gaming Setup</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={ps5pic} alt="PS5 Stations" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">PS5 Stations</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={racepic} alt="Racing Games Setup" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Racing Games</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={pool} alt="Pool Table" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Pool Table</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={food} alt="Food, Tea & Snacks" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Food & Snacks</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src={soccer} alt="Soccer Games" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">Soccer Games</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="location">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="location-container">
            <div className="location-map">
              <img src={locationImg} alt="GameHouse Location" />
            </div>
            <div className="location-info">
              <h3>Our Location</h3>
              <div className="location-details">
                <div className="location-detail">
                  <span className="location-icon">📍</span>
                  <p>123 Gaming Street, City, Country</p>
                </div>
                <div className="location-detail">
                  <span className="location-icon">📞</span>
                  <p>Phone: +213 557 48 76 58</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/ZS+GameHouse/data=!4m2!3m1!1s0x0:0x910f25051921d7c9?sa=X&ved=1t:2428&hl=en-US&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="reviews-container">
            <div className="review-card">
              <p className="review-text">
                "Amazing place with top-notch gaming setups. Highly recommended!"
              </p>
              <div className="reviewer">
                <div className="reviewer-img">A</div>
                <div className="reviewer-info">
                  <h4>Abdou</h4>
                  <p className="rating">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">
                "Great atmosphere and friendly staff. Will definitely come back!"
              </p>
              <div className="reviewer">
                <div className="reviewer-img">B</div>
                <div className="reviewer-info">
                  <h4>Moh</h4>
                  <p className="rating">★★★★☆</p>
                </div>
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">
                "Best gaming cafe in town. Love the PS5 setups!"
              </p>
              <div className="reviewer">
                <div className="reviewer-img">C</div>
                <div className="reviewer-info">
                  <h4>Rachid</h4>
                  <p className="rating">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-title">Get in Touch</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p className="contact-text">Phone: +213 557 48 76 58</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <p className="contact-text">Email: info@zsgamehouse.com</p>
              </div>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/zsgamehouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  📸
                </a>
                <a
                  href="https://www.facebook.com/zsgamehouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  🎮
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <p className="footer-text">&copy; 2025 ZS GameHouse. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;