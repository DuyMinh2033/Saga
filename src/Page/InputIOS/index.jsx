import "./styles.scss";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";

const InputIOS = () => {
  const scrollToInput = (event) => {
    scrollIntoViewIfNeeded(event.target, {
      behavior: "smooth",
      block: "center",
      scrollMode: "if-needed",
    });
  };

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
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
        <input type="text" onFocus={scrollToInput} />
      </div>
    </div>
  );
};

export default InputIOS;
