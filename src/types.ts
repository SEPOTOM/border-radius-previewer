import { BORDER_RADIUS_UNITS, ORDERED_CORNERS, ORDERED_RADII } from '@/utils';

export type BorderRadiusValues = Record<
  (typeof ORDERED_CORNERS)[number],
  string
>;

export type AdvancedBorderRadiusValues = Record<
  (typeof ORDERED_RADII)[number],
  string
>;

export type BorderRadiusUnit = (typeof BORDER_RADIUS_UNITS)[number];

export interface BorderRadiusUnits {
  'top-left-unit': BorderRadiusUnit;
  'top-right-unit': BorderRadiusUnit;
  'bottom-left-unit': BorderRadiusUnit;
  'bottom-right-unit': BorderRadiusUnit;
}

export interface AdvancedBorderRadiusUnits {
  'horz-top-left': BorderRadiusUnit;
  'horz-top-right': BorderRadiusUnit;
  'horz-bottom-left': BorderRadiusUnit;
  'horz-bottom-right': BorderRadiusUnit;
  'vert-top-left': BorderRadiusUnit;
  'vert-top-right': BorderRadiusUnit;
  'vert-bottom-left': BorderRadiusUnit;
  'vert-bottom-right': BorderRadiusUnit;
}
