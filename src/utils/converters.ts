import { AdvancedBorderRadiusValues, BorderRadiusValues } from '@/types';
import { ORDERED_CORNERS, ORDERED_RADII } from '@/utils';

export const borderRadiusObjToStr = (values: BorderRadiusValues): string =>
  ORDERED_CORNERS.map((corner) => {
    const [value, unit] = values[corner];
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue) || parsedValue === 0) {
      return '0';
    } else {
      return `${parsedValue}${unit}`;
    }
  }).join(' ');

export const borderRadiusObjToStrAdvanced = (
  values: AdvancedBorderRadiusValues,
): string => {
  const borderRadiusValues = ORDERED_RADII.map((radius) => {
    const [value, unit] = values[radius];
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue) || parsedValue === 0) {
      return '0';
    } else {
      return `${parsedValue}${unit}`;
    }
  });

  borderRadiusValues.splice(4, 0, '/');

  return borderRadiusValues.join(' ');
};
