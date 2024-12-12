/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./styles.scss";

const Demo = () => {
  const [valueInput, setValeInput] = useState("");
  const [valueInput2, setValeInput2] = useState("");

  const invalidTest = /\s+/g;
  const handleOnChange = (e) => {
    let value = e.target.value;
    if (value && invalidTest.test(value)) {
      value = value.replace(invalidTest, "");
    }
    setValeInput(value);
  };

  const handleKeyDown = (event) => {
    let convertRegex = new RegExp(invalidTest);
    if (convertRegex.test(event.key) && !event.ctrlKey && !event.metaKey) {
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
  return (
    <form autoComplete="off">
      <input
        key={key}
        value={valueInput}
        type="number"
        placeholder="street name"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        autoComplete="new-password"
        name={`input-${Math.random()}`}
        autoCorrect="off"
        spellCheck="false"
        inputMode="numeric"
        // onCompositionStart={() => setValeInput(valueInput)}
        onCompositionEnd={(e) => handleOnChange(e)}
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
        onCompositionStart={() => setValeInput(valueInput)}
        // onCompositionEnd={(e) => handleOnChange(e)}
      />
      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
