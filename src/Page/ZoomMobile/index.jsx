import { useRef, useState } from "react";
import "./styles.scss";
const PinchZoomPDF = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  const handleTouchMove = (event) => {
    if (event.touches.length === 2) {
      // Tính toán khoảng cách giữa hai ngón tay
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.pageX - touch1.pageX, 2) +
          Math.pow(touch2.pageY - touch1.pageY, 2)
      );

      // Lưu trạng thái scale
      setScale((prevScale) =>
        Math.min(Math.max(prevScale + distance * 0.001, 1), 3)
      );
    }
  };

  return (
    <div className="page__zoom">
      <div
        ref={containerRef}
        onTouchMove={handleTouchMove}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          touchAction: "none",
        }}
      >
        <img
          src="https://cdn.tgdd.vn/Files/2022/03/31/1423175/chuyen-anh-sang-pdf.jpg"
          alt="PDF Preview"
          className="img__zom"
        />
      </div>
    </div>
  );
};

export default PinchZoomPDF;
