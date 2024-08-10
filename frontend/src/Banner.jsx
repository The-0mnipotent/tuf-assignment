import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner({ text, time, link, onHide }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (timeLeft === 0) {
      onHide();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onHide]);

  return (
    <div className={`banner ${timeLeft <= 10 ? "warning" : ""}`}>
      <h2 className="banner-title">{text}</h2>
      <div className="timer-container">
        <p className="timer-icon">⏳</p>
        <p>This banner will disappear in {timeLeft} seconds</p>
      </div>
      {link && (
        <p className="banner-link-container">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-link"
          >
            {link}
          </a>
        </p>
      )}
    </div>
  );
}

export default Banner;
