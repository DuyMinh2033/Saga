import { useEffect, useRef } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRefs = useRef([]);

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
    const handleFocus = (event) => {
      const activeInput = event.target;
      if (inputRefs.current.includes(activeInput)) {
        setTimeout(() => {
          activeInput.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 300); // Slight delay to allow for keyboard appearance on mobile
      }
    };

    const addFocusListeners = () => {
      inputRefs.current.forEach((input) => {
        input.addEventListener("focus", handleFocus);
      });
    };

    const removeFocusListeners = () => {
      inputRefs.current.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
      });
    };

    // Set up listeners initially
    addFocusListeners();

    // Fallback for resize, mainly helpful on Android
    const handleResize = () => {
      const activeInput = document.activeElement;
      if (inputRefs.current.includes(activeInput)) {
        activeInput.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      removeFocusListeners();
      window.removeEventListener("resize", handleResize);
    };
  }, [inputRefs]);

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
