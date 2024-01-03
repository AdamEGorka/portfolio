import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeIn from 'react-fade-in';

// tabs
import About from './About';

// social media icons
import linkedinIcon from './linkedin.png';
import githubIcon from './github.png';
import gmailIcon from './email.png';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [showCursor, setShowCursor] = useState(true);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSequenceEnd = () => {
    // This callback is called when the entire sequence has been typed
    setShowCursor(false); // Hide the cursor
  };


  return (
    <div className="app">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <button
          className={selectedOption === 'option1' ? 'active' : ''}
          onClick={() => handleOptionChange('option1')}
        >
          About Me
        </button>
        <button
          className={selectedOption === 'option2' ? 'active' : ''}
          onClick={() => handleOptionChange('option2')}
        >
          Projects
        </button>
        <button
          className={selectedOption === 'option3' ? 'active' : ''}
          onClick={() => handleOptionChange('option3')}
        >
          Teaching
        </button>
        <button
          className={selectedOption === 'option4' ? 'active' : ''}
          onClick={() => {
            window.open("https://drive.google.com/file/d/1gzJc51OMZU3lLveiLejSCytPOz5Xd_eH/view", "_blank");
          }}
        >
          Resume
        </button>

        
      </div>

      {/* Content */}
      <div className="page">
        {selectedOption === 'option1' && (
          <>
            <div className="type-bar">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Adam Gorka",
                  5000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Hi, I'm a Junior studying CS at Penn",
                  5000,
                  "Hi, I'm excited to meet you!",
                  10000,
                  "Hi, I'm excited about all things CS!"
                ]}
                wrapper="span"
                speed={50}
                infinite={true}
                style={{
                  fontSize: '4em',
                  display: 'inline-block',
                  color: '#614A42',
                  font: 'lato',
                  fontWeight: 'bolder'
                }}
                cursor={showCursor} // Only show the cursor when showCursor is true
                onSequenceEnd={handleSequenceEnd} // Callback when the sequence ends
              />
            </div>
            <div className="content">
              <FadeIn>
                <About />
              </FadeIn>
            </div>
          </>
        )}
        {selectedOption === 'option2' && <p>Option 2 content goes here</p>}
        {selectedOption === 'option3' && <p>Option 3 content goes here</p>}
        {selectedOption === 'option4' && <p>Option 4 content goes here</p>}
      </div>

      {/* Social Media Icons */}
      <div className="social-media">
        <a href="https://www.linkedin.com/in/adam1gorka/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/AdamEGorka" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="mailto:agorka@seas.upenn.edu">
          <img src={gmailIcon} alt="Gmail" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default App;
