import { ReactNode } from 'react';

import { BorderRadiusUnits, BorderRadiusValues } from '@/types';

export interface NormalModeControlsProps {
  children: ReactNode;
  borderRadiusValues: BorderRadiusValues;
  borderRadiusUnits: BorderRadiusUnits;
  onBorderRadiusValuesChange: (borderRadiusValues: BorderRadiusValues) => void;
  onBorderRadiusUnitsChange: (borderRadiusUnits: BorderRadiusUnits) => void;
}
