import UIFx from 'uifx';
import AlarmAudio from '../../resources/sounds/381382__coltonmanz__alarm.wav';

const beep = new UIFx({ asset: AlarmAudio });

export default {
  playAlarm: (volume = 0.5) => {
    beep.play(volume);
  }
};
