import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const LimitedOffer = () => {
  const [diff, setDiff] = useState(0);
  const [date, setDate] = useState('2023/07/31');

  const consoleFunction = (str) => {
    let date = str;
    setDate(date);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const end = new Date(date).getTime();
      const diff = end - Date.now();
      setDiff(diff);
    }, 10);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [date]); // Make sure to re-run the effect only when 'date' changes

  window.consoleFunction = consoleFunction;

  const Completionist = () => <p>Offer Ended</p>;

  return (
    <div>
      <Countdown date={Date.now() + diff}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default LimitedOffer;

