/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

const Home = () => {
  const ref = useRef<null>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      ref.current?.focus();
    }, 100);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div>
      <input type="text" inputMode="numeric" ref={ref} autoComplete="off" autoCapitalize="off" />
    </div>
  );
};

export default Home;
