import "./styles.scss";

const InputIOS = () => {
  function scrollIntoViewIfNeeded(element, options = {}) {
    if (!element) return;

    // Lấy thông tin vị trí của phần tử và của container hiện tại
    const rect = element.getBoundingClientRect();
    const { top, left, bottom, right } = rect;

    // Lấy thông tin của viewport (khung nhìn của trình duyệt)
    const { innerHeight, innerWidth } = window;

    // Kiểm tra nếu phần tử đã ở trong viewport
    const isInViewport =
      top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;

    // Nếu phần tử đã trong viewport rồi, không làm gì
    if (isInViewport) return;

    // Tính toán vị trí cuộn
    const scrollOptions = {
      behavior: options.behavior || "smooth",
      block: options.block || "center", // Căn chỉnh dọc
      inline: options.inline || "center", // Căn chỉnh ngang
    };

    // Cuộn đến phần tử
    element.scrollIntoView(scrollOptions);
  }

  const handleFocus = (e) => {
    const element = e.target;
    scrollIntoViewIfNeeded(element, {
      behavior: "smooth",
      block: "center",
      inline: "center",
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
        {Array(150)
          .fill(0)
          .map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Input ${index + 1}`}
              onFocus={handleFocus}
            />
          ))}
      </div>
    </div>
  );
};

export default InputIOS;
