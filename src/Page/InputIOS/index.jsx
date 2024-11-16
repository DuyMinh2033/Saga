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
  //   const bounce = debounceChangeOption(handleViewportChange, 50);

  //   if (window.visualViewport) {
  //     window.visualViewport.addEventListener("resize", bounce);
  //     return () => {
  //       window.visualViewport.removeEventListener("resize", bounce);
  //     };
  //   } else {
  //     window.addEventListener("resize", bounce);
  //     return () => {
  //       window.removeEventListener("resize", bounce);
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const handleViewportChange = () => {
      const activeInput = document.activeElement;
      if (inputRefs.current.includes(activeInput)) {
        const headerFooterHeight = 166; // Tổng chiều cao của header và footer

        // Cuộn đến vị trí của input đang được focus trong container
        containerRef.current.scrollTo({
          top:
            activeInput.offsetTop -
            window.innerHeight / 2 +
            activeInput.offsetHeight / 2 -
            headerFooterHeight,
          behavior: "auto", // Hoặc "smooth" nếu cần cuộn mượt
        });
      }
    };

    const bounce = debounceChangeOption(handleViewportChange, 50);

    // Thêm listener cho sự kiện resize
    window.addEventListener("resize", bounce);

    return () => {
      window.removeEventListener("resize", bounce);
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
      <div className="fixed__btn">
        <button className="button">Submit</button>
      </div>
    </div>
  );
};

export default InputIOS;
