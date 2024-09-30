/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

const remainingTime = 180;
import { forwardRef, useEffect, useRef } from "react";

// eslint-disable-next-line no-unused-vars
const Timer = forwardRef((props, ref) => {
  const { onReset } = props;
  const timerRef = useRef(null);
  const countRef = useRef(remainingTime);
  const displayRef = useRef(null);

  const formatSecondsDisplay = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const updateCountdown = () => {
    if (countRef.current > 0) {
      countRef.current -= 1;
      if (displayRef.current) {
        displayRef.current.textContent = formatSecondsDisplay(countRef.current);
      }
    } else {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (remainingTime) {
      timerRef.current = setInterval(updateCountdown, 1000);

      return () => {
        clearInterval(timerRef.current);
      };
    }
  }, []);

  useEffect(() => {
    onReset(() => {
      clearInterval(timerRef.current);
      countRef.current = remainingTime;
      timerRef.current = setInterval(updateCountdown, 1000);
    });
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <p ref={displayRef} />
    </div>
  );
});

export default Timer;
