/* eslint-disable radix */
/* eslint-disable curly */
import enLocale from 'date-fns/locale/en-US';
import arLocale from 'date-fns/locale/ar-SA';

import {format} from 'date-fns';
import food from '../Icons/food.png';
import cinema from '../Icons/cinema.png';
import medicine from '../Icons/medicine.png';
import transfer from '../Icons/transfer.png';
import salary from '../Icons/salary.png';

const icons = {
  food,
  cinema,
  transfer,
  medicine,
  salary,
};

export const getCategoryIcon = categoryName => icons[categoryName];

const datetimeLocalesMap = {en: enLocale, ar: arLocale};
export const formats = {
  dateShort: 'dd/MM/yyyy',
  dateLong: 'EEE, dd MMM yyyy',
};

export const formatDate = (date, formatStr, locale, defaultFormat = true) => {
  if (!defaultFormat) date = date.split('-').reverse().join('-');

  if (!date) return null;

  return locale
    ? format(new Date(date), formatStr, {locale: datetimeLocalesMap[locale]})
    : format(new Date(date), formatStr);
};

export const convertDate = dateStr => {
  const [day, month, year] = dateStr.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options).replace(/,/g, '');
};
