import { useEffect, useRef, useState } from "react";

const InputIOS = () => {
  const [valueLabel, setValueLabel] = useState("");
  const Ref = useRef(null);

  const handleKeyDown = (event) => {
    // Ngăn các ký tự không phải số từ bàn phím
    if (["e", "E", "-", "+", "."].includes(event.key)) {
      event.preventDefault();
    }
  };

  const onChangeValue = (event) => {
    const newValue = event.target.value;
    setValueLabel(newValue);
  };

  useEffect(() => {
    Ref.current.focus();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input
        ref={Ref}
        type="number"
        onChange={onChangeValue}
        onKeyDown={handleKeyDown}
        inputMode="numeric"
      />
      <label style={{ color: "red" }}>
        {valueLabel !== "" ? valueLabel : "No value"}
      </label>
    </div>
  );
};

export default InputIOS;
