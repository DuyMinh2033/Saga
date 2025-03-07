import React, { ReactNode, useEffect, useState } from 'react';
type TabListType = {
  title: string;
};
type TabsPropsType = {
  clazz?: string;
  tabList: TabListType[];
  isShowTab?: boolean;
  children?: ReactNode;
  onTabChange: (tab: string, idx: number) => void;
  tabIndex: number;
};

const Tabs = (props: TabsPropsType) => {
  const { clazz, tabList, isShowTab = true, children, onTabChange, tabIndex = 0 } = props;
  const [tabActive, setTabActive] = useState(tabIndex);

  useEffect(() => {
    setTabActive(tabIndex);
  }, [tabIndex]);

  const handleTabClick = (tabName: string, index: number) => {
    setTabActive(index);
    onTabChange && onTabChange(tabName, index);
  };

  return (
    <div className={` w-full ${clazz}`}>
      {isShowTab && (
        <div className="flex ">
          {tabList.map((tab, index) => (
            <div
              className={`flex-1 flex justify-center items-center h-[50px] border-b-[2px] border-transparent transition duration-300 ease-linear text-[15px]   leading-[20px] ${tabActive === index ? 'border-b-[#121418] font-bold text-[#121418]' : 'text-[#808892] font-normal'}`}
              key={index}
              onClick={() => handleTabClick(tab.title, index)}
            >
              <span>{tab.title}</span>
            </div>
          ))}
        </div>
      )}
      {children && <div className="w-full pb-[10px] relative">{children}</div>}
    </div>
  );
};

export default Tabs;
