import { ReactNode } from 'react';

import { AdvancedBorderRadiusUnits, AdvancedBorderRadiusValues } from '@/types';

export interface AdvancedModeControlsProps {
  children: ReactNode;
  borderRadiusValues: AdvancedBorderRadiusValues;
  borderRadiusUnits: AdvancedBorderRadiusUnits;
  onBorderRadiusValuesChange: (
    borderRadiusValues: AdvancedBorderRadiusValues,
  ) => void;
  onBorderRadiusUnitsChange: (
    borderRadiusUnits: AdvancedBorderRadiusUnits,
  ) => void;
}
