import { ChangeEvent, FC } from 'react';

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
            value={borderRadiusValues['horz-top-left']}
            name="horz-top-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical top-left radius"
            value={borderRadiusValues['vert-top-left']}
            name="vert-top-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3 pr-2">
          <input
            type="number"
            aria-label="Horizontal top-right radius"
            value={borderRadiusValues['horz-top-right']}
            name="horz-top-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical top-right radius"
            value={borderRadiusValues['vert-top-right']}
            name="vert-top-right"
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
            value={borderRadiusValues['horz-bottom-left']}
            name="horz-bottom-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical bottom-left radius"
            value={borderRadiusValues['vert-bottom-left']}
            name="vert-bottom-left"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
        <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 flex-col gap-y-3 pr-2">
          <input
            type="number"
            aria-label="Horizontal bottom-right radius"
            value={borderRadiusValues['horz-bottom-right']}
            name="horz-bottom-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
          <input
            type="number"
            aria-label="Vertical bottom-right radius"
            value={borderRadiusValues['vert-bottom-right']}
            name="vert-bottom-right"
            onChange={handleBorderRadiusChange}
            className="outline-focus w-full max-w-full rounded-sm bg-main p-1 text-xl tracking-wider text-secondary"
          />
        </div>
      </div>
    </>
  );
};

export default AdvancedModeControls;
