import { FC } from 'react';

import { BorderRadiusInput } from '@/components';
import { BorderRadiusValues } from '@/types';

import { NormalModeControlsProps } from './types';

const NormalModeControls: FC<NormalModeControlsProps> = ({
  children,
  borderRadiusValues,
  onBorderRadiusValuesChange,
}) => {
  const handleBorderRadiusChange = (newValue: Partial<BorderRadiusValues>) => {
    onBorderRadiusValuesChange({
      ...borderRadiusValues,
      ...newValue,
    });
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <BorderRadiusInput
          values={borderRadiusValues}
          corner="top-left"
          scope="corner"
          onDataChange={handleBorderRadiusChange}
        />

        <BorderRadiusInput
          values={borderRadiusValues}
          corner="top-right"
          scope="corner"
          onDataChange={handleBorderRadiusChange}
        />
      </div>

      {children}

      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <BorderRadiusInput
          values={borderRadiusValues}
          corner="bottom-left"
          scope="corner"
          onDataChange={handleBorderRadiusChange}
        />

        <BorderRadiusInput
          values={borderRadiusValues}
          corner="bottom-right"
          scope="corner"
          onDataChange={handleBorderRadiusChange}
        />
      </div>
    </>
  );
};

export default NormalModeControls;
