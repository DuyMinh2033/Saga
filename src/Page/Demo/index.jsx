/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useRef, useState } from "react";
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
    let convertRegex = new RegExp(/[^\x20-\x7E]+/);
    if (convertRegex.test(event.key)) {
      event.preventDefault();
    }
  };

  const [isComposition, setIsComposition] = useState(false);
  const timeOut = useRef(null);
  const handleOnChange2 = (e) => {
    if (!isComposition) {
      const value = e.target.value;
      setValeInput2(value);
    }
  };

  return (
    <form
      autoComplete="new-password"
      method=""
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <input
        value={valueInput}
        type="text"
        placeholder="street name"
        onKeyDown={handleKeyDown}
        style={{ imeMode: "disabled" }} // Prevents IME on some browsers
        inputMode="text"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <input
        value={valueInput2}
        onChange={handleOnChange2}
        placeholder="street"
        inputMode="text"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        onCompositionStart={() => {
          setIsComposition(true);
          clearTimeout(timeOut.current);
          // clearTimeout(timeOut.current);
          timeOut.current = setTimeout(() => setIsComposition(false), 50);
        }}
      />

      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
