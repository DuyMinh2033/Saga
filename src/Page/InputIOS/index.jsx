import { useEffect, useRef } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);
  // useEffect(() => {
  //   const handleViewportChange = () => {
  //     console.log("test", window.visualViewport.height / 2);
  //     const activeInput = document.activeElement;
  //     if (inputRefs.current.includes(activeInput)) {
  //       activeInput.scrollIntoView({
  //         behavior: "smooth",
  //         block: "nearest",
  //         inline: "end",
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
      const container = containerRef.current;

      if (inputRefs.current.includes(activeInput) && container) {
        // Lấy vị trí của element so với container
        const elementRect = activeInput.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const relativeElementTop = elementRect.top - containerRect.top;

        // Tính toán vị trí scroll mong muốn
        const middleOfViewport = window.visualViewport
          ? window.visualViewport.height / 2
          : window.innerHeight / 2;

        // Tính toán vị trí scroll để element nằm ở giữa viewport
        const scrollPosition =
          relativeElementTop + container.scrollTop - middleOfViewport;

        // Scroll container đến vị trí đã tính
        container.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
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
