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

  //   const viewPort = window.visualViewport ? window.visualViewport : window;

  //   viewPort.addEventListener("resize", handleViewportChange);
  //   return () => {
  //     viewPort.removeEventListener("resize", handleViewportChange);
  //   };
  // }, []);

  useEffect(() => {
    const handleViewportChange = () => {
      const activeInput = document.activeElement;
      if (inputRefs.current.includes(activeInput)) {
        const headerFooterHeight = 166; // Tổng chiều cao của header và footer

        console.log("test", {
          offsetTop: activeInput.offsetTop,
          clientHeight: containerRef.current.clientHeight,
          activeOffset: activeInput.offsetHeight,
          total:
            activeInput.offsetTop -
            containerRef.current.clientHeight / 2 +
            activeInput.offsetHeight / 2 -
            headerFooterHeight,
        });

        containerRef.current.scrollTo({
          top:
            activeInput.offsetTop -
            containerRef.current.clientHeight / 2 +
            activeInput.offsetHeight / 2 -
            headerFooterHeight +
            100,
          behavior: "smooth",
        });
      }
    };

    const viewPort = window.visualViewport ? window.visualViewport : window;

    viewPort.addEventListener("resize", handleViewportChange);
    return () => {
      viewPort.removeEventListener("resize", handleViewportChange);
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
