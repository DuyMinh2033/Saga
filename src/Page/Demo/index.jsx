import "./styles.scss";
import Input from "../../components/Input";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const regexInput = /[^0-9a-zA-Z.,‘’'-\s]/g;

const supportsFlexGap = () => {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.gap = "1px";

  // Thêm hai phần tử con để kiểm tra kích thước khoảng cách
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  // Thêm phần tử vào DOM để kiểm tra chiều cao/chiều rộng
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1; // Kiểm tra nếu gap thực sự hoạt động
  document.body.removeChild(flex); // Xóa phần tử kiểm tra

  return isSupported;
};
const Demo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      streetName: "",
    },
  });

  const submitForm = (value) => {
    alert(JSON.stringify(value, null, 2));
  };

  useEffect(() => {
    console.log(supportsFlexGap());
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          height: "80vh",
          overflow: "auto",
        }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input maxLength={6} {...field} />}
        />

        <Controller
          name="streetName"
          control={control}
          render={({ field }) => <Input regex={regexInput} {...field} />}
        />
        <button onClick={handleSubmit(submitForm)}>Submit</button>
      </div>
    </>
  );
};

export default Demo;
