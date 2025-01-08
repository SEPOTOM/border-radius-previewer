import { ReactNode } from 'react';

import { AdvancedBorderRadiusValues } from '@/types';

export interface AdvancedModeControlsProps {
  children: ReactNode;
  borderRadiusValues: AdvancedBorderRadiusValues;
  onBorderRadiusValuesChange: (
    borderRadiusValues: AdvancedBorderRadiusValues,
  ) => void;
}
