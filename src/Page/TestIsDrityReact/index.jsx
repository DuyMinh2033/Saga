import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TestDirty = () => {
  const {
    register,
    watch,
    formState: { isDirty, dirtyFields },
    reset,
    getValues,
    control,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "", username: "", email: "" }, // Giả sử các giá trị mặc định
  });


  const [isUpload] = watch(["isUpload"]);

  console.log("🚀 ~ TestDirty ~ isUpload:", isUpload);
  //   const [defaultData, setDefaultData] = useState({}); // Lưu giá trị mặc định
  //   // Giả lập gọi API
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John Doe",
          age: "21",
          country: "US",
          email: "kaka",
          isTest: false,
          isUpload: false,
        });
      }, 1200); // Giả lập độ trễ 1.2 giây
    });

  // Giả lập gọi API để lấy dữ liệu
  const fetchData = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await fetchData.json();
    return data;

  };

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchData(); // Chờ dữ liệu từ API
      const find = apiData.find((item) => item.id === 1);
      reset(find); // Cập nhật giá trị mặc định
    };

    getData();
  }, [reset]);

  const handleShow = () => {
  };

  const handleOnchange = (e) => {
    setValue("email", e.target.value);
    console.log("Updated email:", getValues("email"));
  };
  const [showField, setShowField] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <input {...field} />}
      />
      <Controller
        control={control}
        name="username"
        render={({ field }) => <input {...field} />}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => <input {...field} />}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <input
            onChange={(e) => {
              onChange(e);
              handleOnchange(e);
            }}
            value={value}
          />
        )}
      />
      {showField && (
        <Controller
          control={control}
          name="city"
          render={({ field }) => <input {...field} />}
        />
      )}

      <p>isDirty: {isDirty ? "true" : "false"}</p>
      <button onClick={handleShow}>ShowBS</button>
      <button onClick={() => setShowField(true)}>showField</button>
      <button
        onClick={() => {
          setValue("isUpload", !isUpload, { shouldDirty: true });
        }}
      >
        Set Upload
      </button>
    </div>
  );
};

export default TestDirty;
