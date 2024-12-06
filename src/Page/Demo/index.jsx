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
  const [limitTransfer, setLimitTransfer] = useState(50);
  const [step, setStep] = useState();
  const valueOnchange = useRef("");
  const result = useRef("");
  const [isOpen, setIsOpen] = useState(false);
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
  const refExpand = useRef([]);
  const [isShow, setIsShow] = useState(null);
  const timeOut = useRef(null);
  const handleClick = (index) => {
    setIsShow(index);
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      if (refExpand.current[index]) {
        refExpand.current[index].scrollIntoView({
          behavior: "smooth", // Tạo hiệu ứng mượt khi cuộn
          block: "center", // Đảm bảo element nằm ở giữa viewport
        });
      }
    }, 100);
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)}>click</button>
      <ViewMapBottom isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Demo;
