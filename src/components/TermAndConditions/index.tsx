import { useState } from 'react';

import ListCheck from '../ListCheck';
import ViewTerm from '../ViewTerm';

import { arrTerm } from '@/contanst.ts/arrTerm';

const TermAndCondition = ({ onSubmit }) => {
  const [checked, setChecked] = useState([]);

  const [viewTerm, setViewTerm] = useState({
    title: '',
    isOpen: false,
    content: '',
    value: '',
  });

  const handleClickView = (value) => {
    const checkVar = arrTerm.options.find((item) => item.value === value);
    setViewTerm({
      isOpen: true,
      title: checkVar.label,
      content: checkVar.fileUrl,
      value: checkVar.value,
    });
  };

  const handleOnClose = () => {
    setViewTerm({ ...viewTerm, isOpen: false });
  };
  console.log(checked);

  const handleConfirm = (value) => {
    const checkArrChecked = checked.some((item) => item === value);
    if (!checkArrChecked) {
      setChecked([...checked, value]);
    }
    handleOnClose();
  };
  return (
    <div>
      <ListCheck
        config={arrTerm}
        setChecked={setChecked}
        checked={checked}
        onClickView={handleClickView}
      />
      <button onClick={onSubmit} disabled={arrTerm.options.length !== checked.length}>
        Submit
      </button>
      <ViewTerm
        open={viewTerm.isOpen}
        title={viewTerm.title}
        onClose={handleOnClose}
        content={viewTerm.content}
        confirm={handleConfirm}
        value={viewTerm.value}
      />
    </div>
  );
};

export default TermAndCondition;
