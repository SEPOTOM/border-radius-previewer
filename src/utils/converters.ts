import { BorderRadiusValues } from '@/types';

export const borderRadiusObjToStr = (obj: BorderRadiusValues): string =>
  [obj['top-left'], obj['top-right'], obj['bottom-right'], obj['bottom-left']]
    .map((value) => {
      const parsedValue = parseFloat(value);

      if (isNaN(parsedValue) || parsedValue === 0) {
        return '0';
      } else {
        return `${parsedValue}px`;
      }
    })
    .join(' ');
