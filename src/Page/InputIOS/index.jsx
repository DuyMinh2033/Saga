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
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input
        ref={Ref}
        type="number"
        onKeyDown={handleKeyDown}
        onChange={onChangeVaulue}
      />
      <label style={{ color: "red" }}>
        {valueLabel !== "" ? valueLabel : "No value"}
      </label>
    </div>
  );
};

export default InputIOS;
