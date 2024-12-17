import { useEffect, useState, useTransition } from "react";
import "./styles.scss";

const Demo = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      startTransition(() => {
        setData(result);
      });
    });
  }, []);

  return (
    <div className="over">
      {/* {isPending && <p>Updating UI...</p>}
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul> */}

      <div className="test_ui">
        <div className="test_container">
          <p>Hello world!</p>
          <p>Hello everyone!</p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
