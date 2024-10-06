/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useRef, useState } from "react";
import { hours } from "./constanst";
import "./styles.scss";
const SelectTime = () => {
  const containerRef = useRef();
  const [selected, setSelected] = useState(0);

  const onChangeNumber = (number) => {
    setSelected(number);
  };

  const handleScrollToView = (idx) => {
    if (containerRef.current) {
      const scrollPosition = idx * 30;
      containerRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
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

  const handleSrollEnd = debounce(handleScrollToView, 600);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = containerRef?.current;
      const newNumber = Math.round(scrollTop / 30);
      handleSrollEnd(newNumber);
      onChangeNumber(newNumber);
    };
    containerRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      containerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="select-container__time">
      {hours.map((item, idx) => {
        return (
          <div
            key={item}
            className={`hours__item ${idx === selected && "selected"}`}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SelectTime;
