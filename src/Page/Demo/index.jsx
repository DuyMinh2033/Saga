/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useRef, useState } from "react";
import "./styles.scss";

const Demo = () => {
  const [valueInput, setValeInput] = useState("");
  const [valueInput2, setValeInput2] = useState("");

  const isFirstFocus = useRef(true);

  const [isComposition, setIsComposition] = useState(false);

  const handleOnChange2 = (e) => {
    const value = e.target.value;
    console.log("Value old:", value);
    if (!isComposition) {
      setValeInput2(value);
      console.log("Value updated:", value);
    } else {
      setIsComposition(false);
    }
  };

  const handleCompositionEnd = (e) => {
    setIsComposition(false);
    setValeInput2(e.target.value);
    console.log("Composition ended, set isComposition false");
  };
  console.log("isFirstFocus.current", isFirstFocus.current);

  const handleCompositionStart = () => {
    if (isFirstFocus.current) {
      setIsComposition(true);
      isFirstFocus.current = false;
      console.log("First focus: set isComposition true");
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
        onKeyDown={(e) => e.preventDefault()}
        style={{ imeMode: "disabled" }}
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
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />

      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
