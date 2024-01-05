import React from 'react';
import ocuguideImage from './ocuguide.jpeg';
import rusticdbms from './rusticdbms.png';
import purm from './purm.jpg'; 
import penn from './penn2.png';
import './App.css';

const Projects = () => {
  return (
    <div className="project-grid">
      <div className="project-item">
        <div className="project-content">
          <img src={ocuguideImage} alt="Project 1" className="project-image" />
          <div className="project-text">
            <h3>OcuGuide</h3>
            <div className="project-description">
              <p>An ophthalmic surgical device that won a $10,000 Grand Prize at the University
                of Utah's 2023 Bench to Bedside competition. Patented device uses a microcontroller 
                coded in C++ along with an OpenGL UI to ensure that a patient’s eye is properly 
                oriented during surgery. Created in collaboration
                with my sister, Joanna Gorka.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-item">
        <div className="project-content">
          <img src={rusticdbms} alt="Project 2" className="project-image" />
          <div className="project-text">
            <h3>Rustic_DB</h3>
            <div className="project-description">
              <p>
                A Rust-based relational database enabling users to execute table operations and primitive queries
                for storing and retrieving data. The database supports concurrent reads and writes, ensuring atomicity 
                through a transaction manager that employs the WAIT-DIE protocol, with data organized as heapfiles and
                stored in tables using heappages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional project items */}
      <div className="project-item">
        <div className="project-content">
          <img src={purm} alt="Project 3" className="project-image" />
          <div className="project-text">
            <h3>Quality Control and Topological Analysis of MRI Segmentation Data</h3>
            <div className="project-description">
              <p>
                While researching at Penn's Image Computing and Science Laboratory (PICSL), 
                worked on developing a ResNet-based model and QC tool for assessing image segmentation 
                quality in a dataset of early Alzheimer's disease. Presented findings at
                Penn's 2023 Fall Research Expo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-item">
        <div className="project-content">
          <img src={penn} alt="Project 4" className="project-image" />
          <div className="project-text">
            <h3>PennOS</h3>
            <div className="project-description">
              <p>
                A standalone kernel written in C that simulates a UNIX-like operating system.
                Incorporates a foreground and background processes, process scheduler with job control,
                 redirection, and a custom FAT filesystem. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add more project items as needed */}
    </div>
  );
};

export default Projects;
