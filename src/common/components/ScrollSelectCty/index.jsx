/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./styles.scss";

const itemHeight = 30;
let scrollTimeout = null;

const ScrollSelect = ({
  options = [],
  defaultValue,
  onChangeValue,
  // type = "",
}) => {
  const containerRef = useRef(null);

  const scrollToIndex = (index, isModify = true) => {
    onChangeValue?.(
      options[index]?.value !== undefined
        ? options[index]?.value
        : options[index]
    );

    if (containerRef.current) {
      containerRef.current.scrollTop = itemHeight * index;
    }
    if (isModify) {
      modifyClassByIndex(index);
    }
  };

  const modifyClassByIndex = (index) => {
    const children = containerRef?.current?.children;

    if (children) {
      Array.from(children).forEach((child) => {
        child.classList.remove("selected");
        child.classList.remove("rotateTop");
        child.classList.remove("rotateBottom");
      });

      if (children[index]) {
        children[index].classList.add("selected");
      }

      if (children?.[index - 2]) {
        children[index - 2].classList.add("rotateTop");
      }

      if (children?.[index + 2]) {
        children[index + 2].classList.add("rotateBottom");
      }
    }
  };

  useEffect(() => {
    if (options.length > 0) {
      const currentIdx = options.findIndex(
        (option) => option?.value === defaultValue || option === defaultValue
      );
      scrollToIndex(currentIdx < 0 ? 0 : currentIdx);
    }

    if (containerRef.current) {
      const handleEventScroll = () => {
        const scrollPosition = containerRef.current?.scrollTop;
        const newIndex = Math.round(scrollPosition / itemHeight);
        modifyClassByIndex(newIndex);

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
          scrollToIndex(newIndex, false);
        }, 200);
      };

      containerRef.current?.addEventListener("scroll", handleEventScroll);

      return () => {
        containerRef.current?.removeEventListener("scroll", handleEventScroll);

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      };
    }
  }, [defaultValue, options]);

  return (
    <div ref={containerRef} className="select_item_wrapper">
      {options.map((item, idx) => (
        <div
          key={`year - ${String(item?.value || item)} `}
          className="select_item"
          onClick={() => scrollToIndex(idx)}
        >
          <div className="top_gradient" />
          <div className="bot_gradient" />
          <span>{item?.label !== undefined ? item?.label : item}</span>
        </div>
      ))}
    </div>
  );
};

export default ScrollSelect;
