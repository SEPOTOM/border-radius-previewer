import { ReactNode } from 'react';

export interface NormalModeControlsProps {
  children: ReactNode;
  onBorderRadiusChange: (borderRadius: string) => void;
}
