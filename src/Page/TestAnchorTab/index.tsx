import { useEffect, useRef, useState } from 'react';

import AnchorTabPractice from '../../common/components/AnchorTab';
import Header from '../../components/Header';
import { productListData } from '../ProductList/constans';
import './styles.scss';

const TestAnchorTab = () => {
  const refBanking = useRef(null);
  const refInvestment = useRef(null);
  const refBorrowing = useRef(null);
  const [data, setData] = useState([]);
  const timeOut = useRef(null);
  const arrDataAnchor = [
    {
      ref: refBanking,
      title: 'Banking',
    },
    {
      ref: refInvestment,
      title: 'Investment',
    },
    {
      ref: refBorrowing,
      title: 'Borrowing',
    },
  ];

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      setData(productListData);
    }, 1000);

    return () => {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, []);

  const Product = data.reduce((acc, item) => {
    const map = {
      1: 'bank',
      2: 'investment',
      3: 'borrowing',
    };

    const key = map[item.dep_sjt_class];
    if (key) {
      acc[key] = acc[key] ? [...acc[key], item] : [item];
    }
    return acc;
  }, {});

  const renderProductSection = (products, title, ref) => {
    if (!products || products.length === 0) return null;
    return (
      <div className="item__product" ref={ref}>
        <div>
          <p style={{ color: 'green' }}>{title}</p>
        </div>
        {products?.map((item) => {
          return (
            <div key={item.id}>
              <p style={{ color: 'red' }}>{item.name}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <AnchorTabPractice data={arrDataAnchor}>
        <div className="container__productList">
          {renderProductSection(Product.bank, 'Bank', refBanking)}
          {renderProductSection(Product.investment, 'Investment', refInvestment)}
          {renderProductSection(Product.borrowing, 'Borrowing', refBorrowing)}
        </div>
      </AnchorTabPractice>
    </div>
  );
};

export default TestAnchorTab;
