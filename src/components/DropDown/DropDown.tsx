import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import BottomSheet from '../BottomSheet/index';
import './styles.scss';

const DropDown = ({ showIcon = false, data = [], onSelectect, ...field }) => {
  const { onChange, value } = field;
  const [showBs, setShowBs] = useState(false);
  const handleOnClick = (name, value) => {
    onSelectect(value);
    onChange(name);
    setShowBs(false);
  };

  return (
    <>
      <div className="dropdown__container">
        <label className="label">{value}</label>
        {showIcon && <FaChevronDown onClick={() => setShowBs(true)} />}
      </div>
      <BottomSheet open={showBs} title={'countries'} onClose={() => setShowBs(false)}>
        <div className="dropdown">
          {data.map((item) => (
            <div
              key={item.name}
              className="container__item"
              onClick={() => handleOnClick(item.name, item.population)}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

export default DropDown;
