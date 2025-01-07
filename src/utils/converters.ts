export const borderRadiusObjToStr = (obj: {
  'top-left': string;
  'top-right': string;
  'bottom-left': string;
  'bottom-right': string;
}): string =>
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
