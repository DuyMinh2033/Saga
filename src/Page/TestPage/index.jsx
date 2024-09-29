import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useEffect, useState } from "react";

const TestPage = () => {
  const { control } = useForm({
    defaultValues: "",
  });
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [state, setState] = useState({
    isShow: false,
    content: "",
    value: "",
  });
  const handleBlur = () => {
    setEmailBlurred(true);
  };
  const handBtn = () => {
    setState({
      ...state,
      isShow: true,
    });
  };

  useEffect(() => {
    if (state.isShow) {
      console.log("hello");
    }
  }, [state]);

  return (
    <div>
      <button onClick={handBtn}>Click Me</button>
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
