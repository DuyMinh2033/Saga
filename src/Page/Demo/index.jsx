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
  const [valueBefor, setValueBefor] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  const handleOnInput = (e) => {
    const invalidNameRegex = /[^0-9a-zA-Z.,‘’'-\s]/g;
    setValueBefor(e.target.value);
    if (invalidNameRegex && e.target.value) {
      e.target.value = e.target.value.replace(invalidNameRegex, "");
    }
    setValeInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="street name"
        onChange={handleOnChange}
        onInput={handleOnInput}
        onCompositionEnd={handleOnInput}
        onCompositionStart={handleOnInput}
        onCompositionUpdate={handleOnInput}
      />
      <input type="text" placeholder="city" />
      <p style={{ color: "InfoText" }}>{valueBefor}</p>
      <p style={{ color: "red" }}>{valueInput}</p>
    </>
  );
};

export default Demo;
