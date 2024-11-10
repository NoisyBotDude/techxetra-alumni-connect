import React, { useState, useEffect } from 'react';

const EventCountdown = ({ start }) => {
  const [timeRemaining, setTimeRemaining] = useState({});
  const startTime = new Date(start);
  console.log(startTime);

  useEffect(() => {
    // Update countdown every second
    const countdown = setInterval(() => {
      const now = new Date();
      const distance = startTime - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(countdown);
        setTimeRemaining(null); // Event has started
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, [startTime]);

  return (
    <div className="event-countdown">
      <h2>Date: {startTime.toLocaleString()}</h2>
      {timeRemaining ? (
        <div>
          <p>
          Countdown:{timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
          </p>
        </div>
      ) : ( 
        <p>The event has started!</p>
      )}
    </div>
  );
};

export default EventCountdown;