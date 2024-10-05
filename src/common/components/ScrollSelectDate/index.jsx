/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import "./styles.scss";

const SelectDate = ({
  options = [],
  onChangeValue = () => {},
  defaultOption = "",
}) => {
  const viewRer = useRef(null);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (defaultOption) {
      const index = options.findIndex((item) => item.value === defaultOption);
      scrollToNumber(index);
    }
  }, [defaultOption]);

  const onChangeNumber = (number) => {
    setSelected(number);
  };
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const scrollToNumber = (number) => {
    if (viewRer.current) {
      const scrollPosition = number * 30;
      viewRer.current.scrollTop = scrollPosition;
    }
    onChangeNumber(number);
  };

  const handleSrollEnd = debounce(scrollToNumber, 500);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = viewRer.current?.scrollTop;
      const newNumber = Math.round(scrollPosition / 30);
      onChangeNumber(newNumber);
      handleSrollEnd(newNumber);
    };
    if (viewRer.current) {
      viewRer.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (viewRer.current) {
        viewRer.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    onChangeValue?.(options[selected]?.label || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  return (
    <>
      <div className="container__scroll">
        <div className="scroll" ref={viewRer}>
          {options.map((item, idx) => (
            <div
              key={idx}
              className={`item ${selected === idx ? "selected" : ""}`}
              onClick={() => scrollToNumber(idx)}
            >
              <span>{item?.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectDate;
