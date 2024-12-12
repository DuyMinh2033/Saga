/* eslint-disable no-unused-vars */
import { Fragment, useRef, useState } from "react";
import "./styles.scss";

const Demo = () => {
  const [valueInput, setValeInput] = useState("");
  const [valueInput2, setValeInput2] = useState("");

  const invalidTest = /[^0-9a-zA-Z.,‘’'-\s]/g;
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

  // const [key, setKey] = useState(0);

  // const inputRef = useRef(null);
  // const [isReadyOnly, setIsReadyOnly] = useState(true);

  // const handleOnFocus = () => {
  //   setIsReadyOnly(false);
  // };

  const handleOnChange2 = (e) => {
    console.log("value2", e.target.value);
    setValeInput2(e.target.value);
  };
  const removeSpecials = (evt) => {
    const value = evt.target.value;
    const patt = /[^\x20-\x7E]+/;
    setValeInput(value.replace(patt, ""));
  };

  const inputs = Array.from({ length: 20 }, (_, index) => index + 1);

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
        onChange={removeSpecials}
        // onCompositionEnd={(e) => handleCompositionEnd(e)}
        // onKeyDown={handleKeyDown}
        onKeyDown={(e) => e.preventDefault()}
        // onCompositionStart={(e) => handleCompositionStart(e)}
        // onCompositionUpdate={(e) => handleCompositionUpdate(e)}
        // onCompositionEnd={(e) => handleCompositionEnd(e)}
      />
      <input
        value={valueInput2}
        onChange={handleOnChange2}
        placeholder="street"
        // onCompositionEnd={(e) => handleCompositionEnd(e)}
      />
      {inputs.map((input, index) => (
        <Fragment key={index}>
          <input type="text" id={`input-${index}`} name={`input-${index}`} />
        </Fragment>
      ))}
      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
