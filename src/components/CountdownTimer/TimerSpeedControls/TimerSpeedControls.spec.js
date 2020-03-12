import assert from 'assert';
import TimerSpeedControls from './TimerSpeedControls';
import React from 'react';
import { shallow } from 'enzyme';
import { TIMER_SPEEDS } from '../../../config/constants';
import td from 'testdouble';

describe('TimerSpeedControls', () => {
  let component;
  let mockOnChange;

  beforeEach(() => {
    component = mountComponent({});
  });

  afterEach(() => {
    td.reset();
  });

  function mountComponent ({ selected = TIMER_SPEEDS.Normal }) {
    mockOnChange = td.func('onChange');
    return shallow(<TimerSpeedControls selected={selected} onChange={mockOnChange} />);
  }

  it('should set selected as primary', () => {
    component.setProps({ selected: TIMER_SPEEDS.Fast });
    assert(component.find('[color="primary"]').text().includes('1.5X'));
  });

  it('should set unselected as default', () => {
    assert(component.find('#speed-button-Fastest').prop('color').includes('default'));
  });
});
