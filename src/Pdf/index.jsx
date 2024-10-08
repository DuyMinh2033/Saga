import file from "../file/pdf.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Pdf = () => {
  return (
    <div style={{ height: "500px", width: "200px" }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={file} />
      </Worker>
    </div>
  );
};

export default Pdf;
