/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

const Home = () => {
  const ref = useRef<null>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      ref.current?.focus();
    }, 200);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <input type="text" inputMode="numeric" ref={ref} autoComplete="off" autoCapitalize="off" />
    </div>
  );
};

export default Home;
