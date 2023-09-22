import React, { useState, useEffect } from 'react';
import '../styles/TypewriterText.css'; // Import your CSS file for styling

function TypewriterText() {
  const [displayText, setDisplayText] = useState('');

  const textToType = "Hello This is Monyoro...";
  const typingSpeed = 200; // Adjust typing speed (milliseconds)
  const eraseSpeed = 50;   // Adjust erasing speed (milliseconds)

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < textToType.length) {
        setDisplayText(textToType.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Text is fully typed, start erasing
        setTimeout(eraseText, 1000); // Wait for a pause
      }
    };

    const eraseText = () => {
      if (currentIndex >= 0) {
        setDisplayText(textToType.substring(0, currentIndex));
        currentIndex--;
        setTimeout(eraseText, eraseSpeed);
      } else {
        // Text is fully erased, start typing again
        setTimeout(typeText, 1000); // Wait for a pause
      }
    };

    typeText(); // Start typing when component mounts

    // Cleanup the timer on unmount (optional)
    return () => clearTimeout();
  }, []);

  return (
    <div className="typewriter">
      <div className="typewriter-text">
        <h2>{displayText}</h2>
        <div className="cursor"></div>
      </div>
    </div>
  );
}

export default TypewriterText;
