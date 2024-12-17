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
    console.log("isEnter blur", isEnterKeyBoard.current);
    isEnterKeyBoard.current = false;
    onBlur(e);
  };

  const handleKeyDown = (event) => {
    console.log("isEnter keyDown", isEnterKeyBoard.current);
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
  console.log("isEnter", isEnterKeyBoard.current);

  return (
    <div className="input__wrapper">
      <input
        autoComplete="new-password"
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
