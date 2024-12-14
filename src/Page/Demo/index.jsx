import { useRef, useState } from "react";
import "./styles.scss";

const Demo = () => {
  const [valueInput2, setValeInput2] = useState("");

  const isFirstFocus = useRef(true);

  const [isComposition, setIsComposition] = useState(false);
  const [isEnter, setIsEnter] = useState(false);

  const handleOnChange2 = (e) => {
    const value = e.target.value;
    if (!isComposition || isEnter) {
      setValeInput2(value);
    }
  };

  const handleCompositionEnd = (e) => {
    console.log("e :>>");
    setIsComposition(false);
    setValeInput2(e.target.value);
    e.target.blur();
  };

  const handleCompositionStart = () => {
    if (isFirstFocus.current) {
      setIsComposition(true);
      isFirstFocus.current = false;
      console.log("First focus: set isComposition true");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <input
        value={""}
        type="text"
        placeholder="street name"
        onKeyDown={(e) => e.preventDefault()}
      />
      <input
        value={valueInput2}
        onChange={handleOnChange2}
        placeholder="street"
        onCompositionStart={handleCompositionStart}
        // onCompositionEnd={handleCompositionEnd}
        onKeyDown={() => setIsEnter(true)}
        onBlur={() => {
          isFirstFocus.current = true;
          setIsEnter(false);
        }}
      />
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
