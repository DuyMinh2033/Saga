import { useState } from "react";
import "./styles.scss";

const Demo = () => {
  const [valueInput2, setValueInput2] = useState("");
  const [isComposition, setIsComposition] = useState(false);

  const handleOnChange2 = (e) => {
    const value = e.target.value;
    if (!isComposition) {
      setValueInput2(value);
    }
  };

  const handleCompositionStart = () => {
    setIsComposition(true);
  };

  const handleCompositionEnd = (e) => {
    setIsComposition(false);
    setValueInput2(e.target.value);
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
        type="text"
        placeholder="street name"
        onKeyDown={(e) => e.preventDefault()}
      />

      <input
        value={valueInput2}
        onChange={handleOnChange2}
        placeholder="street"
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />

      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
