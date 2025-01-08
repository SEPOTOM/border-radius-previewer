import { ChangeEvent, FC, useState } from 'react';

import { AdvancedModeControlsProps } from './types';

const AdvancedModeControls: FC<AdvancedModeControlsProps> = ({
  children,
  onBorderRadiusChange,
}) => {
  const [borderRadiusValues, setBorderRadiusValues] = useState({
    'horz-top-left': '0',
    'horz-top-right': '0',
    'horz-bottom-right': '0',
    'horz-bottom-left': '0',
    'vert-top-left': '0',
    'vert-top-right': '0',
    'vert-bottom-right': '0',
    'vert-bottom-left': '0',
  });

  const handleBorderRadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newBorderRadiusValues = {
      ...borderRadiusValues,
      [e.target.name]: e.target.value,
    };

    setBorderRadiusValues(newBorderRadiusValues);

    const borderRadius = [
      newBorderRadiusValues['horz-top-left'],
      newBorderRadiusValues['horz-top-right'],
      newBorderRadiusValues['horz-bottom-right'],
      newBorderRadiusValues['horz-bottom-left'],
      newBorderRadiusValues['vert-top-left'],
      newBorderRadiusValues['vert-top-right'],
      newBorderRadiusValues['vert-bottom-right'],
      newBorderRadiusValues['vert-bottom-left'],
    ].map((value) => {
      const parsedValue = parseFloat(value);

      if (isNaN(parsedValue) || parsedValue === 0) {
        return '0';
      } else {
        return `${parsedValue}px`;
      }
    });

    borderRadius.splice(4, 0, '/');

    onBorderRadiusChange(borderRadius.join(' '));
  };

  return (
    <>
      <input
        type="number"
        aria-label="Horizontal top-left radius"
        value={borderRadiusValues['horz-top-left']}
        name="horz-top-left"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Horizontal top-right radius"
        value={borderRadiusValues['horz-top-right']}
        name="horz-top-right"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Horizontal bottom-left radius"
        value={borderRadiusValues['horz-bottom-left']}
        name="horz-bottom-left"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Horizontal bottom-right radius"
        value={borderRadiusValues['horz-bottom-right']}
        name="horz-bottom-right"
        onChange={handleBorderRadiusChange}
      />
      {children}
      <input
        type="number"
        aria-label="Vertical top-left radius"
        value={borderRadiusValues['vert-top-left']}
        name="vert-top-left"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Vertical top-right radius"
        value={borderRadiusValues['vert-top-right']}
        name="vert-top-right"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Vertical bottom-left radius"
        value={borderRadiusValues['vert-bottom-left']}
        name="vert-bottom-left"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Vertical bottom-right radius"
        value={borderRadiusValues['vert-bottom-right']}
        name="vert-bottom-right"
        onChange={handleBorderRadiusChange}
      />
    </>
  );
};

export default AdvancedModeControls;
