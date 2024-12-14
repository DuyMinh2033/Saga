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
  const [isComposition, setIsComposition] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [valueDeFault, setValueDeFault] = useState("");

  // const [isKeyValid, setKeyIsValid] = useState(true);
  const handleOnChange = (e) => {
    // debugger;
    // if (!isKeyValid) {
    //   setKeyIsValid(true);
    //   return;
    // }

    if (isEnter) {
      let value = e.target.value;
      if (regex) {
        if (isComposition) {
          console.log("isComposition", { value, valueDeFault });
          if (value !== valueDeFault) setIsComposition(false);
          return;
        } else {
          value = value.replace(regex, "");
        }
      }
      setValueDeFault(value);
      onChange(value);
    }
  };

  const handleCompositionStart = (e) => {
    e.target.value = e.target.value.replace(regex, "");
    setIsComposition(true);
    // if (isFirstFocus.current) {
    //   isFirstFocus.current = false;
    // }
  };

  const handleOnBlur = (e) => {
    isFirstFocus.current = true;
    setIsEnter(false);
    onBlur(e);
  };

  const handleKeyDown = () => {
    setIsEnter(true);
    // if (!regex) return;

    // const { key, metaKey, ctrlKey, altKey, shiftKey } = event;
    // const ignoredKeys = [
    //   "Backspace",
    //   "Tab",
    //   "ArrowLeft",
    //   "ArrowRight",
    //   "ArrowUp",
    //   "ArrowDown",
    //   "Enter",
    //   "Delete",
    // ];
    // if (ignoredKeys.includes(key) || metaKey || ctrlKey || altKey) {
    //   return;
    // }
    // if (key === "Process") {
    //   setKeyIsValid(false);
    //   return;
    // }
    // // debugger;
    // console.log(key);
    // const newRegex = new RegExp(regex);
    // const isCheckValid = !newRegex.test(key);
    // setKeyIsValid(isCheckValid);
  };

  const handleOnInput = (e) => {
    e.target.value = e.target.value.replace(regex, "");
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
        onInput={handleOnInput}
        onKeyDown={handleKeyDown}
        onBlur={handleOnBlur}
        {...other}
      />
    </>
  );
};

export default Input;
