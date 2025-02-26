/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.scss";
const RadioOptions = ({ options = [], onChangeValue = () => {} }) => {
  const [selected, setSelected] = useState("");
  const handleSelected = (item) => {
    setSelected(item);
    onChangeValue?.(item);
  };
  return (
    <div className="radio__options">
      {options.map((item, index) => (
        <div
          key={index}
          className={`radio__item ${selected === item && "selected"}`}
          onClick={() => handleSelected(item)}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default RadioOptions;
