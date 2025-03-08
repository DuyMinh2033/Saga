export const DateInWeekValue = {
  MON: '1',
  TUE: '2',
  WED: '3',
  THU: '4',
  FRI: '5',
  SAT: '6',
  SUN: '7',
};

export const frequencyWeekOptions = [
  { label: 'Mon', value: DateInWeekValue.MON },
  { label: 'Tue', value: DateInWeekValue.TUE },
  { label: 'Wed', value: DateInWeekValue.WED },
  { label: 'Thu', value: DateInWeekValue.THU },
  { label: 'Fri', value: DateInWeekValue.FRI },
  { label: 'Sat', value: DateInWeekValue.SAT },
  { label: 'Sun', value: DateInWeekValue.SUN },
];

export const FrequencyType = {
  WEEKLY: 'Weekly',
  BI_WEEKLY: 'Bi-weekly',
  ONCE: 'Once',
  MONTHLY: 'monthly',
};

export const frequencyTypeOptions = [
  { label: 'Once', value: FrequencyType.ONCE },
  { label: 'Weekly', value: FrequencyType.WEEKLY },
  { label: 'Bi-weekly', value: FrequencyType.BI_WEEKLY },
  { label: 'Monthly', value: FrequencyType.MONTHLY },
];
export const frequencyOnceOptions = [
  {
    label: '-',
    value: '0',
  },
];

export const frequencyValueByTypeOptions = {
  [FrequencyType.ONCE]: frequencyOnceOptions,
  [FrequencyType.BI_WEEKLY]: frequencyWeekOptions,
  [FrequencyType.WEEKLY]: frequencyWeekOptions,
};
