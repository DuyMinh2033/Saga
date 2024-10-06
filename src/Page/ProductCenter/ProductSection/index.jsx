import "./styles.scss";
// eslint-disable-next-line react/prop-types
const ProductSection = ({ data = [], containerRef }) => {
  return (
    <div className="product__section" ref={containerRef}>
      {data.map((item) => (
        <div key={item.title}>
          <p className="product__title">{item.title}</p>
          <p className="product__content">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
