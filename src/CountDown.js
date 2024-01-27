import { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time - min * 60);

  if (min <= 10) min = +min;
  if (sec <= 10) sec = "0" + sec;
  return min + ":" + sec;
};

function CountDown({ seconds, onStart, setSeconds }) {
  const [countdown, setCountdown] = useState(seconds);

  const timerId = useRef();
  useEffect(() => {
    if (onStart) {
      timerId.current = setInterval((prev) => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId.current);
    } else setCountdown(seconds);
  }, [onStart]);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setSeconds(0);
    }
  }, [countdown]);
  return <h6>{formatTime(countdown)}</h6>;
}
export default CountDown;
