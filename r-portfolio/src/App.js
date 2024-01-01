import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef  } from 'react';

const text = 'Option bruh bruh  content goes here';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [contentText, setContentText] = useState('');
  const isEffectRunning = useRef(false);


  useEffect(() => {
    let intervalId;

    if (selectedOption === 'option1') {
      let index = 0;
      intervalId = setInterval(() => {
        if (index < text.length - 1) {
          setContentText((prevContent) => prevContent + text[index]);
          index++;
          console.log(index);
        } else {
          clearInterval(intervalId);
        }
      }, 50);
    } else {
      setContentText('');
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedOption]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const colorizeText = (text) => {
    const normColor = '#AAC0AA'; // Normal color
    const colors = text.split('').map(() => normColor); // Initialize all colors to normal color
    const newestIndex = text.length - 1; // Index of the newest character

    if (newestIndex > 0) {
      colors[newestIndex] = getRandomColor(); // Set the color of the newest character
    } else {
      colors[colors.length - 1] = normColor; // Set the color of the last character to normal color
    }

    return text.split('').map((char, index) => (
      <span key={index} style={{ color: colors[index] }}>
        {char}
      </span>
    ));
  };

  const getRandomColor = () => {
    // Generate a random hex color code
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
          onClick={() => handleOptionChange('option4')}
        >
          Resume
        </button>
      </div>

      {/* Top Element */}
      <div className="top-element">
        <h1>Your Name</h1>
        {/* Add any other content for the top element */}
      </div>

      {/* Content */}
      <div className="content">
        {selectedOption === 'option1' && (
          <>
            <p>{colorizeText(contentText)}</p>
            <img src={logo} alt="GIF" />
          </>
        )}
        {selectedOption === 'option2' && <p>Option 2 content goes here</p>}
        {selectedOption === 'option3' && <p>Option 3 content goes here</p>}
        {selectedOption === 'option4' && <p>Option 4 content goes here</p>}
      </div>
    </div>
  );
};

export default App;
