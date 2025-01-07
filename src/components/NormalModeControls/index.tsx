import { ChangeEvent, FC, useState } from 'react';

import { borderRadiusObjToStr } from '@/utils';

import { NormalModeControlsProps } from './types';

const NormalModeControls: FC<NormalModeControlsProps> = ({
  children,
  onBorderRadiusChange,
}) => {
  const [borderRadiusValues, setBorderRadiusValues] = useState({
    'top-left': '0',
    'top-right': '0',
    'bottom-right': '0',
    'bottom-left': '0',
  });

  const handleBorderRadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newBorderRadiusValues = {
      ...borderRadiusValues,
      [e.target.name]: e.target.value,
    };

    setBorderRadiusValues(newBorderRadiusValues);

    const borderRadius = borderRadiusObjToStr(newBorderRadiusValues);

    onBorderRadiusChange(borderRadius);
  };

  return (
    <>
      <input
        type="number"
        aria-label="Top-left corner"
        name="top-left"
        value={borderRadiusValues['top-left']}
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Top-right corner"
        value={borderRadiusValues['top-right']}
        name="top-right"
        onChange={handleBorderRadiusChange}
      />
      {children}
      <input
        type="number"
        aria-label="Bottom-left corner"
        value={borderRadiusValues['bottom-left']}
        name="bottom-left"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Bottom-right corner"
        value={borderRadiusValues['bottom-right']}
        name="bottom-right"
        onChange={handleBorderRadiusChange}
      />
    </>
  );
};

export default NormalModeControls;
