import React from 'react'
import "./LandingPage.css"
const LandingPage = () => {
  return (
    <body>
       <header className="navbar">
    <div className="logo">🛡️ Shield</div>
    <nav>
      <ul className="nav-links">
        <li><a href="#">Services</a></li>
        <li><a href="#">Use Case</a></li>
        <li><a href="#">Company</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
    </nav>
    <a href="#" className="contact-btn">Contact Us</a>
  </header>

  <section className="hero">
    <h1>Protecting Your Digital Future</h1>
    <p>Specializing in Cyber Recovery, Cyber Resilience, and Threat Defense Solutions.</p>
    <button className="btn-learn-more">Learn More</button>
  </section>

  <section className="services">
    <h2>Our Best Cybersecurity Services</h2>
    <div className="service-cards">
      <div className="card">
        <img src="cyber-resilience.png" alt="Cyber Resilience"/>
        <h3>Cyber Resilience</h3>
        <p>Ensure business continuity and minimize downtime.</p>
      </div>
      <div className="card">
        <img src="cyber-recovery.png" alt="Cyber Recovery"/>
        <h3>Cyber Recovery</h3>
        <p>Recover from attacks quickly with proactive measures.</p>
      </div>
      <div className="card">
        <img src="threat-defense.png" alt="Threat Defense"/>
        <h3>Threat Defense</h3>
        <p>Stay ahead of evolving threats with advanced solutions.</p>
      </div>
    </div>
  </section>

  <section className="trusted">
    <h2>Trusted by over 2 Million worldwide</h2>
    <div className="logos">
      <img src="partner1.png" alt="Rocket"/>
      <img src="partner2.png" alt="RankMate"/>
      <img src="partner3.png" alt="Skrill"/>
      <img src="partner4.png" alt="Slider"/>
    </div>
  </section>

  <section className="use-case">
    <h2>Use Case</h2>
    <div className="use-cards">
      <div className="use-card">Identity</div>
      <div className="use-card">Cloud</div>
      <div className="use-card">Application</div>
      <div className="use-card">Network</div>
    </div>
  </section>

  <section className="pricing">
    <h2>Pricing for our best cyber services</h2>
    <div className="pricing-tiers">
      <div className="tier basic">
        <h3>Basic</h3>
        <p>$29/month</p>
        <ul>
          <li>24/7 Support</li>
          <li>Basic Security Features</li>
        </ul>
        <button>Buy Now</button>
      </div>
      <div className="tier standard">
        <h3>Standard</h3>
        <p>$79/month</p>
        <ul>
          <li>Extended Features</li>
          <li>Comprehensive Monitoring</li>
        </ul>
        <button>Buy Now</button>
      </div>
      <div className="tier premium">
        <h3>Premium</h3>
        <p>$149/month</p>
        <ul>
          <li>All-Inclusive Package</li>
          <li>Complete Threat Protection</li>
        </ul>
        <button>Buy Now</button>
      </div>
    </div>
  </section>

  <footer className="footer">
    <p>© 2024 Shield - Secure your digital future today!</p>
  </footer>

    </body>
  )
}

export default LandingPage
