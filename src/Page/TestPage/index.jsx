import axios from "axios";
import { useEffect, useState } from "react";

const TestPage = () => {
  const [file, setFile] = useState("");

  const change = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    const handle = async () => {
      const formData = new FormData();
      formData.append("userId", 123);
      formData.append("image", file);
      try {
        const response = await axios.post(
          "http://localhost:8800/api/test/test-form",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Đặt Content-Type cho multipart/form-data
            },
          }
        );

        console.log("Upload thành công:", response.data);
      } catch (error) {
        console.error("Lỗi xảy ra khi upload:", error);
      }
    };
    if (file !== "") {
      handle();
    }
  }, [file]);
  return (
    <div>
      <button>Click Me</button>
      <input type="file" onChange={change} />
    </div>
  );
};

export default TestPage;
