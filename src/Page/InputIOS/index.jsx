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
  //         block: "nearest",
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
    const handleResize = () => {
      // Lấy chiều cao của viewport (bao gồm cả khi bàn phím xuất hiện)
      const viewportHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

      const activeInput = document.activeElement; // Trường input hiện tại đang được focus
      if (inputRefs.current.includes(activeInput)) {
        // Lấy vị trí của trường input đang focus trong viewport
        const inputRect = activeInput.getBoundingClientRect();
        const inputTop = inputRect.top;

        // Tính toán vị trí cuộn sao cho trường input nằm ở giữa của viewport
        const scrollToPosition =
          inputTop - (viewportHeight / 2 - inputRect.height / 2);

        // Cuộn trang đến vị trí của trường input sao cho nó nằm chính giữa
        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    };

    // Lắng nghe sự kiện thay đổi kích thước viewport
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      return () => {
        window.visualViewport.removeEventListener("resize", handleResize);
      };
    } else {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
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
