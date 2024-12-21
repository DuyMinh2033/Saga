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
    maxLength,
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
      if (maxLength) {
        let value = e.target.value;
        let enc = new TextEncoder();
        let uint8 = enc.encode(value);
        if (uint8.length > maxLength) {
          return;
        }
      }
      onChange(value);
    }
  };

  const handleOnBlur = (e) => {
    isEnterKeyBoard.current = false;
    onBlur(e);
  };

  const handleKeyDown = (event) => {
    if (!isEnterKeyBoard.current) isEnterKeyBoard.current = true;
    if (!regex) return;
    const { key } = event;
    const newRegex = new RegExp(regex);
    if (key === "Process" || newRegex.test(key)) {
      isProcessKey.current = true;
      event.preventDefault();
    } else {
      isProcessKey.current = false;
    }
  };

  const ref = useRef(null);
  const handleClear = () => {
    onChange("");
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div className="input__wrapper">
      <input
        ref={ref}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        onBlur={handleOnBlur}
        {...other}
      />
      <p className="icon__clear" onClick={handleClear} />
    </div>
  );
};

export default Input;
