import React, { useEffect } from "react";
import "./LandingPage.css";
import assets from "../../assets/assests";
const LandingPage = ({navigate}) => {
    
    useEffect(() => {
        const fadeInElements = document.querySelectorAll('.fade-in');
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show'); // Remove the 'show' class when the element leaves the viewport
            }
          });
        }, { threshold: 0.1 }); // Adjust threshold as needed
    
        fadeInElements.forEach(el => observer.observe(el));
    
        return () => {
          fadeInElements.forEach(el => observer.unobserve(el));
        };
      }, []);
  return (
    <body>
      <header className="navbar">
        <div className="logo">
          <img  src={assets.logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#usecase">Use Case</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </nav>
        <p href="#signup" className="btn">
          Sign Up
        </p>
      </header>

      <section className="hero">
        <h1>Your Safety, Our Priority</h1>
        <p>
          Empowering women with technology to ensure safety and rapid response
          during emergencies.
        </p>
        <a href="http://127.0.0.1:5000/" className="btn-learn-more">
          Get Started <img src={assets.rightIcon} alt="" />
        </a>
      </section>

      <section id="features" className="features">
        <h2>
          <i>HerShield</i> Core Features
        </h2>
        <div className="feature-cards">
          <div className="card  fade-in">
            <h3>Gender & Threat Detection</h3>
            <img src={assets.img1} alt="" />
            <p>
              Our app utilizes advanced AI to detect the gender and identify
              potential threats in real-time.
            </p>
          </div>
          <div className="card  fade-in">
            <h3>Contact Nearest Police Station</h3>
            <img src={assets.img2} alt="" />
            <p>
              Instantly send your device and location details to the closest
              police station for rapid tracking and response.
            </p>
          </div>
          <div className="card  fade-in">
            <h3>Request Tracking</h3>
            <img src={assets.img4} alt="" />
            <p>
              Share your real-time location with authorized police officers to
              ensure you’re always monitored for safety.
            </p>
          </div>
          <div className="card  fade-in">
            <h3>Contact Nearest Hospital</h3>
            <img src={assets.img3} alt="" />
            <p>
              Quickly connect to the nearest hospital for medical emergencies
              with a single tap.
            </p>
          </div>
          <div className="card  fade-in">
            <h3>Manual Alert</h3>
            <img src={assets.img5} alt="" />
            <p>
              Trigger an instant SOS alert manually to notify your emergency
              contacts and law enforcement.
            </p>
          </div>
        </div>
      </section>
      <section className="usecase" id="usecase">
        <h2>
          How <i>HerShield</i> Can Help You?
        </h2>
        <div className="use-case-cards">
          <div className="card  fade-in">
            <h3>Walking Alone</h3>
            <p>
              Feeling unsafe? Activate gender detection to stay alert and get
              real-time tracking support.
            </p>
          </div>
          <div className="card  fade-in">
            <h3>Medical Emergency</h3>
            <p>
              Quickly connect with hospitals in your area during health
              emergencies or accidents.
            </p>
          </div>
          <div className="card  fade-in">
            <h3>Unexpected Danger</h3>
            <p>
              Contact the nearest police station and send them your live
              location with one click.
            </p>
          </div>
        </div>
      </section>
      <section className="reviews" id="testimonials">
        <h2>What People Say About Us</h2>
        <div className="review-cards">
          <div className="rcards  fade-in">
            <div className="img-comment">
              <img src={assets.lana} alt="" />
              <p>
                "HerShield made me feel safe walking home at night. The tracking
                feature is a game-changer!"
              </p>
            </div>
            <i>-Lana Del Rey, 39</i>
          </div>
          <div className="rcards  fade-in">
            <div className="img-comment">
              <img src={assets.ariana} alt="" />
              <p>
                "The manual alert feature notified my family and the police in
                no time. Highly recommended!"
              </p>
            </div>
            <i>-Ariana Grande, 31</i>
          </div>
          <div className="rcards  fade-in">
            <div className="img-comment">
              <img src={assets.sza} alt="" />
              <p>
                "The hospital connection saved me when I fainted during my
                morning jog."
              </p>
            </div>
            <i>-SZA, 34</i>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-content" id="contact">
          <h3>Secure Your Safety Today!</h3>
          <p>
            Join HerShield to ensure your safety anytime, anywhere. Together, we
            can make a difference.
          </p>
          <button className="btn-learn-more">Join Now</button>
        </div>
        <div className="grid">
          <div className="footersection about">
            <img src={assets.logo} alt="" />
            <p>
              Empowering women with technology to ensure safety and rapid
              response during emergencies.
            </p>
          </div>
          <div className="footersection address">
            <p>Hyderabad,Telanana,500010</p>
            <p>+91 92038034879</p>
            <p>hersheild@gmail.com</p>
          </div>
          <div className="footersection support">
            <p>FAQs</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
          </div>
          <div className="footersection inputfields">
            <p>Subscribe For More Info</p>
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="bottom">
        <hr />
        <p>&copy; 2024 HerShield. All Rights Reserved.</p>
        </div>
        
      </footer>
    </body>
  );
};

export default LandingPage;
