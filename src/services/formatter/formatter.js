export const formatSeconds = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.round(seconds % 60);

  if (minutes < 10) { minutes = '0' + minutes; }
  if (remainingSeconds < 10) { remainingSeconds = '0' + remainingSeconds; }
  return minutes + ':' + remainingSeconds;
};
