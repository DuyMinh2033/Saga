import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TestDirty = () => {
  const {
    register,
    watch,
    formState: { isDirty, dirtyFields },
    reset,
    control,
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: "" },
  });
  //   const [defaultData, setDefaultData] = useState({}); // Lưu giá trị mặc định
  //   // Giả lập gọi API
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John Doe", age: "21", country: "US" });
      }, 1200); // Giả lập độ trễ 1.2 giây
    });
  };

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchData(); // Chờ dữ liệu từ API
      reset(apiData); // Cập nhật giá trị mặc định
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShow = () => {
    console.log("isDirty", isDirty);
    console.log("dirtyFields", dirtyFields);
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
        name="age"
        render={({ field }) => <input {...field} />}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => <input {...field} />}
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
    </div>
  );
};

export default TestDirty;
