/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import animateScrollTo from 'animated-scroll-to';
import './styles.scss';

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(['test']);
  console.log('🚀 ~ InputIOS ~ cachedData:', cachedData);

  const handleFocus = async (event) => {
    // setTimeout(() => {
    //   window.scrollTo({
    //     top: document.body.scrollHeight,
    //     behavior: 'smooth',
    //   });
    // }, 300);
    // window.addEventListener('scrollend', () => {
    //   alert('scroll end');
    //   event.target.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'center',
    //   });
    // });

    await animateScrollTo(document.body.scrollHeight);
    animateScrollTo(event.target, { speed: 500 });
  };

  return (
    <div className="">
      <div
        id="content__container"
        className="content__container"
        ref={containerRef}
        style={{
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <input
                className="input__style"
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                placeholder={`Input ${index + 1}`}
                onFocus={handleFocus}
              />
            ))}
        </div>
        <div className="fixed__btn" ref={buttonRef}>
          <button className="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default InputIOS;
