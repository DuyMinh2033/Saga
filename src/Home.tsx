/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { useEffect, useRef, useState } from 'react';
const Home = () => {
  const ref = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput((prev) => !prev);
    console.log('showInput:', showInput);
  };

  useEffect(() => {
    if (showInput && ref.current) {
      setTimeout(() => {
        ref.current?.focus();
      }, 0);
      console.log('Input focused');
    }
  }, [showInput]);

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
      <button ref={buttonRef} onClick={handleClick}>
        {showInput ? 'hide input' : 'show Input'}
      </button>

      {showInput && (
        <input
          id="input"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          autoCapitalize="off"
          autoFocus={true}
          ref={ref}
        />
      )}
    </div>
  );
};

export default Home;
