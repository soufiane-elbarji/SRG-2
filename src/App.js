import React, { useState, useEffect } from 'react';
import './App.css';
import FacebookIcon from './assets/icons/FacebookIcon';
import InstagramIcon from './assets/icons/InstagramIcon';
import LinkedInIcon from './assets/icons/LinkedInIcon';
import AboutImageGallery from './AboutImageGallery';
import ProgressBar from './ProgressBar';
import ScrollToTopButton from './ScrollToTopButton';
import { Analytics } from '@vercel/analytics/react';

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
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        alert('Échec de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };
  const speakers = {
    day1: [
      {
        id: 'conference1',
        name: 'Dr. AHALLAL Youness',
        role: 'Urologist',
        company: 'Groupe Hospitalier Diaconesses Croix Saint-Simon',
        photo: '/Media/dr-youness_ahallal.jpg',
        title: "Chirurgie Sans Frontières : L'Ère de la Robotique Médicale.",
      },
      {
        id: 'conference2',
        name: 'Pr. JENKAL Wissam',
        role: 'Maître de Conférences Habilité à l’ENSA Agadir Coordonnateur de la filière Mécatronique et Technologies Automobiles Responsable du Laboratoire LiSTi',
        company: 'J&T Roboticx',
        photo: '/Media/Jenkal-Wissam.jpg',
        title: 'Vers une ère robotique : enjeux et défis dans un monde en constante évolution.',
      },
      {
        id: 'conference3',
        name: 'Mr. JNIOIH Omar',
        role: 'Fondateur',
        company: 'J&T Roboticx',
        photo: '/Media/Omar.jpg',
        title: "Robotique et innovation: tendances actuelles, des applications pratiques et des perspectives d'avenir.",
      },
      {
        id: 'conference4',
        name: 'Mr. GUIRROU Hamza',
        role: 'Conseiller d’affaires techniques',
        company: "Union internationale des transports routiers (IRU) à Genève",
        photo: '/Media/Hamza.jpg',
        title: 'The Road to Safer Driving: ADAS, Autonomy, and Drowsiness Detection Systems.',
      },
      {
        id: 'conference5',
        name: 'Pr. SADDIK Amine',
        role: 'Membre du Laboratoire LISTI ENSA et MC à la faculté des sciences appliquées Ait Melloul',
        company: '',
        photo: '/Media/Amine-Saddik.jpg',
        title: 'Robotics in precision agriculture: has it come of age?',
      },
    ],
    debate: [
      {
        id: 'debater1',
        name: 'Pr. JENKAL Wissam',
        role: [
          "Maître de Conférences Habilité à l’ENSA Agadir",
          "Coordonnateur de la filière Mécatronique et Technologies Automobiles",
          "Responsable du Laboratoire LiSTi"
        ].join(' '),
        company: '',
        photo: '/Media/Jenkal-Wissam.jpg',
      },
      {
        id: 'debater4',
        name: 'Pr. CHABAA Samira',
        role: ["Professeur de génie électrique", "Spécialiste en intelligence artificielle"].join(' '),
        company: '',
        photo: '/Media/chabaa.jpeg',
      },
    ],
    animator: {
      id: 'animator1',
      name: 'Pr. EL OUAFA Idriss',
      role: [
        'Event Moderator',
        'PHD en Sciences du langage de l\'université de Nice Sophia Antipolis',
        'Professeur habilité en Sciences de l\'Information et de la Communication à l\'université Ibn Zohr d\'Agadir'
      ].join(' '),
      company: '',
      photo: '/Media/idriss.jpg',
    },
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
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#schedule">Programme</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="menu-button" onClick={toggleMenu}>
            <div className={`burger ${isMenuOpen ? 'active' : ''}`}></div>
          </div>
        </div>
        <ProgressBar />
        <ScrollToTopButton />
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="title">South</h1>
            <h1 className="title"><span className='robotics'>Robotics</span></h1>
            <h1 className="title">Gathering</h1>
            <h3 className="subtitle">2ème édition</h3>
            <p className="date">11-12 Avril 2025</p>
            <div className="buttons">
              <a href="#about" className="btn btn-primary">En savoir plus</a>
              <a href="#contact" className="btn btn-secondary">Nous contacter</a>
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
            <h2 className="section-title">À propos du <span className="highlight">SRG</span></h2>
            <p className="section-subtitle">Découvrez notre événement dédié à la robotique</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>Chaque année, le South Robotics Gathering (SRG) réunit des professionnels, chercheurs, ingénieurs, étudiants et passionnés de robotique. Son objectif principal est de créer une plateforme collaborative pour partager les connaissances et favoriser l'innovation dans le domaine de la robotique et de la technologie.</p>
              <p>Le SRG sert d'incubateur d'idées et de tremplin pour les jeunes talents, leur offrant une opportunité unique de présenter leurs projets et d'interagir avec des experts de divers domaines. Cet événement contribue à l'avancement de la robotique au Maroc et à l'émergence d'une communauté technologique dynamique et innovante.</p>
              <p>Pour sa deuxième édition, le South Robotics Gathering se tiendra sous le thème "Shaping Morocco's Future: Robotics Across Diverse Sectors." Cette édition explorera l'utilisation de la robotique dans divers secteurs clés du Maroc.</p>
            </div>
            <div className="about-image">
              <AboutImageGallery />
            </div>
          </div>
          
          <div className="theme-box">
            <h3>Thème 2025</h3>
            <h4>"Shaping Morocco's Future: Robotics Across Diverse Sectors"</h4>
            <p>Exploration de la manière dont la technologie robotique transforme les industries au Maroc et pose les bases d'un avenir technologique.</p>
          </div>
          
          <div className="sponsors">
            <h2 className="section-title">Sponsors <span className="highlight">& Partenaires</span></h2>
            <div className="sponsors-grid">
              <div className="sponsor-item">
              <img src="\sponso-logos\Petrostar-LOGO.png" alt="Sponsor 1" />
              </div>
              <div className="sponsor-item">
                <img src="\sponso-logos\sud_concession_Auto-LOGO.png" alt="Sponsor 2" />
              </div>
              <div className="sponsor-item">
                <img src="\sponso-logos\J&T Robotix.png" alt="Sponsor 3" />
              </div>
              <div className="sponsor-item">
                <img src="\sponso-logos\Speed Impression.png" alt="Sponsor 4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section id="schedule" className="schedule">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Programme de <span className="highlight">l'événement</span></h2>
            <p className="section-subtitle">Planifiez votre visite</p>
          </div>
          
          <div className="tabs">
            <div className="tab-header">
              <div
                className={`tab-item ${activeTab === 'day1' ? 'active' : ''}`}
                onClick={() => handleTabChange('day1')}
              >
                Jour 1 - 11 Avril
              </div>
              <div
                className={`tab-item ${activeTab === 'day2' ? 'active' : ''}`}
                onClick={() => handleTabChange('day2')}
              >
                Jour 2 - 12 Avril
              </div>
            </div>
            
            <div className="tab-content">
              {/* Day 1 Schedule */}
              <div className={`tab-pane ${activeTab === 'day1' ? 'active' : ''}`}>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="time">9:00 - 9:30</div>
                    <div className="content">
                      <h3>Mots d'ouverture</h3>
                      <p>Mot de bienvenue et introduction au thème de l'événement</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                  <div className="time">9:30 - 10:15</div>
                  <div className="content">
                    <h3 className="conference-title">Conférence 1</h3>
                    <div className="speaker-info">
                      <div className="speaker-header">
                        <img src={speakers.day1[0].photo} alt={speakers.day1[0].name} className="speaker-photo" />
                        <div className="speaker-details">
                          <h4>{speakers.day1[0].name}</h4>
                          <p>{speakers.day1[0].role} à {speakers.day1[0].company}</p>
                          <p className="conference-theme"><span className='conf-title'>Titre: </span>{speakers.day1[0].title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="venue">Amphi Théâtre</div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="time">10:15 - 11:00</div>
                  <div className="content">
                    <h3 className="conference-title">Conférence 2</h3>
                    <div className="speaker-info">
                      <div className="speaker-header">
                        <img src={speakers.day1[1].photo} alt={speakers.day1[1].name} className="speaker-photo" />
                        <div className="speaker-details">
                          <h4>{speakers.day1[1].name}</h4>
                          <p>{speakers.day1[1].role} à {speakers.day1[1].company}</p>
                          <p className="conference-theme"><span className='conf-title'>Titre: </span>{speakers.day1[1].title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="venue">Amphi Théâtre</div>
                  </div>
                </div>
                  
                  <div className="timeline-item">
                    <div className="time">11:00 - 11:30</div>
                    <div className="content">
                      <h3>Pause café</h3>
                      <p>Opportunité de Networking avec rafraîchissements</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                                    
                  <div className="timeline-item">
                    <div className="time">11:30</div>
                    <div className="content">
                      <h3>Ouverture des stands d'exposition</h3>
                      <p>Tournée officielle</p>
                      <div className="venue">Médiathèque</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">12:30 - 14:30</div>
                    <div className="content">
                      <h3>Pause déjeuner</h3>
                      <p>Opportunité de Networking avec rafraîchissements</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                  <div className="time">14:30 - 15:10</div>
                  <div className="content">
                    <h3 className="conference-title">Conférence 3</h3>
                    <div className="speaker-info">
                      <div className="speaker-header">
                        <img src={speakers.day1[2].photo} alt={speakers.day1[2].name} className="speaker-photo" />
                        <div className="speaker-details">
                          <h4>{speakers.day1[2].name}</h4>
                          <p>{speakers.day1[2].role} de {speakers.day1[2].company}</p>
                          <p className="conference-theme"><span className='conf-title'>Titre: </span>{speakers.day1[2].title}</p>
                        </div>
                      </div>
                      
                    </div>
                    <div className="venue">Amphi Théâtre</div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="time">15:10 - 15:50</div>
                  <div className="content">
                    <h3 className="conference-title">Conférence 4</h3>
                    <div className="speaker-info">
                      <div className="speaker-header">
                        <img src={speakers.day1[3].photo} alt={speakers.day1[3].name} className="speaker-photo" />
                        <div className="speaker-details">
                          <h4>{speakers.day1[3].name}</h4>
                          <p>{speakers.day1[3].role} de {speakers.day1[3].company}</p>
                          <p className="conference-theme"><span className='conf-title'>Titre: </span>{speakers.day1[3].title}</p>
                        </div>
                      </div>
                      
                    </div>
                    <div className="venue">Amphi Théâtre</div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="time">15:50 - 16:30</div>
                  <div className="content">
                    <h3 className="conference-title">Conférence 5</h3>
                    <div className="speaker-info">
                      <div className="speaker-header">
                        <img src={speakers.day1[4].photo} alt={speakers.day1[4].name} className="speaker-photo" />
                        <div className="speaker-details">
                          <h4>{speakers.day1[4].name}</h4>
                          <p>{speakers.day1[4].role} de {speakers.day1[4].company}</p>
                          <p className="conference-theme"><span className='conf-title'>Titre: </span>{speakers.day1[4].title}</p>
                        </div>
                      </div>
                      
                    </div>
                    <div className="venue">Amphi Théâtre</div>
                  </div>
                </div>

                <div className="timeline-item">
                    <div className="time">16:30 - 17:00</div>
                    <div className="content">
                      <h3>Pause café</h3>
                      <p>Opportunité de Networking avec rafraîchissements</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="time">17:00 - 18:20</div>
                    <div className="content">
                      <div className="debate-container">
                        <div className="debate-header">
                          <h3 className="debate-title">Session de Débat</h3>
                          <p className="debate-topic">
                            "La robotique est-elle la clé du développement durable et économique du Maroc 
                            dans les secteurs stratégiques ?"
                          </p>
                        </div>
                        
                        <div className="debate-participants-row">
                          {/* Moderator */}
                          <div className="debate-participant moderator">
                            <div className="debate-photo-container">
                              <img 
                                src={speakers.animator.photo} 
                                alt={speakers.animator.name} 
                                className="debate-photo" 
                              />
                            </div>
                            <h4 className="participant-name">{speakers.animator.name}</h4>
                            <p className="participant-role">Modérateur de Session</p>
                            <p className="participant-bio">
                              {speakers.animator.role.split(',')[0]}
                            </p>
                          </div>
                          
                          {/* Debater 1 */}
                          <div className="debate-participant">
                            <div className="debate-photo-container">
                              <img 
                                src={speakers.debate[0].photo} 
                                alt={speakers.debate[0].name} 
                                className="debate-photo" 
                              />
                            </div>
                            <h4 className="participant-name">{speakers.debate[0].name}</h4>
                            <p className="participant-role">
                              {speakers.debate[0].role.split('.').slice(0, 2).join('.')}
                            </p>
                            <p className="participant-bio">
                              {speakers.debate[0].role.split('.').slice(2).join('.')}
                            </p>
                          </div>
                          
                          {/* Debater 2 */}
                          <div className="debate-participant">
                            <div className="debate-photo-container">
                              <img 
                                src={speakers.debate[1].photo} 
                                alt={speakers.debate[1].name} 
                                className="debate-photo" 
                              />
                            </div>
                            <h4 className="participant-name">{speakers.debate[1].name}</h4>
                            <p className="participant-role">
                              {speakers.debate[1].role.split('.')[0]}
                            </p>
                            <p className="participant-bio">
                              {speakers.debate[1].role.split('.').slice(1).join('.')}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="time">18:20 - 18:30</div>
                    <div className="content">
                      <h3>Fin du premier jour</h3>
                      <p>Clôture de la première journée</p>
                      <div className="venue">Amphi Théâtre</div>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Day 2 Schedule */}
              <div className={`tab-pane ${activeTab === 'day2' ? 'active' : ''}`}>
                <div className="timeline">
                <div className="timeline-item">
                    <div className="time">8:30</div>
                    <div className="content">
                      <h3>Accueil</h3>
                      <p>Accueil des participants</p>
                      <div className="venue">Amphi II</div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="time">9:00 - 10:15</div>
                    <div className="content">
                      <h3>WarBot (Phase 1)</h3>
                      <p>Phase éliminatoire et demi finale</p>
                      <div className="venue">Amphi II</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">10:15 - 10:45</div>
                    <div className="content">
                      <h3>Pause café</h3>
                      <p>Opportunité de Networking avec rafraîchissements</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">10:45 - 13:00</div>
                    <div className="content">
                      <h3>FREE ROBOTICS</h3>
                      <p>Démonstrations et expositions libres de robotique</p>
                      <div className="venue">Amphi II</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">13:00 - 14:30</div>
                    <div className="content">
                      <h3>Pause déjeuner</h3>
                      <p>Opportunité de networking</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">14:30 - 16:00</div>
                    <div className="content">
                      <h3>FREE ROBOTICS</h3>
                      <p>(Suite)</p>
                      <div className="venue">Amphi II</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">16:00 - 16:30</div>
                    <div className="content">
                      <h3>Pause café</h3>
                      <p>Opportunité de networking</p>
                      <div className="venue">Espace Amphi</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">16:30 - 17:00</div>
                    <div className="content">
                      <h3>WarBot (Phase 2)</h3>
                      <p>Phase finale</p>
                      <div className="venue">Amphi II</div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="time">17:00 - 18:30</div>
                    <div className="content">
                      <h3>Cérémonie de remise des prix</h3>
                      <p>Cérémonie de clôture et distribution des prix</p>
                      <div className="venue">Amphi II</div>
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
            <h2 className="section-title">Nous <span className="highlight">contacter</span></h2>
            <p className="section-subtitle">Prenez contact avec notre équipe</p>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-item">
                <h3>Email</h3>
                <p>srg2.info@gmail.com</p>
              </div>
              
              <div className="info-item">
                <h3>Téléphone</h3>
                <p>+212 608-599022</p>
              </div>
              
              <div className="info-item">
                <h3>Adresse</h3>
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
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer le message</button>
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
              Développé par <a href="https://www.linkedin.com/in/soufiane-elbarji/" target="_blank" rel="noopener noreferrer">Soufiane El Barji</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;