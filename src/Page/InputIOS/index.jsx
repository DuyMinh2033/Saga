import "./styles.scss";

function scrollIntoViewIfNeeded(event) {
  const element = event.target;
  const rect = element.getBoundingClientRect();
  const isInViewport =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  if (!isInViewport) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
}

const InputIOS = () => {
  const scrollToInput = (event) => {
    scrollIntoViewIfNeeded(event);
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
