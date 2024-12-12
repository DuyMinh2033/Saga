/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "./styles.scss";

const Demo = () => {
  const [valueInput, setValeInput] = useState("");
  const [valueInput2, setValeInput2] = useState("");

  // const invalidTest = /[^0-9a-zA-Z.,‘’'-\s]/g;
  // const handleOnChange = (e) => {
  //   let value = e.target.value;
  //   if (value && invalidTest.test(value)) {
  //     value = value.replace(invalidTest, "");
  //   }
  //   setValeInput(value);
  // };

  // const handleKeyDown = (event) => {
  //   const ignoreKeys = [
  //     "ArrowLeft",
  //     "ArrowRight",
  //     "ArrowUp",
  //     "ArrowDown",
  //     "Backspace",
  //     "Delete",
  //     "Tab",
  //     "Enter",
  //     "Escape",
  //     "Home",
  //     "End",
  //     "PageUp",
  //     "PageDown",
  //   ];
  //   if (ignoreKeys.includes(event.key)) {
  //     return;
  //   }
  //   if (event.ctrlKey || event.metaKey) {
  //     return;
  //   }

  //   let convertRegex = new RegExp(invalidTest);
  //   if (convertRegex.test(event.key)) {
  //     event.preventDefault();
  //   }
  // };

  const handleOnChange2 = (e) => {
    console.log("value2", e.target.value);
    setValeInput2(e.target.value);
  };
  // const [key, setKey] = useState(0);

  // const inputRef = useRef(null);
  // const [isReadyOnly, setIsReadyOnly] = useState(true);

  // const handleOnFocus = () => {
  //   setIsReadyOnly(false);
  // };

  const removeSpecials = (evt) => {
    const value = evt.target.value;
    const patt = /[^\x20-\x7E]+/;
    setValeInput(value.replace(patt, ""));
  };
  return (
    <form autoComplete="new-password" method="" action="">
      <input
        // key={key}
        value={valueInput}
        type="text"
        placeholder="street name"
        onChange={removeSpecials}
        // onKeyDown={handleKeyDown}
        autoComplete="new-password"
        name={`input-${Math.random()}`}
        autoCorrect="off"
        spellCheck="false"
      />
      <input
        // ref={inputRef}
        // key={key + 2}
        // type="number"
        // placeholder="city"
        value={valueInput2}
        onChange={handleOnChange2}
        // autoComplete="new-password"
        // name={`input-${Math.random()}`}
        // autoCorrect="off"
        // spellCheck="false"
        // inputMode="text"
        // onFocus={handleOnFocus}
        // readOnly={isReadyOnly}
      />
      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
