import {
  AdvancedBorderRadiusUnits,
  AdvancedBorderRadiusValues,
  BorderRadiusUnits,
  BorderRadiusValues,
} from '@/types';
import { ORDERED_CORNERS, ORDERED_RADII } from '@/utils';

export type BorderRadiusInputProps =
  | {
      scope: 'corner';
      corner: (typeof ORDERED_CORNERS)[number];
      values: BorderRadiusValues;
      units: BorderRadiusUnits;
      onDataChange: (
        newValue: Nullable<Partial<BorderRadiusValues>>,
        newUnit: Nullable<Partial<BorderRadiusUnits>>,
      ) => void;
    }
  | {
      scope: 'radius';
      corner: (typeof ORDERED_RADII)[number];
      values: AdvancedBorderRadiusValues;
      units: AdvancedBorderRadiusUnits;
      onDataChange: (
        newValue: Nullable<Partial<AdvancedBorderRadiusValues>>,
        newUnit: Nullable<Partial<AdvancedBorderRadiusUnits>>,
      ) => void;
    };
