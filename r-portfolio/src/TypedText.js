import React, { memo, useState, useEffect } from 'react';

const TypedText = ({ children, delay = 110 }) => {
  const [revealedLetters, setRevealedLetters] = useState(0);

  useEffect(() => {
    let intervalId;

    const animateText = () => {
      setRevealedLetters((prevLetters) => {
        if (prevLetters < children.length) {
          intervalId = setTimeout(animateText, delay);
        }
        return prevLetters + 1;
      });
    };

    animateText();

    return () => {
      clearTimeout(intervalId);
    };
  }, [children, delay]);

  return <>{children.substring(0, revealedLetters)}</>;
};

export default TypedText;
