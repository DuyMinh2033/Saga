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

  const isFirstFocus = useRef(true);
  const [isEnter, setIsEnter] = useState(false);

  const handleOnChange = (e) => {
    if (isEnter) {
      let value = e.target.value;
      if (regex) {
        value = value.replace(regex, "");
      }
      onChange(value);
    }
  };

  // const handleCompositionStart = (e) => {
  //   e.target.value = e.target.value.replace(regex, "");
  // };

  const handleOnBlur = (e) => {
    isFirstFocus.current = true;
    setIsEnter(false);
    onBlur(e);
  };

  const handleKeyDown = (e) => {
    setIsEnter(true);
    if (!regex) return;

    const { key, metaKey, ctrlKey, altKey } = event;
    const ignoredKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Enter",
      "Delete",
    ];

    if (ignoredKeys.includes(key) || metaKey || ctrlKey || altKey) {
      return;
    }
    const newRegex = new RegExp(regex);
    const isCheckValid = !newRegex.test(key);
    if (!isCheckValid) {
      e.preventDefault();
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
        // onCompositionStart={handleCompositionStart}
        onKeyDown={handleKeyDown}
        onBlur={handleOnBlur}
        {...other}
      />
    </>
  );
};

export default Input;
