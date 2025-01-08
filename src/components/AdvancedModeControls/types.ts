import { ReactNode } from 'react';

export interface AdvancedModeControlsProps {
  children: ReactNode;
  onBorderRadiusChange: (borderRadius: string) => void;
}
