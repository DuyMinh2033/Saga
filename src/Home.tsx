/* eslint-disable no-undef */
import { useRef } from 'react';

const Home = () => {
  const ref = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <input
        type="text"
        inputMode="numeric"
        ref={ref}
        autoComplete="off"
        autoCapitalize="off"
        autoFocus
      />

      <button ref={buttonRef} onClick={() => ref.current?.focus()}>
        click to focus
      </button>
    </div>
  );
};

export default Home;
