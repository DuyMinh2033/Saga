import { useState } from "react";
import "./styles.scss";
import BottomSheet from "../../components/BottomSheet";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PinchZoomPDF = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="page__zoom">
      <BottomSheet open={open}>
        <div style={{ height: "400px", width: "100%" }}>
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
