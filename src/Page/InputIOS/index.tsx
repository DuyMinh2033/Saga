/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import './styles.scss';

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(['test']);
  console.log('🚀 ~ InputIOS ~ cachedData:', cachedData);

  const handleFocus = (event) => {
    const element = event.target;
    const container = containerRef.current;

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 300);

    setTimeout(() => {
      const containerRect = container?.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Tính toạ độ để scroll phần tử ra giữa container
      const elementOffset =
        elementRect.top -
        containerRect.top + // vị trí tương đối trong container
        container?.scrollTop - // thêm phần đã scroll
        container?.clientHeight / 2 + // trừ nửa chiều cao container
        elementRect.height / 2; // cộng nửa chiều cao input

      container?.scrollTo({
        top: elementOffset - 150,
        behavior: 'smooth',
      });
    }, 2000);
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
