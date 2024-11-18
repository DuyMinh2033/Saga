import { useEffect, useRef } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleFocus = (event) => {
      const activeInput = event.target;
      if (inputRefs.current.includes(activeInput)) {
        const rect = activeInput.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const visualViewport = window.visualViewport || window;

        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight,
          behavior: "smooth",
        });

        // Kiểm tra xem input có bị che bởi bàn phím không
        if (rect.bottom > visualViewport.height - buttonRect.height) {
          // Cuộn container để input nằm trên bàn phím
          containerRef.current.scrollTo({
            top:
              containerRef.current.scrollTop +
              rect.bottom -
              visualViewport.height +
              buttonRect.height +
              20, // 20 là khoảng cách thêm vào để có khoảng trống nhỏ giữa input và bàn phím
            behavior: "smooth",
          });
        }
      }
    };

    // Thêm sự kiện focus cho mỗi input
    inputRefs.current.forEach((input) => {
      input.addEventListener("focus", handleFocus);
    });

    return () => {
      // Xóa sự kiện focus khi component unmount
      inputRefs.current.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
      });
    };
  }, []);

  return (
    <div
      className="scroll-header"
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "sticky",
          height: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          right: "0",
          left: "0",
          top: "0",
          background: "green",
        }}
      >
        Header
      </div>

      <div
        className="content__container"
        ref={containerRef}
        style={{
          padding: "0 24px",
          paddingBottom: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
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
      </div>
      <div className="fixed__btn" ref={buttonRef}>
        <button className="button">Submit</button>
      </div>
    </div>
  );
};

export default InputIOS;
