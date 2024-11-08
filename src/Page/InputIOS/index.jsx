import { useEffect, useRef, useState } from "react";

const InputIOS = () => {
  const [valueLabel, setValueLavel] = useState("");
  const Ref = useRef(null);
  const handleKeyDown = (event) => {
    if (["e", "E", "-", "+", "."].includes(event.key)) {
      event.preventDefault();
    }
  };

  const onChangeVaulue = (e) => {
    const value = e.target.value;
    setValueLavel(value);
  };

  useEffect(() => {
    Ref.current.focus();
  }, []);

  const handleInput = (event) => {
    // Loại bỏ tất cả các ký tự không phải là số nguyên
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input
        ref={Ref}
        type="number"
        onKeyDown={handleKeyDown}
        onChange={onChangeVaulue}
        onInput={handleInput}
      />
      <label style={{ color: "red" }}>
        {valueLabel !== "" ? valueLabel : "No value"}
      </label>
    </div>
  );
};

export default InputIOS;
