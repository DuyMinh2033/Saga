import * as Yup from 'yup';

import { validateDateFormat, validateDateLogic } from './Section/schema';

export const dobSchema = Yup.object().shape({
  test: validateDateFormat().test('valid-date', 'Invalid date', validateDateLogic),
});

export const formatBirthDay = (value) => {
  if (!value) return '';

  let result = value.replace(/\D/g, '');

  if (result.length > 2) {
    result = result.slice(0, 2) + ' ' + result.slice(2);
  }
  if (result.length > 5) {
    result = result.slice(0, 5) + ' ' + result.slice(5, 9);
  }

  return result;
};
