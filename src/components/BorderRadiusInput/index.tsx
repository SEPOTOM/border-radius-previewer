import { ChangeEvent, FC } from 'react';

import { UnitDropdown } from '@/components';

import { BorderRadiusInputProps } from './types';

const BorderRadiusInput: FC<BorderRadiusInputProps> = ({
  corner,
  scope,
  values,
  units,
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

  const cornerScope = `${corner} ${scope}`;

  return (
    <div className="flex max-w-36 shrink-0 grow-0 basis-1/2 pl-2">
      <input
        type="number"
        aria-label={cornerScope}
        value={values[corner]}
        name={corner}
        onChange={handleValueChange}
        className="outline-focus w-full max-w-full rounded-l-sm rounded-r-none border-r border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
      />
      <UnitDropdown
        aria-label={`${cornerScope} unit`}
        name={`${corner}-unit`}
        onChange={handleUnitChange}
        value={units[`${corner}-unit`]}
        className="rounded-l-none rounded-r-sm border-l border-dashed border-secondary bg-main p-1 text-xl tracking-wider text-secondary"
      />
    </div>
  );
};

export default BorderRadiusInput;
