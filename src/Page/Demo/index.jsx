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

  const handleCompositionStart = (e) => {
    console.log("Composition started", e.target.value);
  };

  const handleCompositionUpdate = (e) => {
    console.log("handleCompositionUpdate", e.target.value);
    setValeInput2(e.target.value);
  };

  const handleCompositionEnd = (e) => {
    console.log("Composition ended", e.target.value);
  };

  const handlePaste = (e) => {
    e.preventDefault(); // Ngừng hành động dán
  };

  return (
    <form autoComplete="new-password" method="" action="">
      <input
        value={valueInput}
        type="text"
        placeholder="street name"
        onChange={removeSpecials}
        // onCompositionStart={(e) => handleCompositionStart(e)}
        // onCompositionUpdate={(e) => handleCompositionUpdate(e)}
        // onCompositionEnd={(e) => handleCompositionEnd(e)}
      />
      <input
        value={valueInput2}
        onChange={handleOnChange2}
        onCompositionStart={(e) => handleCompositionStart(e)}
        onCompositionUpdate={(e) => handleCompositionUpdate(e)}
        onCompositionEnd={(e) => handleCompositionEnd(e)}
        onPaste={handlePaste} // Ngừng dán dữ liệu
      />
      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
