/* eslint-disable no-debugger */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';
const Home = () => {
  const ref = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let timeOut: number | undefined;
    const input = document.getElementById('input-text') as HTMLInputElement;
    if (input || ref.current) {
      timeOut = setTimeout(() => {
        console.log('focus', input);
        input.focus();
        // ref.current?.focus();
      }, 0);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <input
        id="input-text"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        autoCapitalize="off"
        className="input-box"
        ref={ref}
      />
      <button ref={buttonRef} onClick={() => ref.current?.focus()}>
        click to focus
      </button>
    </div>
  );
};

export default Home;
