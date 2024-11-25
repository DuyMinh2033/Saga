import { useState } from "react";
import "./styles.scss";
import BottomSheet from "../../components/BottomSheet";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useGesture } from "react-use-gesture";
const PinchZoomPDF = () => {
  const [open, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const bind = useGesture(
    {
      onPinch: ({ offset: [s], memo = scale }) => {
        const total = Math.max(0.5, Math.min(4, s * memo));
        setScale(() => (total > 1 ? total : 1));
        return memo;
      },
    },
    { pinch: { scaleBounds: { min: 0.5, max: 4 } } }
  );

  console.log("s", scale);
  return (
    <div className="page__zoom">
      <BottomSheet open={open}>
        <div
          {...bind()}
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
