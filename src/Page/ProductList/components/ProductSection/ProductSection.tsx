import { forwardRef } from 'react';

const ProductSection = forwardRef((props, ref) => {
  // eslint-disable-next-line no-unused-vars
  const { products = [], tabClass, title, className } = props;

  return (
    <div ref={ref} className={`item__container ${tabClass}`}>
      <div className="item__title">
        <h1>{title}</h1>
      </div>
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProductSection;
