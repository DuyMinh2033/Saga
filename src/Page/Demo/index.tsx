import { ReactNode } from "react";
import "./styles.scss";
interface propsType {
  children?: ReactNode
}
const Demo: React.FC<propsType> = () => {
  const handle = (isReact: boolean) => {
    alert(`${isReact}`)
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="text-5xl ml-[30px] text-amber-900">jasdj</div>
      hello
      <button onClick={() => handle(true)}>click me!</button>
    </div>
  );
};

export default Demo;
