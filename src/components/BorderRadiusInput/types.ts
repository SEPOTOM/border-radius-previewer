import { AdvancedBorderRadiusValues, BorderRadiusValues } from '@/types';
import { ORDERED_CORNERS, ORDERED_RADII } from '@/utils';

export type BorderRadiusInputProps =
  | {
      scope: 'corner';
      corner: (typeof ORDERED_CORNERS)[number];
      values: BorderRadiusValues;
      onDataChange: (newValue: Partial<BorderRadiusValues>) => void;
    }
  | {
      scope: 'radius';
      corner: (typeof ORDERED_RADII)[number];
      values: AdvancedBorderRadiusValues;
      onDataChange: (newValue: Partial<AdvancedBorderRadiusValues>) => void;
    };
