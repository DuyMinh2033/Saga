import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useState } from "react";

const TestPage = () => {
  const { control } = useForm({
    defaultValues: "",
  });
  const [emailBlurred, setEmailBlurred] = useState(false);

  const handleBlur = () => {
    setEmailBlurred(true);
  };

  return (
    <div>
      <button>Click Me</button>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input {...field} className={emailBlurred ? "input-error" : ""} />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => <Input {...field} onBlur={() => handleBlur()} />}
      />
    </div>
  );
};

export default TestPage;
