import { useMemo, useRef } from "react";
import "./styles.scss";
import { productListData, ProductTab, ProductTabDisplay } from "./constans";
import ProductSection from "./components/ProductSection/ProductSection";
import ScrollAnchor from "./components/AnChorScroll/AnchorSscroll";
import Header from "../../components/Header";

const options = {
  classHeader: ".header__wrapper",
  classAnchor: ".anchor__tab__wrapper",
};

const ProductList = () => {
  const bankingTitleRef = useRef(null);
  const investmentTitleRef = useRef(null);
  const borrowingTitleRef = useRef(null);

  const sections = useMemo(
    () => [
      { ref: bankingTitleRef, tab: ProductTab.BANKING, label: "Banking" },
      {
        ref: investmentTitleRef,
        tab: ProductTab.INVESTMENT,
        label: "Investment",
      },
      { ref: borrowingTitleRef, tab: ProductTab.BORROWING, label: "Borrowing" },
    ],
    []
  );

  const filterProduct = useMemo(() => {
    return (product) => {
      let data = {
        banking: [],
        investment: [],
        borrowing: [],
      };
      for (let i = 0; i < product.length; i++) {
        const item = product[i];
        if (item.dep_sjt_class === "1") data.banking.push(item);
        if (item.dep_sjt_class === "2") data.investment.push(item);
        if (item.dep_sjt_class === "3") data.borrowing.push(item);
      }
      return data;
    };
  }, []);

  return (
    <div className="product-list__wrapper">
      <Header />
      <ScrollAnchor sections={sections} options={options}>
        <ProductSection
          ref={bankingTitleRef}
          products={filterProduct(productListData).banking}
          tabClass="banking"
          title={ProductTabDisplay[ProductTab.BANKING]}
          className="banking"
        />
        <ProductSection
          ref={investmentTitleRef}
          products={filterProduct(productListData).investment}
          tabClass="investment"
          title={ProductTabDisplay[ProductTab.INVESTMENT]}
          className="investment"
        />
        <ProductSection
          ref={borrowingTitleRef}
          products={filterProduct(productListData).borrowing}
          tabClass="borrowing"
          title={ProductTabDisplay[ProductTab.BORROWING]}
          className="borrowing"
        />
      </ScrollAnchor>
    </div>
  );
};

export default ProductList;
