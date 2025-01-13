import { FC } from 'react';

import { BorderRadiusInput } from '@/components';
import { AdvancedBorderRadiusUnits, AdvancedBorderRadiusValues } from '@/types';

import { AdvancedModeControlsProps } from './types';

const AdvancedModeControls: FC<AdvancedModeControlsProps> = ({
  children,
  borderRadiusValues,
  borderRadiusUnits,
  onBorderRadiusValuesChange,
  onBorderRadiusUnitsChange,
}) => {
  const handleBorderRadiusChange = (
    newValue: Nullable<Partial<AdvancedBorderRadiusValues>>,
    newUnit: Nullable<Partial<AdvancedBorderRadiusUnits>>,
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
        <div className="flex h-full max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3">
          <BorderRadiusInput
            scope="radius"
            corner="horizontal top-left"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
          <BorderRadiusInput
            scope="radius"
            corner="vertical top-left"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
        </div>
        <div className="flex h-full max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3">
          <BorderRadiusInput
            scope="radius"
            corner="horizontal top-right"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
          <BorderRadiusInput
            scope="radius"
            corner="vertical top-right"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
        </div>
      </div>
      {children}
      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <div className="flex h-full max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3">
          <BorderRadiusInput
            scope="radius"
            corner="horizontal bottom-left"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
          <BorderRadiusInput
            scope="radius"
            corner="vertical bottom-left"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
        </div>
        <div className="flex h-full max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3">
          <BorderRadiusInput
            scope="radius"
            corner="horizontal bottom-right"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
          <BorderRadiusInput
            scope="radius"
            corner="vertical bottom-right"
            values={borderRadiusValues}
            units={borderRadiusUnits}
            onDataChange={handleBorderRadiusChange}
          />
        </div>
      </div>
    </>
  );
};

export default AdvancedModeControls;
