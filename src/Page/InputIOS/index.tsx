/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { useEffect, useRef } from 'react';
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
    setTimeout(() => {
      // Scroll container tới vị trí của input (đảm bảo input lộ ra)
      event.target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      // Đồng thời scroll xuống cuối trang để đảm bảo button không bị che
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 300); // delay để chờ bàn phím iOS hiển thị
  };

  return (
    <div className="scroll-header">
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
