import assert from 'assert';
import CountdownTimer from './CountdownTimer';
import React from 'react';
import { shallow } from 'enzyme';
import TimerOutput from './TimerOutput/TimerOutput';

describe('CountdownTimer', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CountdownTimer />);
  });

  it.only('should render correctly', () => {
    assert(component.find(TimerOutput).exists());
  });
});
