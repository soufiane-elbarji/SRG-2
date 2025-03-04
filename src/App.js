import React, { useState, useEffect } from 'react';
import './App.css';
import FacebookIcon from './assets/icons/FacebookIcon';
import InstagramIcon from './assets/icons/InstagramIcon';
import LinkedInIcon from './assets/icons/LinkedInIcon';
import AboutImageGallery from './AboutImageGallery';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from "react-ga4";

ReactGA.initialize("G-B4T7ETSJT5");

ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);

const handleButtonClick = () => {
  ReactGA.event({
    category: 'User',
    action: 'Clicked a button'
  });
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('day1'); // State to manage active tab
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://www.form-to-email.com/api/s/gIxTOV_m7oV2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="app">
    <Analytics />
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <h1><a href='https://srg-2.vercel.app/'><span className="highlight">SRG 2</span><span className="year">025</span></a></h1>
          </div>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="menu-button" onClick={toggleMenu}>
            <div className={`burger ${isMenuOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="title">South <span className='robotics'>Robotics</span> Gathering</h1>
            <h3 className="subtitle">2nd edition</h3>
            <p className="date">April 11-12, 2025</p>
            <div className="buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
          <div className="hero-image">
              <img src="/logo.png" alt="SRG Event" />
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About <span className="highlight">SRG</span></h2>
            <p className="section-subtitle">Learn about our robotics gathering event</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>Every year, the South Robotics Gathering (SRG) brings together professionals, researchers, engineers, students, and robotics enthusiasts. Its primary goal is to create a collaborative platform for sharing knowledge and fostering innovation in robotics and technology.</p>
              <p>SRG serves as an incubator for ideas and a launchpad for young talents, offering them a unique opportunity to showcase their projects and interact with experts from various fields. This event contributes to the advancement of robotics in Morocco and the emergence of a dynamic and innovative tech community.</p>
              <p>For its second edition, the South Robotics Gathering will be held under the theme "Shaping Morocco's Future: Robotics Across Diverse Sectors." This edition will explore the use of robotics in various key sectors of Morocco.</p>
            </div>
            <div className="about-image">
              <AboutImageGallery />
            </div>
          </div>
          
          <div className="theme-box">
            <h3>2025's Theme</h3>
            <h4>"Shaping Morocco's Future: Robotics Across Diverse Sectors"</h4>
            <p>Exploring how robotics technology is transforming industries throughout Morocco and building the foundation for a technological future.</p>
          </div>
          
          <div className="sponsors">
            <h3>Our Sponsors</h3>
            <div className="sponsors-grid">
              <div className="sponsor-item">
                <img src="/api/placeholder/150/80" alt="Sponsor 1" />
              </div>
              <div className="sponsor-item">
                <img src="/api/placeholder/150/80" alt="Sponsor 2" />
              </div>
              <div className="sponsor-item">
                <img src="/api/placeholder/150/80" alt="Sponsor 3" />
              </div>
              <div className="sponsor-item">
                <img src="/api/placeholder/150/80" alt="Sponsor 4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section id="schedule" className="schedule">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Event <span className="highlight">Schedule</span></h2>
            <p className="section-subtitle">Plan your visit</p>
          </div>
          
          <div className="tabs">
            <div className="tab-header">
              <div
                className={`tab-item ${activeTab === 'day1' ? 'active' : ''}`}
                onClick={() => handleTabChange('day1')}
              >
                Day 1 - April 11
              </div>
              <div
                className={`tab-item ${activeTab === 'day2' ? 'active' : ''}`}
                onClick={() => handleTabChange('day2')}
              >
                Day 2 - April 12
              </div>
            </div>
            
            <div className="tab-content">
              {/* Day 1 Schedule */}
              <div className={`tab-pane ${activeTab === 'day1' ? 'active' : ''}`}>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="time">9:00 AM - 9:30 AM</div>
                    <div className="content">
                      <h3>Opening Speech</h3>
                      <p>Welcome address and introduction to the event theme</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">9:30 AM - 10:30 AM</div>
                    <div className="content">
                      <h3>Conference</h3>
                      <p>--</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">10:30 AM - 11:00 PM</div>
                    <div className="content">
                      <h3>Coffee Break</h3>
                      <p>Networking opportunity with refreshments</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">11:00 PM - 12:30 PM</div>
                    <div className="content">
                      <h3>Conference</h3>
                      <p>--</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">12:30 PM - 1:00 PM</div>
                    <div className="content">
                      <h3>Exhibition Booths Opening</h3>
                      <p>--</p>
                      <div className="venue">Médiathèque</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">1:00 PM - 2:30 PM</div>
                    <div className="content">
                      <h3>Lunch Break</h3>
                      <p>Networking opportunity with refreshments</p>
                      <div className="venue">Workshop Rooms A, B, C</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">3:00 PM - 4:00 PM</div>
                    <div className="content">
                      <h3>Debate Session</h3>
                      <p>--</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">4:00 PM - 4:30 PM</div>
                    <div className="content">
                      <h3>Coffee Break</h3>
                      <p>Networking opportunity with refreshments</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="time">4:00 PM - 4:30 PM</div>
                    <div className="content">
                      <h3>Exhibition Booths</h3>
                      <p>(Sponsors & Participants)</p>
                      <div className="venue">Médiathèque</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 Schedule */}
              <div className={`tab-pane ${activeTab === 'day2' ? 'active' : ''}`}>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="time">9:00 AM - 10:30 AM</div>
                    <div className="content">
                      <h3>TrilBot (Phase 1)</h3>
                      <p>First phase of the TrilBot competition</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">10:30 AM - 11:00 AM</div>
                    <div className="content">
                      <h3>Coffee Break</h3>
                      <p>Networking opportunity with refreshments</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">11:00 AM - 1:00 PM</div>
                    <div className="content">
                      <h3>FREE ROBOTICS</h3>
                      <p>Open robotics demonstrations and exhibitions</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">1:00 PM - 2:30 PM</div>
                    <div className="content">
                      <h3>Lunch Break</h3>
                      <p>Networking opportunity with refreshments</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">2:30 PM - 4:00 PM</div>
                    <div className="content">
                      <h3>FREE ROBOTICS</h3>
                      <p>(Continued)</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">4:00 PM - 4:30 PM</div>
                    <div className="content">
                      <h3>Coffee Break</h3>
                      <p>Networking opportunity with refreshments</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">4:30 PM - 5:30 PM</div>
                    <div className="content">
                      <h3>TrilBot (Phase 2)</h3>
                      <p>Final phase of the TrilBot competition</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">5:30 PM - 6:30 PM</div>
                    <div className="content">
                      <h3>Awards Ceremony</h3>
                      <p>Closing ceremony and awards distribution</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact <span className="highlight">Us</span></h2>
            <p className="section-subtitle">Get in touch with our team</p>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-item">
                <h3>Email</h3>
                <p>srg2.info@gmail.com</p>
              </div>
              
              <div className="info-item">
                <h3>Phone</h3>
                <p>+212 608-599022</p>
              </div>
              
              <div className="info-item">
                <h3>Address</h3>
                <p>ENSA Agadir</p>
              </div>
              
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100090818663654" className="social-link">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/south.robotics.gathering/" className="social-link">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/showcase/south-robotics-gathering/" className="social-link">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo2">
              <h2><span className="highlight2">SRG</span> 2025</h2>
              <p>Shaping Morocco's Future: Robotics Across Diverse Sectors</p>
            </div>
            <p className="copyright">
              Developed by <a href="https://www.linkedin.com/in/soufiane-elbarji/" target="_blank" rel="noopener noreferrer">Soufiane El Barji</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;