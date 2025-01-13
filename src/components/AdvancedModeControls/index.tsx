import { ChangeEvent, FC } from 'react';

import { UnitDropdown } from '@/components';

import { AdvancedModeControlsProps } from './types';

const AdvancedModeControls: FC<AdvancedModeControlsProps> = ({
  children,
  borderRadiusValues,
  onBorderRadiusValuesChange,
}) => {
  const handleBorderRadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    onBorderRadiusValuesChange({
      ...borderRadiusValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3 pr-2">
          <input
            type="number"
            aria-label="Horizontal top-left radius"
            value={borderRadiusValues['horizontal top-left']}
            name="horizontal top-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical top-left radius"
            value={borderRadiusValues['vertical top-left']}
            name="vertical top-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3 pl-2">
          <input
            type="number"
            aria-label="Horizontal top-right radius"
            value={borderRadiusValues['horizontal top-right']}
            name="horizontal top-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical top-right radius"
            value={borderRadiusValues['vertical top-right']}
            name="vertical top-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
      </div>
      {children}
      <div className="mx-auto flex w-full max-w-[432px] justify-between overflow-hidden sm:justify-center sm:gap-36">
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3 pr-2">
          <input
            type="number"
            aria-label="Horizontal bottom-left radius"
            value={borderRadiusValues['horizontal bottom-left']}
            name="horizontal bottom-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical bottom-left radius"
            value={borderRadiusValues['vertical bottom-left']}
            name="vertical bottom-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3 pl-2">
          <input
            type="number"
            aria-label="Horizontal bottom-right radius"
            value={borderRadiusValues['horizontal bottom-right']}
            name="horizontal bottom-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical bottom-right radius"
            value={borderRadiusValues['vertical bottom-right']}
            name="vertical bottom-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
      </div>

      <UnitDropdown
        aria-label="Horizontal top-left radius unit"
        defaultValue="%"
      />
      <UnitDropdown
        aria-label="Horizontal top-right radius unit"
        defaultValue="%"
      />
      <UnitDropdown
        aria-label="Horizontal bottom-left radius unit"
        defaultValue="%"
      />
      <UnitDropdown
        aria-label="Horizontal bottom-right radius unit"
        defaultValue="%"
      />
      <UnitDropdown
        aria-label="Vertical top-left radius unit"
        defaultValue="%"
      />
      <UnitDropdown
        aria-label="Vertical top-right radius unit"
        defaultValue="%"
      />
      <UnitDropdown
        aria-label="Vertical bottom-left radius unit"
        defaultValue="%"
      />
      <UnitDropdown
        aria-label="Vertical bottom-right radius unit"
        defaultValue="%"
      />
    </>
  );
};

export default AdvancedModeControls;
