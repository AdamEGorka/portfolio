import logo from './logo.svg';
import './App.css';
import TypedText from './TypedText';
import React, { useState, useEffect, useRef  } from 'react';
import { TypeAnimation } from 'react-type-animation';

const text = 'Option bruh bruh  content goes here';
const words = ['React', 'Typewriter', 'Effect'];

const App = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [showCursor, setShowCursor] = useState(true);

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
          onClick={() => handleOptionChange('option4')}
        >
          Resume
        </button>
      </div>

      {/* <div className="top-element"> */}
        {/* <h1>Adam Gorka</h1> */}
        {/* Add any other content for the top element */}
      {/* </div> */}

      {/* Content */}
      <div className="content">
        {selectedOption === 'option1' && (
          <>
            {/* <p>{text}</p> */}
            {/* <TypedText delay={110}>Your typed text goes here</TypedText> */}
            <TypeAnimation
              sequence={[
                "Hi, I'm Adam Gorka",
                10000, // wait 1s before replacing "Mice" with "Hamsters"
                "Hi, I'm a Junior studying CS at Penn",
                10000,
                "Hi, I'm excited to meet you!",
                10000,
                "Hi, I'm excited about all things CS!"
              ]}
              wrapper="span"
              speed={50}
              infinite={true}
              style={{ fontSize: '4em', display: 'inline-block', color: '#614A42', font: 'lato', fontWeight: 'bold'}}
              cursor={showCursor} // Only show the cursor when showCursor is true
              onSequenceEnd={handleSequenceEnd} // Callback when the sequence ends
            />
            
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
