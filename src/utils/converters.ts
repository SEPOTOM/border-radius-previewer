import {
  AdvancedBorderRadiusUnits,
  AdvancedBorderRadiusValues,
  BorderRadiusUnits,
  BorderRadiusValues,
} from '@/types';
import { ORDERED_CORNERS, ORDERED_RADII } from '@/utils';

export const borderRadiusObjToStr = (
  values: BorderRadiusValues,
  units: BorderRadiusUnits,
): string =>
  ORDERED_CORNERS.map((corner) => {
    const parsedValue = parseFloat(values[corner]);

    if (isNaN(parsedValue) || parsedValue === 0) {
      return '0';
    } else {
      return `${parsedValue}${units[`${corner}-unit`]}`;
    }
  }).join(' ');

export const borderRadiusObjToStrAdvanced = (
  values: AdvancedBorderRadiusValues,
  units: AdvancedBorderRadiusUnits,
): string => {
  const borderRadiusValues = ORDERED_RADII.map((radius) => {
    const parsedValue = parseFloat(values[radius]);

    if (isNaN(parsedValue) || parsedValue === 0) {
      return '0';
    } else {
      return `${parsedValue}${units[`${radius}-unit`]}`;
    }
  });

  borderRadiusValues.splice(4, 0, '/');

  return borderRadiusValues.join(' ');
};
