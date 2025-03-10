import './styles.scss';
import DropDownTest from '@/components/DropDown/DropDownTest';

const Demo = () => {
  const hanle = (value) => {};

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="px-[24px] w-full">
        <button onClick={() => hanle('123')} />
        <DropDownTest />
      </div>
    </div>
  );
};

export default Demo;
