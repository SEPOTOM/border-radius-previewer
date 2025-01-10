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
          inputName="top-left"
          inputLabel="Top-left corner"
          value={borderRadiusValues['top-left']}
          dropdownName="top-left-unit"
          dropdownLabel="Top-left corner unit"
          unit={borderRadiusUnits['top-left-unit']}
          onDataChange={handleBorderRadiusChange}
        />

        <BorderRadiusInput
          inputName="top-right"
          inputLabel="Top-right corner"
          value={borderRadiusValues['top-right']}
          dropdownName="top-right-unit"
          dropdownLabel="Top-right corner unit"
          unit={borderRadiusUnits['top-right-unit']}
          onDataChange={handleBorderRadiusChange}
        />
      </div>

      {children}

      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <BorderRadiusInput
          inputName="bottom-left"
          inputLabel="Bottom-left corner"
          value={borderRadiusValues['bottom-left']}
          dropdownName="bottom-left-unit"
          dropdownLabel="Bottom-left corner unit"
          unit={borderRadiusUnits['bottom-left-unit']}
          onDataChange={handleBorderRadiusChange}
        />

        <BorderRadiusInput
          inputName="bottom-right"
          inputLabel="Bottom-right corner"
          value={borderRadiusValues['bottom-right']}
          dropdownName="bottom-right-unit"
          dropdownLabel="Bottom-right corner unit"
          unit={borderRadiusUnits['bottom-right-unit']}
          onDataChange={handleBorderRadiusChange}
        />
      </div>
    </>
  );
};

export default NormalModeControls;
