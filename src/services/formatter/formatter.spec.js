import assert from 'assert';
import { formatSeconds } from './formatter';

describe('formatSeconds', () => {
  it('should do format seconds as MM:SS', () => {
    assert.deepStrictEqual(formatSeconds(330), '05:30');
  });

  it('should do format seconds correctly when no minutes', () => {
    assert.deepStrictEqual(formatSeconds(42), '00:42');
  });

  it('should do format seconds correctly when exactly on a minute', () => {
    assert.deepStrictEqual(formatSeconds(300), '05:00');
  });
});
