import assert from 'assert';
import TimerOutput from './TimerOutput';
import React from 'react';
import { shallow } from 'enzyme';
import styles from './TimerOutput.scss';

describe('TimerOutput', () => {
  let component;

  beforeEach(() => {
    component = mountComponent({ });
  });

  function mountComponent ({ startTime = 300, currentTime = 200 }) {
    return shallow(<TimerOutput startTime={startTime} currentTime={currentTime} />);
  }

  it.only('should format the timer correctly', () => {
    assert.deepStrictEqual(component.find(`.${styles.remainingTime}`).text(), '03:20', 'Time is incorrectly formatted');
  });

  it.only('should not display text when not halfway there', () => {
    component.setProps({ currentTime: 151 });
    assert.notdeepStrictEqual(component.find(`.${styles.textOutput}`).text(), 'More than halfway there!', 'Text shown before halfway');
  });

  it.only('should display text when halfway there', () => {
    component.setProps({ currentTime: 149 });
    assert.deepStrictEqual(component.find(`.${styles.textOutput}`).text(), 'More than halfway there!', 'Text not shown halfway');
  });

  it.only('should display times up when timer is 0', () => {
    component.setProps({ currentTime: 0 });
    assert.deepStrictEqual(component.find(`.${styles.textOutput}`).text(), 'Time’s up!', 'Finishing text not shown');
  });

  it.only('should display in red when time is less than 20 seconds', () => {
    component.setProps({ currentTime: 19 });
    assert(component.find(`.${styles.textOutput}`).hasClass(`.${styles.red}`), 'Text not shown in red when 20 seconds remaining');
  });

  it.only('should have flashing class when less than 10 seconds', () => {
    component.setProps({ currentTime: 9 });
    assert(component.find(`.${styles.textOutput}`).hasClass(`.${styles.flashing}`), 'Text not flashing when 10 seconds remaining');
  });
});
