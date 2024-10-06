/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import AnchorTab from "../AnchorTab/AnchorTab";

const ScrollAnchor = ({ sections, options, children }) => {
  const containerRef = useRef();
  const { classHeader, classAnchor } = options;
  const [activeTab, setActiveTab] = useState(sections[0]?.tab || "1");

  const handleScrollToTitle = (ref) => {
    const headerHeight = document.querySelector(classHeader)?.offsetHeight || 0;
    const anchorHeight = document.querySelector(classAnchor)?.offsetHeight || 0;
    const topPosition =
      ref.current.getBoundingClientRect().top + containerRef.current.scrollTop;

    containerRef.current.scrollTo({
      top: topPosition - headerHeight - anchorHeight,
      behavior: "smooth",
    });
  };

  const handleScrollToActive = () => {
    const scrollContainer = containerRef.current
    const scrollTop = scrollContainer.scrollTop || window.scrollY;
    const headerHeight = document.querySelector(classHeader)?.offsetHeight || 0;
    const anchorTabHeight =
      document.querySelector(classAnchor)?.offsetHeight || 0;

    const getSectionOffsets = (sectionRef) => {
      if (sectionRef?.current) {
        const offsetTop =
          sectionRef.current.offsetTop - headerHeight - anchorTabHeight - 20;
        const offsetBottom = offsetTop + sectionRef.current.offsetHeight;
        return { offsetTop, offsetBottom };
      }
      return { offsetTop: -Infinity, offsetBottom: -Infinity };
    };
    requestAnimationFrame(() => {
      sections.forEach(({ ref, tab }) => {
        const { offsetTop, offsetBottom } = getSectionOffsets(ref);
        if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
          setActiveTab(tab);
        }
      });
    });
  };

  useEffect(() => {
    const scrollContainer = containerRef?.current;
    if (scrollContainer) {
      const handleScroll = () => {
        handleScrollToActive();
      };
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="product-list__content">
      <AnchorTab
        type="default"
        segments={sections.map(({ tab, label, ref }) => ({
          label: label,
          value: tab,
          handleClick: () => handleScrollToTitle(ref),
        }))}
        defaultActive={activeTab}
        active={activeTab}
      />
      <div onScroll={handleScrollToActive} className="hello" ref={containerRef}>
        {children}
      </div>
    </div>
  );
};

export default ScrollAnchor;
