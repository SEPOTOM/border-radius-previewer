import { BORDER_RADIUS_UNITS, ORDERED_CORNERS } from '@/utils';

export type BorderRadiusValues = Record<
  (typeof ORDERED_CORNERS)[number],
  string
>;

export interface AdvancedBorderRadiusValues {
  'horz-top-left': string;
  'horz-top-right': string;
  'horz-bottom-left': string;
  'horz-bottom-right': string;
  'vert-top-left': string;
  'vert-top-right': string;
  'vert-bottom-left': string;
  'vert-bottom-right': string;
}

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
