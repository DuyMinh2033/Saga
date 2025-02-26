/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { dataContent } from "./constanst";
import ProductSection from "./ProductSection";
import { apiCall } from "../../Shared/apiCall";
import Loading from "../../common/components/Loading";

const url = "https://66ce967d901aab24841ee608.mockapi.io/api/v1/project";

const ProductCenter = () => {
  const containerRef = useRef(null);
  const [fetchData, setFetchData] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
        if (scrollTop + clientHeight + 50 >= scrollHeight) {
          setFetchData(true);
        } else {
          setFetchData(false);
        }
      }
    };
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      containerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleFetchData = async () => {
    setLoading(true);
    const fetch = await apiCall(url, "get");
    if (fetch.data) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData && handleFetchData();
  }, [fetchData]);

  return (
    <div>
      {loading && <Loading />}
      <Header />
      <ProductSection data={dataContent} containerRef={containerRef} />
      <div></div>
    </div>
  );
};

export default ProductCenter;
