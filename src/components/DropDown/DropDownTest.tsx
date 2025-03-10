/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const DropDownTest = ({ disable }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('value');
  const handleFocus = () => {
    setIsFocus(true);
    console.log('run');
  };
  const handleBlur = () => {
    // if (value) return;
    setIsFocus(false);
  };
  useEffect(() => {
    if (value && !isFocus) {
      setIsFocus(true);
    }
  }, [value]);

  return (
    <div
      className={`drop-down  ${isFocus && 'focus'} ${disable ? 'bg-[#F8F9FC] pointer-events-none' : ''}`}
      tabIndex={-1}
      onFocus={handleFocus}
      onBlur={handleBlur}
      id="asdajsdkjhashqweuqw"
    >
      <p className="label">label</p>
      <div className="value-dropdown">{value}</div>
      <div className="absolute right-[18px] top-[50%] -translate-y-[50%] h-[20px] w-[20px] flex justify-center items-center icon">
        <FaChevronDown />
      </div>
    </div>
  );
};  

export default DropDownTest;
