import { ChangeEvent, FC } from 'react';

import { UnitDropdown } from '@/components';

import { BorderRadiusInputProps } from './types';

const BorderRadiusInput: FC<BorderRadiusInputProps> = ({
  value,
  unit,
  inputLabel,
  dropdownLabel,
  inputName,
  dropdownName,
  onDataChange,
}) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onDataChange(
      {
        [e.target.name]: e.target.value,
      },
      null,
    );
  };

  const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onDataChange(null, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 pl-2">
      <input
        type="number"
        aria-label={inputLabel}
        value={value}
        name={inputName}
        onChange={handleValueChange}
        className="outline-focus w-full max-w-full rounded-l-sm rounded-r-none border-r border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
      />
      <UnitDropdown
        aria-label={dropdownLabel}
        name={dropdownName}
        onChange={handleUnitChange}
        value={unit}
        className="rounded-l-none rounded-r-sm border-l border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
      />
    </div>
  );
};

export default BorderRadiusInput;
