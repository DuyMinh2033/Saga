/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

import { validateDateFormat, validateDateLogic } from './Section/schema';

export const dobSchema = Yup.object().shape({
  test: validateDateFormat().test('valid-date', 'Invalid date', validateDateLogic),
});

export const formatBirthDay = (value: string, prevValue: string = '') => {
  if (!value) return '';
  const isBackSpace = value.length < prevValue.length;
  let result = value.replace(/\D/g, '');
  console.log('🚀 ~ formatBirthDay ~ result:', typeof result);

  if (isBackSpace) {
    if (prevValue.endsWith(' ') && value.length === prevValue.length - 1) {
      result = result.slice(0, -1);
    }
  }

  if (result.length === 1) {
    const firstDigit = Number(result[0]);
    if (![0, 1].includes(firstDigit) && firstDigit < 10 && !isBackSpace) {
      return (result = `0${firstDigit} `); // add 0 to the first digit
    } else if (![0, 1].includes(firstDigit)) {
      return prevValue;
    }
  }

  if (result.length === 3) {
    const threeDigits = Number(result[2]);
    if (![0, 1, 2, 3].includes(threeDigits)) {
      return prevValue;
    }
  }

  if (result.length >= 2) {
    let month = Number(result.slice(0, 2));
    if (month < 1 || month > 12) {
      return prevValue;
    }
    result = result.slice(0, 2) + ' ' + result.slice(2);
  }

  if (result.length >= 5) {
    const day = Number(result.slice(3, 5));
    if (day < 1 || day > 31) {
      return prevValue;
    }
    result = result.slice(0, 5) + ' ' + result.slice(5, 9);
  }
  return result;
};
