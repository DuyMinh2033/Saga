import { useCallback, useMemo, useRef, useState } from 'react';

<<<<<<< Updated upstream
=======
import { useCallback, useMemo, useRef, useState } from 'react';
>>>>>>> Stashed changes
import BottomSheet from '../../../components/BottomSheet';
import ScrollSelect from '../ScrollSelectCty';
import {
  frequencyOnceOptions,
  FrequencyType,
  frequencyTypeOptions,
  frequencyValueByTypeOptions,
} from '../SelectFrequecyBottom/constants';

const FrequencyCty = ({ open, onClose, onChange = () => {}, value = {} }) => {
  const valueRef = useRef({});
  const selectedType = value?.type || FrequencyType.WEEKLY;
  const selectedValue = value?.value || frequencyOnceOptions[0].value;

  const [selectTypeOption, setSelectTypeOption] = useState(selectedValue);

  const handleConfirm = () => {
    const { value } = valueRef.current;
    console.log('🚀 ~ handleConfirm ~  { type, value }:', {
      selectTypeOption,
      value,
    });
    onChange({
      type: selectTypeOption,
      value,
    });
    // onClose?.();
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
    return frequencyValueByTypeOptions[selectTypeOption] || frequencyOnceOptions;
  }, [selectTypeOption]);

  const changeValueOption = useCallback(
    debounceChangeOption((value) => {
      setSelectTypeOption(value);
    }, 200),
    [],
  );

  return (
    <BottomSheet open={open} onClose={onClose} title="Select Frequency cty">
      <div className="content__frequency">
        <ScrollSelect
          options={frequencyTypeOptions}
          onChangeValue={(value) => changeValueOption(value)}
          defaultValue={'11'}
        />
        {/* <ScrollSelect
          options={valueOptions}
          defaultValue={selectedValue}
          // type={"test"}
          onChangeValue={(value) => {
            valueRef.current.value = value || '';
          }}
        /> */}
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </BottomSheet>
  );
};

export default FrequencyCty;
