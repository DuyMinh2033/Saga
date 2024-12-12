import { useState } from "react";

const Demo = () => {
  const [valueInput, setValueInput] = useState("");
  console.log("🚀 ~ Demo ~ valueInput:", valueInput);
  const [valueInput2, setValueInput2] = useState("");

  const handleOnChange1 = (e) => {
    const invalidTest = /[^0-9a-zA-Z.,‘’'-\s]/g;
    const isChecked = invalidTest.test(e.target.value);
    if (isChecked) {
      return null;
    }
    setValueInput(e.target.value);
  };

  const handleOnChange2 = (e) => {
    setValueInput2(e.target.value);
  };

  return (
    <form
      autoComplete="new-password"
      method=""
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <input
        value={valueInput}
        type="text"
        placeholder="street name"
        onChange={handleOnChange1}
        // onKeyDown={(e) => e.preventDefault()}
        // inputMode="text"
        // autoComplete="new-password"
        // autoCorrect="off"
        // spellCheck="false"
      />
      <input
        value={valueInput2}
        // onFocus={handleFocus2} // Xóa cache khi focus
        onChange={handleOnChange2}
        placeholder="street"
        // inputMode="text"
        // autoComplete="new-password"
        // autoCorrect="off"
        // spellCheck="false"
      />
      <p style={{ color: "red" }}>input 1 : {valueInput}</p>
      <p style={{ color: "red" }}>input 2: {valueInput2}</p>
    </form>
  );
};

export default Demo;
