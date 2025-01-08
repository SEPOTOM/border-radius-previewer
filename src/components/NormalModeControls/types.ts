import { ReactNode } from 'react';

import { BorderRadiusValues } from '@/types';

export interface NormalModeControlsProps {
  children: ReactNode;
  borderRadiusValues: BorderRadiusValues;
  onBorderRadiusValuesChange: (borderRadiusValues: BorderRadiusValues) => void;
}
