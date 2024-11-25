import { useState, useRef, useEffect } from "react";
import "./styles.scss";
import BottomSheet from "../../components/BottomSheet";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PinchZoomPDF = () => {
  const [open, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);
  const initialDistance = useRef(0);

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      initialDistance.current = Math.sqrt(
        (touch1.pageX - touch2.pageX) ** 2 + (touch1.pageY - touch2.pageY) ** 2
      );
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const newDistance = Math.sqrt(
        (touch1.pageX - touch2.pageX) ** 2 + (touch1.pageY - touch2.pageY) ** 2
      );

      const scaleChange = newDistance / initialDistance.current;
      setScale((prevScale) => {
        const newScale = Math.max(1, Math.min(3, prevScale * scaleChange));
        return newScale;
      });
      initialDistance.current = newDistance; // cập nhật khoảng cách ban đầu
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="page__zoom">
      <BottomSheet open={open}>
        <div
          ref={containerRef}
          style={{
            touchAction: "none",
            transform: `scale(${scale})`,
            height: "400px",
            width: "100%",
          }}
        >
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={`https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf`}
            />
          </Worker>
        </div>
      </BottomSheet>
      <button className="btn" onClick={() => setIsOpen(true)}>
        Click me
      </button>
    </div>
  );
};

export default PinchZoomPDF;
