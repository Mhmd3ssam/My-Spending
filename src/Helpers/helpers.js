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
