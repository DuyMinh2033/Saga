/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Completed from "./Completed";
import { contents, options, optionsRadio, value } from "./contanst";
// import Section from "./Section";
import IMG from "../../assets/test.png";
import "./styles.scss";
import Accordion from "../../common/components/Ancordion";
import ViewMapBottom from "../../common/components/ViewMapBottom";

const Demo = () => {
  const [valueInput, setValeInput] = useState("");

  const handleOnChange = (e) => {
    setValeInput(e.target.value);
  };

  const invalidNameRegex = /[^0-9a-zA-Z.,'‘’—\s-]/g;
  // const handleKeyDown = (event) => {
  //   console.log(">>>", {
  //     invalid: invalidNameRegex.test(event.key),
  //     match: !!event.key.match(invalidNameRegex),
  //   });
  //   if (invalidNameRegex.test(event.key) && !event.ctrlKey && !event.metaKey) {
  //     event.preventDefault();
  //   }
  // };

  useEffect(() => {
    if (valueInput !== "") {
      setValeInput(valueInput.replace(invalidNameRegex, ""));
    }
  }, [valueInput]);
  return (
    <>
      <input
        value={valueInput}
        type="text"
        placeholder="street name"
        onChange={handleOnChange}
        // onKeyDown={handleKeyDown}
      />
      <input type="text" placeholder="city" />
      <p style={{ color: "red" }}>{valueInput}</p>
    </>
  );
};

export default Demo;
