import React, { useState } from 'react';
import styles from './CountdownTimer.module.scss';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TimerOutput from './TimerOutput/TimerOutput';
import TimerSpeedControls from './TimerSpeedControls/TimerSpeedControls';
import { TIMER_SPEEDS } from '../../config/constants';

const CountdownTimer = () => {
  const [speed, setSpeed] = useState(TIMER_SPEEDS.Normal);

  return (
    <div className={styles.timerContainer}>
      <div className={styles.inputControls}>
        <OutlinedInput
          id='countdown-input'
          label='Countdown'
          endAdornment={<InputAdornment position='end'>Minutes</InputAdornment>}
          type='number'
          inputProps={{
            'aria-label': 'Minutes'
          }}
          labelWidth={70}
        />
        <Button variant='contained' color='primary'>
          Start
        </Button>
      </div>
      <div>
        <TimerOutput />
      </div>
      <div>
        <TimerSpeedControls selected={speed} onChange={setSpeed} />
      </div>
    </div>
  );
};

export default CountdownTimer;
