import assert from 'assert';
import CountdownTimer from './CountdownTimer';
import React from 'react';
import { shallow } from 'enzyme';

describe('CountdownTimer', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CountdownTimer />);
  });

  it('should render test text', () => {
    assert(component.text().includes('Countdown Timer'));
  });
});
