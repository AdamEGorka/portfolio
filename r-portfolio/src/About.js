import React from 'react';
import adamImage from './adam.jpg';

const About = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1, marginRight: '20px' }}>
      {/* Image on the left */}
      <img src={adamImage} alt="About Me" style={{ width: '80%', height: 'auto' }} />
    </div>
    <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Bullet points on the right */}
      <ul style={{ textAlign: 'left', paddingLeft: 0, fontSize: '22px', color: '#A18276', font: 'Lato', fontWeight: 'bold' }}>
        <li style={{ marginBottom: '10px' }}>
          I'm a Junior at Penn studying Computer Science and minoring in Mathematics (Graduating May 2025)
        </li>
        <li style={{ marginBottom: '10px' }}>
          I'm currently working as a Teaching Assistant for Penn's CIS 3800 Computer Operating Systems course
        </li>
        <li style={{ marginBottom: '10px' }}>
          In my free time, I like to run, read sci-fi, and play lots of minesweeper!
        </li>
        {/* Add more bullet points as needed */}
      </ul>
    </div>
  </div>
);

export default About;
