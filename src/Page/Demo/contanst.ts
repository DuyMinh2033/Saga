import * as Yup from 'yup';

import { validateDateFormat, validateDateLogic } from './Section/schema';

export const dobSchema = Yup.object().shape({
  test: validateDateFormat().test('valid-date', 'Invalid date', validateDateLogic),
});

export const formatBirthDay = (value: string, prevValue: string = '') => {
  if (!value) return '';
  const isBackSpace = value.length < prevValue.length;
  let result = value.replace(/\D/g, '');

  if (isBackSpace) {
    if (prevValue.endsWith(' ') && value.length === prevValue.length - 1) {
      result = result.slice(0, -1);
    }
  }

  if (result.length === 1) {
    const firstMonth = Number(result[0]);
    if (firstMonth !== 0 && firstMonth !== 1) {
      return prevValue;
    }
  }

  if (result.length === 3) {
    const firstDay = Number(result[2]);
    if (firstDay !== 0 && firstDay !== 1 && firstDay !== 2 && firstDay !== 3) {
      return prevValue;
    }
  }

  if (result.length >= 2) {
    let month = result.slice(0, 2);
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      return prevValue;
    }
    result = result.slice(0, 2) + ' ' + result.slice(2);
  }

  if (result.length >= 5) {
    const day = result.slice(3, 5);
    if (parseInt(day, 10) < 1 || parseInt(day, 10) > 31) {
      return prevValue;
    }
    result = result.slice(0, 5) + ' ' + result.slice(5, 9);
  }
  return result;
};
