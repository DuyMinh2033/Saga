import * as Yup from 'yup';
const format = /^\d{2} \d{2} \d{4}$/;

export const validateDateFormat = () =>
  Yup.string().matches(format, 'Invalid date format. Use MM DD YYYY.');

export const validateDateLogic = function (value) {
  if (!value) return this.createError({ message: 'Value is required.' });

  const [month, day, year] = value.split(' ').map(Number);
  const date = new Date(year, month - 1, day);
  const currentDate = new Date();

  if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
    return this.createError({ message: 'Invalid date of birth' });
  }
  if (date > currentDate) {
    return this.createError({ message: 'Birth date cannot be in the future.' });
  }

  if (
    date.getFullYear() === currentDate.getFullYear() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate()
  ) {
    return this.createError({ message: 'Birth date cannot be today.' });
  }
  if (year < 1930) {
    return this.createError({ message: 'Year of birth cannot be before 1930' });
  }

  return true;
};
