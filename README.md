import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import { Button } from '@common/components/atoms/ButtonGroup/Button/Button';
import ScrollSelect from '@common/components/molecules/ScrollSelect';
import BottomSheet from '@common/components/templates/BottomSheet';
import { FrequencyType } from '@common/constants/bottomsheet';
import debounce from 'debounce';
import { PropTypes } from 'prop-types';

import '../bs_styles.scss';
import {
  frequencyMonthlyOptions,
  frequencyOnceOptions,
  frequencyTypeOptions,
  frequencyValueByTypeOptions,
  frequencyWeekOptions,
} from './constants';

//TODO: Handle logic
const SelectFrequencyBottom = ({ open, onClose, onChange, value = {} }) => {
  const [valueOptions, setValueOptions] = useState(frequencyMonthlyOptions);
  const valueRef = useRef({});
  const selectedType = value?.type || FrequencyType.MONTHLY;
  const selectedValue = value?.value || frequencyMonthlyOptions[0].value;

  // useEffect(() => {
  //   setValueOptions(frequencyMonthlyOptions);
  // }, []);

  const handleConfirm = () => {
    const { type, value } = valueRef.current;
    onChange({
      type,
      value,
    });
  };

  // useEffect(() => {
  //   if (selectedType) {
  //     // setValueOptions(frequencyValueByTypeOptions[selectedType]);
  //   }
  // }, [selectedType]);

  const debounceChangeOption = (cb, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const changeValueOption = useCallback(
    debounceChangeOption(value => {
      const select = frequencyTypeOptions.find(item => item.value === value) || {};
      const options = frequencyValueByTypeOptions[select.value];
      setValueOptions(options);
    }, 550),
    []
  );

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      title="Select Frequency"
      clazz="bottom__dropdown__wrapper"
      type="fit-content"
    >
      <div>
        <div className="select_wrapper">
          <ScrollSelect
            options={frequencyTypeOptions}
            defaultValue={selectedType}
            onChangeValue={value => {
              changeValueOption(value);
              valueRef.current.type = value;
            }}
          />

          <ScrollSelect
            options={valueOptions}
            defaultValue={selectedValue}
            onChangeValue={value => {
              valueRef.current.value = value;
            }}
          />
        </div>

        <div className="btn_container">
          <Button
            label="Confirm"
            variant="filled__primary"
            className="w-full"
            onClick={handleConfirm}
          />
        </div>
      </div>
    </BottomSheet>
  );
};

SelectFrequencyBottom.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.object,
};

SelectFrequencyBottom.defaultProps = {
  open: false,
  onClose: () => {},
  onChange: () => {},
  value: {},
};

export default SelectFrequencyBottom;



import { DateInWeekValue, FrequencyType } from '@common/constants/bottomsheet';

export const frequencyTypeOptions = [
  {
    label: 'Once',
    value: FrequencyType.ONCE,
  },
  {
    label: 'Weekly',
    value: FrequencyType.WEEKLY,
  },
  {
    label: 'Bi-weekly',
    value: FrequencyType.BI_WEEKLY,
  },
  {
    label: 'Monthly',
    value: FrequencyType.MONTHLY,
  },
];

export const frequencyOnceOptions = [
  {
    label: '-',
    value: '0',
  },
];

export const frequencyWeekOptions = [
  {
    label: 'Mon',
    value: DateInWeekValue.MON,
  },
  {
    label: 'Tue',
    value: DateInWeekValue.TUE,
  },
  {
    label: 'Wed',
    value: DateInWeekValue.WED,
  },
  {
    label: 'Thu',
    value: DateInWeekValue.THU,
  },
  {
    label: 'Fri',
    value: DateInWeekValue.FRI,
  },
  {
    label: 'Sat',
    value: DateInWeekValue.SAT,
  },
  {
    label: 'Sun',
    value: DateInWeekValue.SUN,
  },
];

export const frequencyMonthlyOptions = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
];

export const frequencyValueByTypeOptions = {
  [FrequencyType.ONCE]: frequencyOnceOptions,
  [FrequencyType.WEEKLY]: frequencyWeekOptions,
  [FrequencyType.BI_WEEKLY]: frequencyWeekOptions,
  [FrequencyType.MONTHLY]: frequencyMonthlyOptions,
};
