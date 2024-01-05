import React from 'react';

const Teaching = () => {
  return (
    <div className="teaching-grid">
      <div className="teaching-item">
        <h3>TA - CIS 3800 - Computer Operating Systems</h3>
        <p className="mini-title">January 2024 - Now</p>
        <p>
            This class explores contemporary techniques and algorithms employed in 
            modern operating systems, focusing on concurrent distributed operations.
            Key topics include process synchronization, interprocess communication,
            concurrent/distributed programming languages, resource allocation, deadlock 
            prevention, virtual memory, protection and security mechanisms, distributed 
            operations, distributed data handling, and performance evaluation. 
            I'm particulary excited to serve as a teaching assistant for this course, I
            will be responsible for hosting office hours, grading assignments, and acting 
            as a guiding resource to students. 
        </p>
      </div>

      <div className="teaching-item">
        <h3>TA - CIS 2400 - Computer Systems</h3>
        <p className="mini-title">August 2023 - December 2023</p>
        <p>
        Commencing from transistors and basic computer hardware configurations, this foundational 
        course progresses through low-level programming with primitive machine instructions, 
        culminating in an overview of the C programming language. It provides a comprehensive
         introduction to computer systems architecture, serving as the fundamental basis for 
         subsequent courses in computer systems. I had a great time working with students
         and helping them learn the basics of computer systems.
        </p>
      </div>

      {/* Add more teaching items as needed */}
    </div>
  );
};

export default Teaching;
