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
    // Kiểm tra nếu chỉ chứa số
    if (/^\d*$/.test(newValue)) {
      setValueLabel(newValue); // Cập nhật giá trị nếu là số
    }
    // Nếu nhập ký tự đặc biệt thì không thay đổi giá trị
  };

  useEffect(() => {
    Ref.current.focus();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input
        ref={Ref}
        type="text" // Sử dụng type="text" thay vì type="number"
        onKeyDown={handleKeyDown}
        onChange={onChangeValue}
        value={valueLabel} // Đảm bảo hiển thị giá trị hợp lệ
        inputMode="numeric" // Chỉ cho phép hiển thị bàn phím số
      />
      <label style={{ color: "red" }}>
        {valueLabel !== "" ? valueLabel : "No value"}
      </label>
    </div>
  );
};

export default InputIOS;
