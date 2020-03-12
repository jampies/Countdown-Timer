import React from 'react';
import Button from '@material-ui/core/Button';
import { TIMER_SPEEDS } from '../../../config/constants';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const TimerSpeedControls = ({ onChange, selected }) => {
  return (
    <div>
      <ButtonGroup fullWidth>
        {Object.keys(TIMER_SPEEDS).map(s => {
          return (
            <Button
              id={`speed-button-${s}`}
              key={s}
              onClick={() => onChange(TIMER_SPEEDS[s])}
              color={selected === TIMER_SPEEDS[s] ? 'primary' : 'default'}
              variant='contained'
            >
              {TIMER_SPEEDS[s]}X
            </Button>
          );
        })}
      </ButtonGroup>

    </div>
  );
};

export default TimerSpeedControls;
