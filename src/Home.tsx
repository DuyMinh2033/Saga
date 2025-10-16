/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

const Home = () => {
  const ref = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      buttonRef.current?.click();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <input type="text" inputMode="numeric" ref={ref} autoComplete="off" autoCapitalize="off" />

      <button ref={buttonRef} onClick={() => ref.current?.focus()}>
        click to focus
      </button>
    </div>
  );
};

export default Home;
