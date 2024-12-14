import { useState } from "react";
import "./styles.scss";
import Input from "../../components/Input";

const regexInput = /[^0-9a-zA-Z.,‘’'-\s]/g;

const Demo = () => {
  const [valueInput1, setValueInput1] = useState("");
  const [valueInput2, setValeInput2] = useState("");

  // const isFirstFocus = useRef(true);

  // const [isComposition, setIsComposition] = useState(false);
  // const [isEnter, setIsEnter] = useState(false);

  // const handleOnChange2 = (e) => {
  //   const value = e.target.value;
  //   if (!isComposition || isEnter) {
  //     setValeInput2(value);
  //   }
  // };

  // const handleCompositionStart = () => {
  //   if (isFirstFocus.current) {
  //     setIsComposition(true);
  //     isFirstFocus.current = false;
  //   }
  // };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          height: "80vh",
          overflow: "auto",
        }}
      >
        <Input
          value={valueInput1}
          regex={regexInput}
          onChange={(value) => setValueInput1(value)}
        />
        <Input value={valueInput2} onChange={(value) => setValeInput2(value)} />
      </form>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </>
  );
};

export default Demo;
