import { BorderRadiusUnits, BorderRadiusValues } from '@/types';
import { ORDERED_CORNERS } from '@/utils';

export interface BorderRadiusInputProps {
  corner: (typeof ORDERED_CORNERS)[number];
  scope: 'corner' | 'radius';
  values: BorderRadiusValues;
  units: BorderRadiusUnits;
  onDataChange: (
    newValue: Nullable<Partial<BorderRadiusValues>>,
    newUnit: Nullable<Partial<BorderRadiusUnits>>,
  ) => void;
}
