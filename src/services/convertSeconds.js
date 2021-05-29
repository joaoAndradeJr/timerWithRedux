const convertSeconds = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return minutes + ':' + seconds;
}

export default convertSeconds;
