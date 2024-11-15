import { useRef } from "react";
import "./styles.scss";
import useRestoreSelection from "../TestOpenKeyboard/useKeyboard";

const InputIOS = () => {
  const inputRefs = useRef([]);
  const containerRef = useRef(null);
  useRestoreSelection();
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

  // useEffect(() => {
  //   const handleViewportChange = () => {
  //     const activeInput = document.activeElement;
  //     if (inputRefs.current.includes(activeInput)) {
  //       const targetRef = inputRefs.current.find((ref) => ref === activeInput);
  //       // debugger;
  //       const containerHeight = containerRef.current.offsetHeight; // Chiều cao container
  //       const targetPosition = targetRef.offsetTop; // Vị trí top của input đang active
  //       const targetHeight = targetRef.offsetHeight; // Chiều cao của input

  //       // 2. Tính toán vị trí scroll cần thiết để căn giữa
  //       const scrollTo = targetPosition - (containerHeight - targetHeight) / 2;

  //       containerRef.current.scrollTop = scrollTo - 100;
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

  // useEffect(() => {
  //   const handleViewportChange = () => {
  //     const activeInput = document.activeElement;

  //     // Kiểm tra nếu activeInput nằm trong inputRefs
  //     if (inputRefs.current.includes(activeInput)) {
  //       const targetRef = activeInput;
  //       const container = containerRef.current;

  //       if (!container || !targetRef) return;

  //       const containerHeight = container.offsetHeight; // Chiều cao container
  //       const targetPosition = targetRef.offsetTop; // Vị trí top của input đang active
  //       const targetHeight = targetRef.offsetHeight; // Chiều cao của input

  //       console.log("containerHeight:", containerHeight);
  //       console.log("targetPosition:", targetPosition);
  //       console.log("targetHeight:", targetHeight);
  //       // Tính toán vị trí scroll cần thiết để căn giữa
  //       const scrollTo = Math.max(
  //         0,
  //         targetPosition - (containerHeight - targetHeight) / 2
  //       );

  //       // Áp dụng giá trị scroll mới
  //       container.scrollTop = scrollTo - 100; // Thêm offset nếu cần
  //     }
  //   };

  //   const resizeEvent = window.visualViewport ? "resize" : "resize";
  //   const viewport = window.visualViewport || window;

  //   viewport.addEventListener(resizeEvent, handleViewportChange);

  //   return () => {
  //     viewport.removeEventListener(resizeEvent, handleViewportChange);
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
