/* eslint-disable curly */
import enLocale from 'date-fns/locale/en-US';
import arLocale from 'date-fns/locale/ar-SA';

import {format} from 'date-fns';
import food from '../Icons/food.png';
import cinema from '../Icons/cinema.png';
import medicine from '../Icons/medicine.png';
import transfer from '../Icons/transfer.png';
import salary from '../Icons/salary.png';
import emptymoney from '../Icons/emptymoney.png';

export const icons = {
  food,
  cinema,
  transfer,
  medicine,
  salary,
  emptymoney,
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

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const assignCategoryColors = (
  categorySpending,
  colorPalette,
  existingColors,
) => {
  const categoryWithColors = categorySpending.map((item, index) => {
    let colorObj = colorPalette.find(
      paletteItem => paletteItem.color === existingColors[index],
    );
    if (!colorObj) {
      let newColor = getRandomColor();
      while (existingColors.includes(newColor)) {
        newColor = getRandomColor();
      }
      colorObj = {
        color: newColor,
        gradientCenterColor: newColor,
        focused: false,
      };
      colorPalette.push(colorObj);
      existingColors.push(newColor);
    }

    return {
      ...item,
      color: colorObj.color,
      gradientCenterColor: colorObj.gradientCenterColor,
      focused: colorObj.focused,
    };
  });

  return categoryWithColors;
};

export const calculateMaxCategoryRatio = (categorySpending, totalSpending) => {
  if (totalSpending === 0 || categorySpending.length === 0) return null;
  let maxCategory = categorySpending[0];

  categorySpending.forEach(item => {
    if (item.value > maxCategory.value) {
      maxCategory = item;
    }
  });

  const maxCategoryRatio =
    Math.round((maxCategory.value / totalSpending) * 100) + '%';

  return {
    category: maxCategory.category,
    value: maxCategory.value,
    ratio: maxCategoryRatio,
  };
};
