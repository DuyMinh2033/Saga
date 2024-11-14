import { useEffect, useRef } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (document.activeElement === inputRef.current) {
        setTimeout(() => {
          inputRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {Array(150)
          .fill(0)
          .map((_, index) => (
            <input key={index} type="text" placeholder={`Input ${index + 1}`} />
          ))}
      </div>
    </div>
  );
};

export default InputIOS;
