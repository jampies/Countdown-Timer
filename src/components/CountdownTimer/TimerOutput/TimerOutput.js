import React from 'react';
import styles from './TimerOutput.scss';

const TimerOutput = ({ startTime, currentTime }) => {
  return (
    <div>
      <h4 className={styles.textOutput}>This is the helpful text</h4>
      <h1 className={styles.remainingTime}>{currentTime}</h1>
    </div>
  );
};

export default TimerOutput;
