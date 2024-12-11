/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Completed from "./Completed";
import { contents, options, optionsRadio, value } from "./contanst";
// import Section from "./Section";
import IMG from "../../assets/test.png";
import "./styles.scss";
import Accordion from "../../common/components/Ancordion";
import ViewMapBottom from "../../common/components/ViewMapBottom";

const Demo = () => {
  const [valueInput, setValeInput] = useState("");
  const [valueInput2, setValeInput2] = useState("");

  const invalidNameRegex = /[^0-9a-zA-Z.,‘’'-\s]/;

  const handleOnChange = (e) => {
    const invalidTest = /[^0-9a-zA-Z.,‘’'-\s]/g;
    let value = e.target.value;
    if (value && invalidTest.test(value)) {
      value = value.replace(invalidTest, "");
    }
    setValeInput(value);
  };

  const handleKeyDown = (event) => {
    console.log(">>>", {
      invalid: invalidNameRegex.test(event.key),
      test: /[^0-9a-zA-Z.,‘’'-\s]/.test(event.key),
    });
    if (invalidNameRegex.test(event.key) && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
    }
  };

  const handleOnChange2 = (e) => {
    setValeInput2(e.target.value);
  };
  const [key, setKey] = useState(0); // Cấu hình key để ép component render lại

  const handleOnFocus = () => {
    setKey((prevKey) => prevKey + 1); // Thay đổi key mỗi khi focus vào input
  };
  return (
    <>
      <input
        key={key}
        value={valueInput}
        type="text"
        placeholder="street name"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        autoComplete="new-password"
        name={`input-${Math.random()}`} // Sử dụng tên trường ngẫu nhiên
        autoCorrect="off"
        spellCheck="false"
        inputMode="text" // Cung cấp hướng dẫn rõ ràng cho trình duyệt
      />
      <input
        key={key + 2}
        type="text"
        placeholder="city"
        value={valueInput2}
        onChange={handleOnChange2}
        autoComplete="new-password"
        name={`input-${Math.random()}`} // Sử dụng tên trường ngẫu nhiên
        autoCorrect="off"
        spellCheck="false"
        inputMode="text" // Cung cấp hướng dẫn rõ ràng cho trình duyệt
      />
      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </>
  );
};

export default Demo;
