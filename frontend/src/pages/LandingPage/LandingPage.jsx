import React from "react";
import "./LandingPage.css";
import assets from "../../assets/assests";
const LandingPage = () => {
  return (
    <body>
      <header className="navbar">
        <div className="logo"><img style={{width:"180px"}} src={assets.logo} alt="" /></div>
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
        <button className="btn-learn-more">Get Started <img src={assets.rightIcon} alt="" /></button>
      </section>

      <section id="features" className="features">
        <h2>HerShield Core Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Gender & Threat Detection</h3>
            <img src={assets.img1} alt="" />
            <p>
              Our app utilizes advanced AI to detect the gender and identify
              potential threats in real-time.
            </p>
          </div>
          <div className="card">
            <h3>Contact Nearest Police Station</h3>
            <img src={assets.img2} alt="" />
            <p>
              Instantly send your device and location details to the closest
              police station for rapid tracking and response.
            </p>
          </div>
          <div className="card">
            <h3>Request Tracking</h3>
            <img src={assets.img4} alt="" />
            <p>
              Share your real-time location with authorized police officers to
              ensure you’re always monitored for safety.
            </p>
          </div>
          <div className="card">
            <h3>Contact Nearest Hospital</h3>
            <img src={assets.img3} alt="" />
            <p>
              Quickly connect to the nearest hospital for medical emergencies
              with a single tap.
            </p>
          </div>
          <div className="card">
            <h3>Manual Alert</h3>
            <img src={assets.img5} alt="" />
            <p>
              Trigger an instant SOS alert manually to notify your emergency
              contacts and law enforcement.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <h3>Secure Your Safety Today!</h3>
          <p>
            Join HerShield to ensure your safety anytime, anywhere. Together, we
            can make a difference.
          </p>
          <button className="btn-learn-more">Join Now</button>
        </div>
        <div className="footer-links">
          <p>&copy; 2024 HerShield. All Rights Reserved.</p>
          <a href="#contact">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </body>
  );
};

export default LandingPage;
