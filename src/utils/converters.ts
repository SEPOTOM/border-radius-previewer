import {
  AdvancedBorderRadiusValues,
  BorderRadiusUnits,
  BorderRadiusValues,
} from '@/types';
import { ORDERED_CORNERS } from '@/utils';

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
  obj: AdvancedBorderRadiusValues,
): string => {
  const borderRadius = [
    obj['horizontal top-left'],
    obj['horizontal top-right'],
    obj['horizontal bottom-right'],
    obj['horizontal bottom-left'],
    obj['vertical top-left'],
    obj['vertical top-right'],
    obj['vertical bottom-right'],
    obj['vertical bottom-left'],
  ].map((value) => {
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue) || parsedValue === 0) {
      return '0';
    } else {
      return `${parsedValue}px`;
    }
  });

  borderRadius.splice(4, 0, '/');

  return borderRadius.join(' ');
};
