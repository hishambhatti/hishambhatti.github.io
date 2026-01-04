import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 40, pauseTime = 2500 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  // Determine if we are currently paused at the end of a word
  const i = loopNum % words.length;
  const fullText = words[i];
  const isWaiting = text === fullText;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseTime);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    }
  };

  return (
    <span className="relative">
      <span>{text}</span>
      <span
        className={`inline-block ml-0.5 border-r-2 border-blue-500 h-5 align-middle ${
          isWaiting ? "animate-[pulse_1s_infinite]" : "opacity-100"
        }`}
      ></span>
    </span>
  );
};

export default Typewriter;