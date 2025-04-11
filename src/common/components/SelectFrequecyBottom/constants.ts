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

// export const frequencyTypeOptions = [
//   { label: 'Once', value: FrequencyType.ONCE },
//   { label: 'Weekly', value: FrequencyType.WEEKLY },
//   { label: 'Bi-weekly', value: FrequencyType.BI_WEEKLY },
//   { label: 'Monthly', value: FrequencyType.MONTHLY },
// ];
export const frequencyTypeOptions = [
<<<<<<< Updated upstream
  { label: 'Once', value: FrequencyType.ONCE },
  { label: 'Weekly', value: FrequencyType.WEEKLY },
  { label: 'Bi-weekly', value: FrequencyType.BI_WEEKLY },
  { label: 'Monthly', value: FrequencyType.MONTHLY },
=======
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',

    label: '2',
  },
  {
    value: '3',

    label: '3',
  },
  {
    value: '4',

    label: '4',
  },
  {
    value: '5',

    label: '5',
  },
  {
    value: '6',

    label: '6',
  },
  {
    value: '7',

    label: '7',
  },
  {
    value: '8',

    label: '8',
  },
  {
    value: '9',

    label: '9',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
  {
    value: '13',
    label: '',
  },
  {
    value: '14',
    label: '',
  },
  {
    value: '15',
    label: '',
  },
  {
    value: '16',
    label: '',
  },
  {
    value: '17',
    label: '',
  },
  {
    value: '18',
    label: '',
  },
  {
    value: '19',
    label: '',
  },
  {
    value: '20',
    label: '',
  },
  {
    value: '21',
    label: '',
  },
  {
    value: '22',
    label: '',
  },
  {
    value: '23',
    label: '',
  },
  {
    value: '24',
    label: '',
  },
  {
    value: '25',
    label: '',
  },
  {
    value: '26',
    label: '',
  },
  {
    value: '27',
    label: '',
  },
  {
    value: '28',
    label: '',
  },
  {
    value: '29',
    label: '',
  },
  {
    value: '30',
    label: '30',
  },
  {
    value: '31',
    label: '31',
  },
>>>>>>> Stashed changes
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
