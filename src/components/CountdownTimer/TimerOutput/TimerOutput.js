import React from 'react';
import styles from './TimerOutput.scss';
import { formatSeconds } from '../../../services/formatter';
import classnames from 'classnames';

const TimerOutput = ({ startTime, currentTime }) => {
  let text = '';
  const halfway = currentTime / startTime < 0.5;
  const finished = currentTime <= 0;

  if (halfway) {
    text = 'More than halfway there!';
  }

  if (finished) {
    text = 'Time’s up!';
  }

  const textClasses = classnames({
    [styles.textOutput]: true,
    [styles.red]: currentTime <= 20,
    [styles.flashing]: currentTime <= 10
  });

  return (
    <div>
      <h4 className={textClasses}>{text}</h4>
      <h1 className={styles.remainingTime}>{formatSeconds(currentTime)}</h1>
    </div>
  );
};

export default TimerOutput;
