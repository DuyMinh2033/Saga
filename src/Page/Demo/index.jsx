import "./styles.scss";
import Input from "../../components/Input";
import { Controller, useForm } from "react-hook-form";

const regexInputNumber = /[^0-9]/g;
const regexInput = /[^0-9a-zA-Z.,‘’'-\s]/g;

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
          render={({ field }) => <Input regex={regexInputNumber} {...field} />}
        />
        <Controller
          name="streetName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <button onClick={handleSubmit(submitForm)}>Submit</button>
      </div>
    </>
  );
};

export default Demo;
