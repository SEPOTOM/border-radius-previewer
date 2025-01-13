import { ChangeEvent, FC } from 'react';

import { UnitDropdown } from '@/components';

import { BorderRadiusInputProps } from './types';

const BorderRadiusInput: FC<BorderRadiusInputProps> = ({
  corner,
  scope,
  values,
  onDataChange,
}) => {
  const fullValue = values[corner as keyof typeof values];

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onDataChange({
      [corner]: [e.target.value, fullValue[1]],
    });
  };

  const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onDataChange({
      [corner]: [fullValue[0], e.target.value],
    });
  };

  const cornerScope = `${corner} ${scope}`;

  return (
    <div className="flex max-w-36 shrink-0 grow-0 basis-1/2">
      <input
        type="number"
        aria-label={cornerScope}
        value={fullValue[0]}
        name={corner}
        onChange={handleValueChange}
        className="outline-focus w-full max-w-full rounded-l-sm rounded-r-none border-r border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
      />
      <UnitDropdown
        aria-label={`${cornerScope} unit`}
        name={`${corner}-unit`}
        onChange={handleUnitChange}
        value={fullValue[1]}
        className="rounded-l-none rounded-r-sm border-l border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
      />
    </div>
  );
};

export default BorderRadiusInput;
