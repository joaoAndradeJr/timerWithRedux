const convertSeconds = (time) => {
  const minutes = Math.floor(time / 60) < 10 ? '0' + Math.floor(time / 60) : Math.floor(time / 60);
  const seconds = time % 60 < 10 ? '0' + time % 60 : time % 60;
  return minutes + ':' + seconds;
}

export default convertSeconds;
