/* eslint-disable no-undef */
import "./styles.scss";
import Input from "../../components/Input";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

const regexInput = /[^0-9a-zA-Z.,‘’'-\s]/g;

const Demo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      streetName: "",
    },
  });

  const submitForm = (value) => {
    console.log("🚀 ~ submitForm ~ value:", value);
    // alert(JSON.stringify(value, null, 2));
    document.dispatchEvent(
      new CustomEvent("redirect", {
        detail: { src: "/productList" },
      })
    );
  };

  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      alert("This is the development environment");
    } else if (import.meta.env.MODE === "production") {
      alert("This is the production environment");
    } else {
      alert("This is the test environment");
    }
  }, []);

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          height: "80vh",
          overflow: "auto",
        }}
        autoComplete="news-password"
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input maxLength={6} type="text" {...field} />}
        />

        <Controller
          name="streetName"
          control={control}
          render={({ field }) => <Input regex={regexInput} {...field} />}
        />
        <button onClick={handleSubmit(submitForm)}>Submit</button>
      </form>
    </>
  );
};

export default Demo;
