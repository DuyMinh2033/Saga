/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./styles.scss";

const Demo = () => {
  const [valueInput, setValeInput] = useState("");
  const [valueInput2, setValeInput2] = useState("");

  const invalidTest = /[^0-9a-zA-Z.,‘’'-\s]/g;
  const handleOnChange = (e) => {
    let value = e.target.value;
    if (value && invalidTest.test(value)) {
      value = value.replace(invalidTest, "");
    }
    setValeInput(value);
  };

  const handleKeyDown = (event) => {
    const ignoreKeys = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Backspace",
      "Delete",
      "Tab",
      "Enter",
      "Escape",
      "Home",
      "End",
      "PageUp",
      "PageDown",
    ];
    if (ignoreKeys.includes(event.key)) {
      return;
    }
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    let convertRegex = new RegExp(invalidTest);
    if (convertRegex.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleOnChange2 = (e) => {
    setValeInput2(e.target.value);
  };
  const [key, setKey] = useState(0);

  const handleOnFocus = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const onCompositionEnd = (e) => {
    console.log("onCompositionEnd1", e.target.value);
    if (e.target.value !== valueInput) {
      debugger;
      e.target.value === valueInput;
    }
  };

  const onCompositionEnd2 = (e) => {
    console.log("onCompositionEnd2", e.target.value);
    if (e.target.value !== valueInput2) {
      debugger;
      e.target.value === valueInput2;
    }
  };

  return (
    <form autoComplete="off">
      <input
        key={key}
        value={valueInput}
        type="text"
        placeholder="street name"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        autoComplete="new-password"
        name={`input-${Math.random()}`}
        autoCorrect="off"
        spellCheck="false"
        onCompositionEnd={(e) => onCompositionEnd(e)}
      />
      <input
        key={key + 2}
        type="text"
        placeholder="city"
        value={valueInput2}
        onChange={handleOnChange2}
        autoComplete="new-password"
        name={`input-${Math.random()}`}
        autoCorrect="off"
        spellCheck="false"
        inputMode="text"
        onCompositionEnd={(e) => onCompositionEnd2(e)}
        // onCompositionEnd={(e) => handleOnChange(e)}
      />
      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
