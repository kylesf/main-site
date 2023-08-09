import React from 'react';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../img/avatar.png';

function HomePage() {
  const styles = {
    highlight: {
      color: '#007bff',
      fontWeight: 'bold'
    }
  };

  return (
    <div className="HomePage">
      
      <header className="hero">
        
        <div className="profile">
          <img src={avatar} alt=""/>
        </div>
        
        <h1 className="hero-text">
          Hi, I'm <span> Kyle </span>
        </h1>
        
        <p className="h-sub-text">
          A software engineer focused on 
          <span style={styles.highlight}> Full Stack Development</span>, 
          <span style={styles.highlight}> Data Pipelines</span> 
          and <span style={styles.highlight}>Technical Architecture</span> 
          <br /> in People Analytics at <a href='https://www.roche.com'>Roche</a>. 
          <br />
          <br />
          SMB Owner of <a href='https://www.theclearicecompany.com'>The Clear Ice Company</a>
        </p>
        
        <div className="icons">
          <a href='https://www.linkedin.com/in/kylestewartfrantz/' className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon fb"/>
          </a>

          {/* Commented out GitHub icon
          <a href='https://www.github.com/kylesf/' className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
          </a>
          */}

          <a href='https://instagram.com/theclearicecompany/' className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon yt"/>
          </a>
        </div>
      
      </header>
    
    </div>
  );
}

export default HomePage;
