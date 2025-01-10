import { FC } from 'react';

import { BORDER_RADIUS_UNITS } from '@/utils';

import { UnitDropdownProps } from './types';

const UnitDropdown: FC<UnitDropdownProps> = (props) => (
  <select {...props}>
    {BORDER_RADIUS_UNITS.map((unit, index) => (
      <option key={index} value={unit}>
        {unit}
      </option>
    ))}
  </select>
);

export default UnitDropdown;
