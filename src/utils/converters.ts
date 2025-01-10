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
    obj['horz-top-left'],
    obj['horz-top-right'],
    obj['horz-bottom-right'],
    obj['horz-bottom-left'],
    obj['vert-top-left'],
    obj['vert-top-right'],
    obj['vert-bottom-right'],
    obj['vert-bottom-left'],
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
