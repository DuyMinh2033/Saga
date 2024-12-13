/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.scss";
const Input = (props) => {
  const {
    placeholder,
    onBlur = () => {},
    className,
    onChange,
    ...field
  } = props;

  const [valueDefault, setValueDefault] = useState("");
  const handleBlur = () => {
    onBlur();
  };
  const hanleOnChange = (e) => {
    setValueDefault(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    console.log("cc");
  }, []);

  return (
    <div>
      <input
        placeholder={placeholder}
        type="number"
        onBlur={handleBlur}
        className={className}
        onChange={hanleOnChange}
        {...field}
      />
    </div>
  );
};

export default Input;
