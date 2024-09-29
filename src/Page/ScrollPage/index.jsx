import { useRef } from "react";
import "./style.scss";
const ProductItem = [
  {
    name: "caikeo1",
  },
  {
    name: "caikeo2",
  },
  {
    name: "caikeo3",
  },
  {
    name: "caikeo4",
  },
  {
    name: "caikeo5",
  },
  {
    name: "caikeo6",
  },
];

const ScrollPage = () => {
  const containerRef = useRef();
  const headerRef = useRef();
  const bodyref = useRef();
  const footerRef = useRef();

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const filterData = ProductItem.filter((item) => item.name === "caikeo1");
  return (
    <div>
      <div className="header">
        <button onClick={() => handleScroll(headerRef)}>
          Scroll to Header
        </button>
        <button onClick={() => handleScroll(bodyref)}>Scroll to Body</button>
        <button onClick={() => handleScroll(footerRef)}>
          Scroll to Footer
        </button>
      </div>
      <div className="container" ref={containerRef}></div>
      {renderProduct(ProductItem, headerRef)}
      {renderProduct(ProductItem, bodyref)}
      {renderProduct(ProductItem, footerRef)}
    </div>
  );
};

const renderProduct = (product, ref) => {
  if (product.length === 0) return null;

  return (
    <div ref={ref} className="scroll__body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        maiores dolorem culpa quis officia explicabo ea, exercitationem velit
        illum voluptates similique quia animi accusamus aspernatur consectetur
        dicta quaerat, rem aliquam.
      </p>
    </div>
  );
};

export default ScrollPage;
