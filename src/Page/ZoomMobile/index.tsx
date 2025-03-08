// import { useState, useRef } from "react";
// import "./styles.scss";
// import BottomSheet from "../../components/BottomSheet";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// const PinchZoomPDF = () => {
//   const containerRef = useRef(null);
//   const [open, setIsOpen] = useState(false);
//   const [scale, setScale] = useState(1);

//   const initialDistance = useRef(0);
//   const deviceWidth =
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth;

//   const [origin, setOrigin] = useState({ x: 0, y: 0 });
//   const lastDistanceRef = useRef(null);

//   const handleTouchStart = (e) => {
//     if (e.touches.length === 2) {
//       const distance = getDistance(e.touches);
//       lastDistanceRef.current = distance;
//       const rect = containerRef.current.getBoundingClientRect();
//       const x = (e.touches[0].pageX + e.touches[1].pageX) / 2 - rect.left;
//       const y = (e.touches[0].pageY + e.touches[1].pageY) / 2 - rect.top;
//       setOrigin({ x, y });
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (e.touches.length === 2) {
//       const distance = getDistance(e.touches);
//       const scaleChange = distance / lastDistanceRef.current;
//       setScale((prevScale) =>
//         Math.max(1, Math.min(prevScale * scaleChange, 4))
//       );
//       lastDistanceRef.current = distance;
//     }
//   };

//   const getDistance = (touches) => {
//     const [touch1, touch2] = touches;
//     const dx = touch2.pageX - touch1.pageX;
//     const dy = touch2.pageY - touch1.pageY;
//     return Math.sqrt(dx * dx + dy * dy);
//   };
//   console.log("scale", { scale, origin });
//   return (
//     <div className="page__zoom">
//       <BottomSheet open={open}>
//         <div
//           ref={containerRef}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//         >
//           <div
//             style={{
//               transform: `scale(${scale})`,
//               transformOrigin: `${origin.x}px ${origin.y}px`,
//               transition: "transform 0.1s ease-out",
//               overflow: "auto",
//               height: "500px",
//             }}
//           >
//             <Worker
//               workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
//             >
//               <Viewer
//                 fileUrl={`https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf`}
//               />
//             </Worker>
//           </div>
//         </div>
//       </BottomSheet>
//       <button className="btn" onClick={() => setIsOpen(true)}>
//         Click me
//       </button>
//     </div>
//   );
// };

// export default PinchZoomPDF;
