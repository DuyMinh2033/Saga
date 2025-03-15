/* eslint-disable prettier/prettier */
 
 
import * as Yup from 'yup';
const format = /^\d{2} \d{2} \d{4}$/;

export const validateDateFormat = () =>
  Yup.string().matches(format, 'Invalid date format. Use MM DD YYYY.');

export const validateDateLogic = function (value:String|undefined) {
  if (!value) return false;

  const [month, day, year] = value.split(' ').map(Number);
  const date = new Date(year, month - 1, day);
  const currentDate = new Date();
  const isValidData =
    date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day;
  const isFutureDay = date > currentDate;
  const isToday =  date.getFullYear() === currentDate.getFullYear() &&
  date.getMonth() === currentDate.getMonth() &&
  date.getDate() === currentDate.getDate()
  const is1930 = year < 1930
  const result = isFutureDay||isValidData||isToday||is1930
  return !result;
};
