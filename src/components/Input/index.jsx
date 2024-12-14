/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./style.scss";
const Input = (props) => {
  const {
    placeholder,
    onBlur = () => {},
    className,
    onChange = () => {},
    regex,
    type = "text",
    value,
    ...field
  } = props;
  const isFirstFocus = useRef(true);
  const [isComposition, setIsComposition] = useState(false);
  const [isEnter, setIsEnter] = useState(false);

  const handleOnChange = (e) => {
    let value = e.target.value;
    if (!isComposition || isEnter) {
      if (regex) value = value.replace(regex, "");
      onChange(value);
    }
  };

  const handleCompositionStart = () => {
    if (isFirstFocus.current) {
      setIsComposition(true);
      isFirstFocus.current = false;
    }
  };

  const handleOnBlur = (e) => {
    isFirstFocus.current = true;
    setIsEnter(false);
    onBlur(e);
  };

  const handleKeyDown = () => {
    setIsEnter(true);
  };

  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleOnChange}
        onCompositionStart={handleCompositionStart}
        onKeyDown={handleKeyDown}
        onBlur={handleOnBlur}
        {...field}
      />
    </>
  );
};

export default Input;
