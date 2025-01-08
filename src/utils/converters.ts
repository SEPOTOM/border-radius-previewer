import { AdvancedBorderRadiusValues, BorderRadiusValues } from '@/types';

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
