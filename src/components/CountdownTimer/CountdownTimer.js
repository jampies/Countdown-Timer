import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TimerOutput from './TimerOutput/TimerOutput';
import TimerSpeedControls from './TimerSpeedControls/TimerSpeedControls';
import { TIMER_SPEEDS } from '../../config/constants';
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import audioManager from '../../services/audioManager/audioManager';

const CountdownTimer = () => {
  const [speed, setSpeed] = useState(TIMER_SPEEDS.Normal);
  const [totalTime, setTotalTime] = useState(1);
  const [currentTime, setCurrentTime] = useState(60);
  const [isActive, setIsActive] = useState(false);
  let timer;

  useEffect(() => {
    if (!isActive) {
      if (timer) return clearInterval(timer);
      return;
    }
    timer = setInterval(() => {
      setCurrentTime(prevcurrentTime => {
        if (prevcurrentTime <= 0) {
          setIsActive(false);
        }
        const timeRemaining = prevcurrentTime - 1;
        if (timeRemaining < 0) {
          audioManager.playAlarm();
          return 0;
        }
        return timeRemaining;
      });
    }, 1000 / speed);

    return () => {
      clearInterval(timer);
    };
  }, [isActive, speed]);

  return (
    <div className={styles.timerContainer}>
      <div className={styles.inputControls}>
        <TextField
          className='countdown-input'
          label='Minutes'
          type='number'
          min={1}
          onChange={(e) => {
            setTotalTime(e.target.value);
          }}
          inputProps={{
            'aria-label': 'Minutes',
            min: 1,
            step: 1
          }}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            setCurrentTime(parseFloat(totalTime) * 60);
            setIsActive(true);
          }}
        >
          Start
        </Button>
      </div>
      <div className={styles.outputContainer}>
        <TimerOutput currentTime={currentTime} totalTime={totalTime * 60} isActive={isActive} />
        <IconButton onClick={() => setIsActive(prevActive => !prevActive)}>{isActive ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}</IconButton>
      </div>
      <div>
        <TimerSpeedControls
          selected={speed}
          onChange={setSpeed}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
