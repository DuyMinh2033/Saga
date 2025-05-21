/* eslint-disable no-undef */
import { useRef } from 'react';

function Demo() {
  const videoRef = useRef(null);

  const openCamera = async () => {
    if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        alert('Không thể mở camera: ' + err?.message);
      }
    } else {
      alert('Trình duyệt không hỗ trợ hoặc không thể truy cập camera');
    }
  };

  return (
    <div>
      <button onClick={openCamera}>Mở Camera</button>
      <video ref={videoRef} autoPlay style={{ width: 400, height: 300 }} />
    </div>
  );
}

export default Demo;
