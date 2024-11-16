/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./styles.scss";
// eslint-disable-next-line react/prop-types
const AnchorTabPractice = ({ data = [], children }) => {
  const containerRef = useRef(null);
  const [selectedAnchor, setSelectedAnchor] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);

  const timOut = useRef(null);

  const handleClick = (idx) => {
    if (timOut.current) clearTimeout(timOut.current);
    setSelectedAnchor(idx);
    if (data[idx].ref.current) {
      data[idx].ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setHasScroll(true);
      timOut.current = setTimeout(() => {
        setHasScroll(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (hasScroll) return;
      const containerRect = containerRef?.current.getBoundingClientRect();
      const offset = containerRect.top + 20;
      data.forEach(({ ref }, idx) => {
        const sentinelRect = ref.current.getBoundingClientRect();
        if (idx === 1) {
          console.log("🚀 ~ handleScroll ~ offset:", {
            offset,
            TopRef: sentinelRect.top,
            BottomRef: sentinelRect.bottom,
          });
        }
        if (sentinelRect.top < offset && sentinelRect.bottom > offset) {
          setSelectedAnchor(idx);
        }
      });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      containerRef?.current.removeEventListener("scroll", handleScroll);
    };
  }, [hasScroll]);

  return (
    <div>
      <div className="anchor__header">
        {data.map((item, idx) => (
          <div
            key={item.title}
            className={`header__item__anchor ${
              idx === selectedAnchor && "selected__anchor"
            }`}
            onClick={() => handleClick(idx)}
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div ref={containerRef} className="anchor__scroll">
        {children}
      </div>
    </div>
  );
};

export default AnchorTabPractice;
