import { useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import './styles.scss';

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(['test']); // Lấy từ cache
  console.log('🚀 ~ InputIOS ~ cachedData:', cachedData);
  // useEffect(() => {
  //   const handleResize = () => {
  //     const newHeight = window.innerHeight;
  //     const heightDiff = window.outerHeight - newHeight;
  //     console.log("🚀 ~ handleResize ~ newHeight:", { newHeight, heightDiff });
  //     document.documentElement.style.setProperty(
  //       "--heightKeyBoard",
  //       heightDiff
  //     );
  //   };
  //   const viewPort = window.visualViewport ? window.visualViewport : window;

  //   viewPort.addEventListener("resize", handleResize);
  //   return () => {
  //     viewPort.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div
      className="scroll-header"
      style={{
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'sticky',
          height: '56px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          right: '0',
          left: '0',
          top: '0',
          background: 'green',
        }}
      >
        Header
      </div>

      <div
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
