import { useEffect, useRef } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const handleViewportChange = () => {
  //     const activeInput = document.activeElement;
  //     if (inputRefs.current.includes(activeInput)) {
  //       activeInput.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       });
  //     }
  //   };
  //   if (window.visualViewport) {
  //     window.visualViewport.addEventListener("resize", handleViewportChange);
  //     return () => {
  //       window.visualViewport.removeEventListener(
  //         "resize",
  //         handleViewportChange
  //       );
  //     };
  //   } else {
  //     window.addEventListener("resize", handleViewportChange);
  //     return () => {
  //       window.removeEventListener("resize", handleViewportChange);
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const handleViewportChange = () => {
      const activeInput = document.activeElement;
      // eslint-disable-next-line no-debugger
      if (inputRefs.current.includes(activeInput)) {
        const targetRef = inputRefs.current.find((ref) => ref === activeInput);
        // debugger;
        const containerHeight = containerRef.current.offsetHeight;
        const targetPosition = targetRef.offsetTop;
        const targetHeight = targetRef.offsetHeight;
        const scrollTo =
          targetPosition - containerHeight / 2 + targetHeight / 2;
        containerRef.current.scrollTop = scrollTo - 100;
      }
    };
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportChange);
      return () => {
        window.visualViewport.removeEventListener(
          "resize",
          handleViewportChange
        );
      };
    } else {
      window.addEventListener("resize", handleViewportChange);
      return () => {
        window.removeEventListener("resize", handleViewportChange);
      };
    }
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
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          padding: "0 24px",
          paddingBottom: "200px",
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
      <div className="fixed__btn">
        <button className="button">Submit</button>
      </div>
    </div>
  );
};

export default InputIOS;
