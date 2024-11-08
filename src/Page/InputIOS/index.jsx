import { useEffect, useRef, useState } from "react";

const InputIOS = () => {
  const [valueLabel, setValueLabel] = useState("");
  const Ref = useRef(null);

  const handleKeyDown = (event) => {
    if (["e", "E", "-", "+", "."].includes(event.key)) {
      event.preventDefault();
    }
  };

  const onChangeValue = (event) => {
    const newValue = event.target.value;
    // Chỉ cập nhật state nếu giá trị là số hợp lệ
    if (/^\d*$/.test(newValue)) {
      setValueLabel(newValue);
    }
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
        onChange={onChangeValue}
        value={valueLabel} // Đảm bảo rằng giá trị input luôn là giá trị hợp lệ
      />
      <label style={{ color: "red" }}>
        {valueLabel !== "" ? valueLabel : "No value"}
      </label>
    </div>
  );
};

export default InputIOS;
