import { useState, useEffect } from "react";
import "./styles.scss";

const InputIOS = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      // Khi bàn phím bật lên, innerHeight sẽ giảm
      const newHeight = window.innerHeight;
      if (newHeight < windowHeight) {
        setKeyboardHeight(windowHeight - newHeight);
      } else {
        setKeyboardHeight(0); // Bàn phím đóng
      }
      setWindowHeight(newHeight);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  const scrollToInput = (event) => {
    const remainingHeight = (windowHeight - keyboardHeight) / 2;
    event.target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    window.scrollTo(0, window.scrollY - remainingHeight);
  };

  return (
    <div
      className="scroll-header"
      style={{
        height: "100vh",
        overflowY: "auto",
        padding: "0 24px",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          position: "fixed",
          height: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          right: "0",
          left: "0",
          top: "0",
          background: "red",
        }}
      >
        Header
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "75px",
        }}
      >
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
      </div>
    </div>
  );
};

export default InputIOS;
