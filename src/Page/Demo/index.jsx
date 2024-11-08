/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Completed from "./Completed";
import { contents, optionsRadio, value } from "./contanst";
import RadioOptions from "../../common/components/RadioOptions";
import Section from "./Section";

const Demo = () => {
  const [limitTransfer, setLimitTransfer] = useState(50);
  const [step, setStep] = useState();
  const valueOnchange = useRef("");
  const result = useRef("");

  const handleSubmit = () => {
    if (valueOnchange.current === "" || valueOnchange.current === "0") return;

    if (valueOnchange.current > limitTransfer) {
      result.current = value.increase;
    } else {
      result.current = value.decrease;
    }

    if (result.current) {
      alert(contents[result.current]);
    }
    setStep("completed");
  };

  const handleOnchange = (e) => {
    valueOnchange.current = e.target.value;
  };
  const handleTest = () => {
    const arr = [1, 1, 1, 2, 3, 3, 4];
    const resultData = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (!resultData.includes(item)) {
        resultData.push(item);
      }
    }
    console.log(resultData);
  };

  return (
    <div style={{ padding: "0 24px" }}>
      {/* {step !== "completed" && (
        <div>
          <p>{limitTransfer}</p>
          <input
            type="text"
            placeholder="enter amount"
            onChange={handleOnchange}
          />
          <div>
            <button onClick={handleSubmit}>submit</button>
          </div>
          <button onClick={handleTest}>Test</button>
        </div>
      )}
      {step === "completed" && <Completed title={result.current} />} */}
      <Section />
    </div>
  );
};

export default Demo;
