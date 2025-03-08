import Tabs from '@/components/Tabs';

import './styles.scss';

const Demo = () => {
  const hanle = (value) => {};

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="px-[24px] w-full">
        <button onClick={() => hanle('123')} />
        <div />
        <Tabs
          tabList={[
            {
              title: 'Transaction',
            },
            {
              title: 'Your Offers',
            },
            {
              title: 'Promotion',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Demo;
