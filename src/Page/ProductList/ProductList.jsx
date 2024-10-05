import { useMemo, useRef } from "react";
import "./styles.scss";
import {
  bannerBaseProductCode,
  dataBanker,
  keyBanker,
  productListData,
  ProductTab,
  ProductTabDisplay,
} from "./constans";

import ScrollAnchor from "./components/AnChorScroll/AnchorSscroll";
import Header from "../../components/Header";
import Banker from "./components/Banker";

const options = {
  classHeader: ".header__wrapper",
  classAnchor: ".anchor__tab__wrapper",
};

const ProductList = () => {
  const bankingTitleRef = useRef(null);
  const investmentTitleRef = useRef(null);
  const borrowingTitleRef = useRef(null);
  const bankerTitle = useRef(null);
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

  const renderProductSection = (ref, products, tabClass, title, className) => {
    // Return null if there are no products
    if (products.length === 0) return null;
    return (
      <>
        <div ref={ref} className={`${className}__content`}>
          <div className="product-list__title">{title}</div>
          {products.map((product, i) => {
            const itemImg = bannerBaseProductCode[product.prdt_c];
            const check = title === keyBanker.key;
            return (
              <div key={i}>
                {!check ? (
                  <div
                    className={`product-list__banner ${tabClass}`}
                    // onClick={() => handleNavigateOpenAccount(product)}
                  >
                    <div className="banner__container">
                      <div className="product-banner__desc">
                        <div className="product__type">
                          <span style={{ color: "green", fontSize: "20px" }}>
                            {product?.name}
                          </span>
                        </div>
                        <div className="product__desc">
                          <span>
                            This product provides high interest rate even for a
                            day saving with convenient deposit and withdrawal
                            system.
                          </span>
                        </div>
                      </div>
                      <div className="product-banner__spec">
                        <div className="product__item">
                          <div className="item__label">Rate</div>
                          <div className="item__value">
                            <span className="item__unit">up to</span>
                            <span className="item__quantity">
                              ~{product?.ntfct_intrt}
                            </span>
                            <span className="item__unit">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-banner__image">
                      <span style={{ color: "red", fontSize: "18px" }}>
                        {itemImg}
                      </span>
                    </div>
                  </div>
                ) : (
                  <Banker product={product} />
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="product-list__wrapper">
      <Header />
      <ScrollAnchor sections={sections} options={options}>
        {renderProductSection(
          bankingTitleRef,
          filterProduct(productListData).banking,
          "banking",
          ProductTabDisplay[ProductTab.BANKING],
          "banking"
        )}
        {renderProductSection(
          investmentTitleRef,
          filterProduct(productListData).investment,
          "investment",
          ProductTabDisplay[ProductTab.INVESTMENT],
          "investment"
        )}
        {renderProductSection(
          borrowingTitleRef,
          filterProduct(productListData).borrowing,
          "borrowing",
          ProductTabDisplay[ProductTab.BORROWING],
          "borrowing"
        )}

        {renderProductSection(
          bankerTitle,
          dataBanker,
          "banker",
          "banker",
          "banker"
        )}
      </ScrollAnchor>
    </div>
  );
};

export default ProductList;
