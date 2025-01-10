import {
  BorderRadiusUnit,
  BorderRadiusUnits,
  BorderRadiusValues,
} from '@/types';

export interface BorderRadiusInputProps {
  value: string;
  unit: BorderRadiusUnit;
  inputName: string;
  dropdownName: string;
  inputLabel: string;
  dropdownLabel: string;
  onDataChange: (
    newValue: Nullable<Partial<BorderRadiusValues>>,
    newUnit: Nullable<Partial<BorderRadiusUnits>>,
  ) => void;
}
