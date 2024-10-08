import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [test, setTest] = useState(0);
  const timeOut = useRef(null);

  const start = () => {
    setTimeout(() => {
      setTest(test + 1);
    }, 1000);
  };

  useEffect(() => {
    if (test !== 0) {
      timeOut.current = setTimeout(() => {
        setTest(test + 1);
      }, 1000);
    }
    return () => clearTimeout(timeOut.current);
  }, [test]);

  const reset = () => {
    clearTimeout(timeOut.current);
    setTest(0);
  };

  return (
    <div>
      <p>{test}</p>
      <div>
        <button onClick={() => clearTimeout(timeOut.current)}>stop</button>
        <button onClick={start}>start</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Demo;
