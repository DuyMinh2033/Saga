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

  const invalidNameRegex = /[^0-9a-zA-Z.,‘’'-\s]/g;
  const handleOnInput = (e) => {
    setValueBefor(e.target.value);
    if (invalidNameRegex && e.target.value) {
      e.target.value = e.target.value.replace(invalidNameRegex, "");
    }
    setValeInput(e.target.value);
  };

  const onCompositionEnd = (e) => {
    if (invalidNameRegex && e.target.value) {
      e.target.value = e.target.value.replace(invalidNameRegex, "");
    }
  };
  const onCompositionStart = (e) => {
    if (invalidNameRegex && e.target.value) {
      e.target.value = e.target.value.replace(invalidNameRegex, "");
    }
  };

  const onCompositionUpdate = (e) => {
    if (invalidNameRegex && e.target.value) {
      e.target.value = e.target.value.replace(invalidNameRegex, "");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="street name"
        onChange={handleOnChange}
        onInput={handleOnInput}
        onCompositionEnd={onCompositionEnd}
        onCompositionStart={onCompositionStart}
        onCompositionUpdate={onCompositionUpdate}
      />
      <input type="text" placeholder="city" />
      <p style={{ color: "InfoText" }}>{valueBefor}</p>
      <p style={{ color: "red" }}>{valueInput}</p>
    </>
  );
};

export default Demo;
