import { apiCall } from "../../Shared/apiCall";
import { useEffect, useState } from "react";
const Axios = () => {
  const [respone, setRespone] = useState("");

  const convertData = () => {
    const result = {};
    if (respone !== "") {
      for (const key in respone) {
        result[key] = "";
      }
    }
    return result;
  };

  const handle = async () => {
    const url = "http://localhost:8800/api/test/test-form";
    const fetch = await apiCall(url, "post", { data: "hello" });
    setRespone(fetch);
  };

  useEffect(() => {
    const data = convertData();
    console.log("🚀 ~ useEffect ~ data:", data);
  }, [respone]);

  // useEffect(() => {
  //   const fetchData2 = async () => {
  //     debugger;
  //     const url = await fetch(
  //       "https://66ce967d901aab24841ee608.mockapi.io/api/v1/project"
  //     );
  //     const data = await url.json();
  //     console.log(data);
  //   };
  //   if (respone !== "") {
  //     fetchData2();
  //   }
  // }, [respone]);

  return (
    <div>
      <button onClick={handle}>Click Me!</button>
    </div>
  );
};

export default Axios;
