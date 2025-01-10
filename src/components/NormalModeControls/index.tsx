import { ChangeEvent, FC } from 'react';

import { UnitDropdown } from '@/components';

import { NormalModeControlsProps } from './types';

const NormalModeControls: FC<NormalModeControlsProps> = ({
  children,
  borderRadiusValues,
  borderRadiusUnits,
  onBorderRadiusValuesChange,
  onBorderRadiusUnitsChange,
}) => {
  const handleBorderRadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    onBorderRadiusValuesChange({
      ...borderRadiusValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleBorderRadiusUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onBorderRadiusUnitsChange({
      ...borderRadiusUnits,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 pr-2">
          <input
            type="number"
            aria-label="Top-left corner"
            name="top-left"
            value={borderRadiusValues['top-left']}
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-l-sm rounded-r-none border-r border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <UnitDropdown
            aria-label="Top-left corner unit"
            name="top-left-unit"
            onChange={handleBorderRadiusUnitChange}
            value={borderRadiusUnits['top-left-unit']}
            className="rounded-l-none rounded-r-sm border-l border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 pl-2">
          <input
            type="number"
            aria-label="Top-right corner"
            value={borderRadiusValues['top-right']}
            name="top-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-l-sm rounded-r-none border-r border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <UnitDropdown
            aria-label="Top-right corner unit"
            name="top-right-unit"
            onChange={handleBorderRadiusUnitChange}
            value={borderRadiusUnits['top-right-unit']}
            className="rounded-l-none rounded-r-sm border-l border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
      </div>
      {children}
      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 pr-2">
          <input
            type="number"
            aria-label="Bottom-left corner"
            value={borderRadiusValues['bottom-left']}
            name="bottom-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-l-sm rounded-r-none border-r border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <UnitDropdown
            aria-label="Bottom-left corner unit"
            name="bottom-left-unit"
            onChange={handleBorderRadiusUnitChange}
            value={borderRadiusUnits['bottom-left-unit']}
            className="rounded-l-none rounded-r-sm border-l border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 pl-2">
          <input
            type="number"
            aria-label="Bottom-right corner"
            value={borderRadiusValues['bottom-right']}
            name="bottom-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-l-sm rounded-r-none border-r border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <UnitDropdown
            aria-label="Bottom-right corner unit"
            name="bottom-right-unit"
            onChange={handleBorderRadiusUnitChange}
            value={borderRadiusUnits['bottom-right-unit']}
            className="rounded-l-none rounded-r-sm border-l border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
      </div>
    </>
  );
};

export default NormalModeControls;
