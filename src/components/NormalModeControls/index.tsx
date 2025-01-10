import { FC } from 'react';

import { BorderRadiusInput } from '@/components';
import { BorderRadiusUnits, BorderRadiusValues } from '@/types';

import { NormalModeControlsProps } from './types';

const NormalModeControls: FC<NormalModeControlsProps> = ({
  children,
  borderRadiusValues,
  borderRadiusUnits,
  onBorderRadiusValuesChange,
  onBorderRadiusUnitsChange,
}) => {
  const handleBorderRadiusChange = (
    newValue: Nullable<Partial<BorderRadiusValues>>,
    newUnit: Nullable<Partial<BorderRadiusUnits>>,
  ) => {
    if (newValue) {
      onBorderRadiusValuesChange({
        ...borderRadiusValues,
        ...newValue,
      });
    }

    if (newUnit) {
      onBorderRadiusUnitsChange({
        ...borderRadiusUnits,
        ...newUnit,
      });
    }
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <BorderRadiusInput
          values={borderRadiusValues}
          corner="top-left"
          scope="corner"
          units={borderRadiusUnits}
          onDataChange={handleBorderRadiusChange}
        />

        <BorderRadiusInput
          values={borderRadiusValues}
          corner="top-right"
          scope="corner"
          units={borderRadiusUnits}
          onDataChange={handleBorderRadiusChange}
        />
      </div>

      {children}

      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <BorderRadiusInput
          values={borderRadiusValues}
          corner="bottom-right"
          scope="corner"
          units={borderRadiusUnits}
          onDataChange={handleBorderRadiusChange}
        />

        <BorderRadiusInput
          values={borderRadiusValues}
          corner="bottom-left"
          scope="corner"
          units={borderRadiusUnits}
          onDataChange={handleBorderRadiusChange}
        />
      </div>
    </>
  );
};

export default NormalModeControls;
