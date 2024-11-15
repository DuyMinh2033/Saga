import { useEffect, useRef, useState } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRefs = useRef([]);
  const [bottomOffset, setBottomOffset] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      // Kiểm tra nếu visualViewport.height nhỏ hơn innerHeight, nghĩa là bàn phím đang bật lên
      if (
        window.visualViewport &&
        window.visualViewport.height < window.innerHeight
      ) {
        const keyboardHeight =
          window.innerHeight - window.visualViewport.height;
        setBottomOffset(keyboardHeight);
      } else {
        setBottomOffset(0); // Đặt lại khi bàn phím đóng
      }
    };

    window.visualViewport.addEventListener("resize", handleResize);

    return () => {
      window.visualViewport.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ paddingBottom: bottomOffset }}>
      <input type="text" placeholder="Nhập vào đây để bật bàn phím" />
      <button
        style={{
          position: "fixed",
          bottom: bottomOffset + 10, // Đẩy nút lên trên bàn phím với khoảng cách 10px
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Button cố định
      </button>
    </div>
  );
};

export default InputIOS;
