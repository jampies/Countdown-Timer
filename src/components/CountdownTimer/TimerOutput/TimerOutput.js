import React from 'react';
import styles from './TimerOutput.module.scss';
import { formatSeconds } from '../../../services/formatter/formatter';
import classnames from 'classnames';

const TimerOutput = ({ totalTime, currentTime, isActive }) => {
  let text = '';
  const halfway = currentTime / totalTime < 0.5;
  const finished = currentTime <= 0;

  if (halfway) {
    text = 'More than halfway there!';
  }

  if (finished) {
    text = 'Time’s up!';
  }

  const textClasses = classnames({
    [styles.textOutputContainer]: true,
    [styles.red]: isActive && currentTime <= 20,
    [styles.flashing]: isActive && currentTime <= 10
  });

  return (
    <div className={textClasses}>
      <h4 className={styles.textOutput}>{isActive && text}</h4>
      <h1 className={styles.remainingTime}>{formatSeconds(currentTime)}</h1>
    </div>
  );
};

export default TimerOutput;
