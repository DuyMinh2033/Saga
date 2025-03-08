import { useCallback, useMemo, useRef, useState } from 'react';

import BottomSheet from '../../../components/BottomSheet';
import SelectDate from '../ScrollSelectDate';

import {
  FrequencyType,
  frequencyTypeOptions,
  frequencyValueByTypeOptions,
  frequencyWeekOptions,
} from './constants';
import './styles.scss';

//TODO: Handle logic
const SelectFrequencyBottom = ({ open, onClose, onChange, value = {} }) => {
  const valueRef = useRef({});
  const selectedType = value?.type || FrequencyType.MONTHLY;
  const selectedValue = value?.value || frequencyWeekOptions[0].value;

  const [selectTypeOption, setSelectTypeOption] = useState(selectedValue);

  const handleConfirm = () => {
    const { type, value } = valueRef.current;
    console.log('🚀 ~ handleConfirm ~  { type, value }:', { type, value });
    onChange({
      type,
      value,
    });
  };

  const debounceChangeOption = (cb, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const valueOptions = useMemo(() => {
    return frequencyValueByTypeOptions[selectTypeOption] || frequencyWeekOptions;
  }, [selectTypeOption]);

  const changeValueOption = useCallback(
    debounceChangeOption((value) => {
      valueRef.current.type = value;
      setSelectTypeOption(value);
    }, 100),
    [],
  );

  return (
    <>
      <BottomSheet open={open} onClose={onClose} title="Select Frequency">
        <div className="content__frequency">
          <SelectDate
            options={frequencyTypeOptions}
            onChangeValue={(value) => changeValueOption(value)}
            defaultOption={selectedType}
          />
          <SelectDate
            options={valueOptions}
            onChangeValue={(value) => {
              // const convert = valueOptions.find((item) => item.label === value);
              valueRef.current.value = value || '';
            }}
          />
        </div>
        <button onClick={handleConfirm}>confirm</button>
      </BottomSheet>
    </>
  );
};
export default SelectFrequencyBottom;
