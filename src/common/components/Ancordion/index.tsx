/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles.scss";
import { FaAngleDown } from "react-icons/fa6";
const Accordion = ({ option, onClick, isExpand, children }) => {
  const { value, title } = option;
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(isExpand);
  }, [isExpand]);

  return (
    <div className="accordion__wrapper" onClick={onClick}>
      <div className="accordion__container" onClick={handleShow}>
        <p>{title}</p>
        <p>{value}</p>
        <FaAngleDown />
      </div>
      <div className={`${isOpen ? "show" : "unShow"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
