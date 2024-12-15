/* eslint-disable react/prop-types */
import { useRef } from "react";
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
    ...other
  } = props;

  const isEnterKeyBoard = useRef(false);
  const isProcessKey = useRef(false);

  const handleOnChange = (e) => {
    if (isEnterKeyBoard.current) {
      let value = e.target.value;
      if (regex) {
        if (isProcessKey.current) return;
        value = value.replace(regex, "");
      }
      onChange(value);
    }
  };

  const handleOnBlur = (e) => {
    isEnterKeyBoard.current = false;
    onBlur(e);
  };

  const handleKeyDown = (event) => {
    isEnterKeyBoard.current = true;
    if (!regex) return;
    const { key } = event;
    if (key === "Process") {
      isProcessKey.current = true;
    } else {
      isProcessKey.current = false;
    }
  };

  const handleCompositionStart = () => {
    isProcessKey.current = true;
  };

  const handleCompositionEnd = (e) => {
    isProcessKey.current = false;
    const value = e.target.value;
    if (regex) {
      const sanitizedValue = value.replace(regex, "");
      onChange(sanitizedValue);
    } else {
      onChange(value);
    }
  };

  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        onBlur={handleOnBlur}
        {...other}
      />
    </>
  );
};

export default Input;
