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
    setIsFocus(false);
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
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleCompositionEvent = (e) => {
    e.stopPropagation(); // Ngăn việc xử lý không mong muốn
    e.preventDefault(); // Disable mặc định (nếu cần)
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
        onFocus={handleFocus}
        onBlur={handleOnBlur}
        onCompositionEnd={handleCompositionEvent}
        onCompositionStart={handleCompositionEvent}
        onCompositionUpdate={handleCompositionEvent}
        {...other}
      />
      {isFocus && <p>Input focused</p>}
    </>
  );
};

export default Input;
