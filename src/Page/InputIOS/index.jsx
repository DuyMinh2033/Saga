import { useEffect, useRef } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const activeInput = inputRefs.current.find(
  //       (input) => document.activeElement === input
  //     );
  //     if (activeInput) {
  //       activeInput.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       });
  //     }
  //   };
  //   const viewPort = window.visualViewport ? window.visualViewport : window;
  //   viewPort.addEventListener("resize", handleResize);

  //   return () => {
  //     viewPort.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const setViewportHeight = () => {
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   };
  //   const viewPort = window.visualViewport ? window.visualViewport : window;

  //   viewPort.addEventListener("resize", setViewportHeight);
  //   setViewportHeight(); // Gọi lần đầu khi component được render
  //   return () => viewPort.removeEventListener("resize", setViewportHeight);
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      window.scrollTo(0, document.body.scrollHeight); // Cuộn xuống cuối màn hình
    };
    const viewPort = window.visualViewport ? window.visualViewport : window;

    viewPort.addEventListener("resize", handleResize);
    return () => {
      viewPort.removeEventListener("resize", handleResize);
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
