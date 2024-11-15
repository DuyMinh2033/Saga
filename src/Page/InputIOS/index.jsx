import { useEffect, useRef } from "react";
import "./styles.scss";

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);

  const debounceChangeOption = (cb, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleViewportChange = () => {
      console.log("window.visualViewport", window.visualViewport);
      const activeInput = document.activeElement;
      if (inputRefs.current.includes(activeInput)) {
        activeInput.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };
    const bounce = debounceChangeOption(handleViewportChange, 300);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", bounce);
      return () => {
        window.visualViewport.removeEventListener("resize", bounce);
      };
    } else {
      window.addEventListener("resize", bounce);
      return () => {
        window.removeEventListener("resize", bounce);
      };
    }
  }, []);

  // const handleViewportChange = () => {
  //   const activeInput = document.activeElement;

  //   // Kiểm tra nếu phần tử đang active là một trong những input bạn quan tâm
  //   if (inputRefs.current.includes(activeInput)) {
  //     // Lấy kích thước của viewport
  //     const viewportHeight = window.visualViewport
  //       ? window.visualViewport.height
  //       : window.innerHeight;

  //     // Tính toán vị trí cần thiết để field nằm ở giữa viewport
  //     const offset = (viewportHeight - 166) / 2;
  //     console.log("activeInput.offsetTop", activeInput.offsetTop);
  //     // Đảm bảo `containerRef` là phần tử cha chứa tất cả input
  //     containerRef.current.scrollTo({
  //       top: activeInput.offsetTop - offset,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (window.visualViewport) {
  //     window.visualViewport.addEventListener("resize", bounce);
  //   } else {
  //     window.addEventListener("resize", bounce);
  //   }

  //   // Cleanup khi unmount
  //   return () => {
  //     if (window.visualViewport) {
  //       window.visualViewport.removeEventListener(
  //         "resize",
  //         handleViewportChange
  //       );
  //     } else {
  //       window.removeEventListener("resize", handleViewportChange);
  //     }
  //   };
  // }, []);

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
      <div className="fixed__btn">
        <button className="button">Submit</button>
      </div>
    </div>
  );
};

export default InputIOS;
