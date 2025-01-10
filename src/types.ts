import { BORDER_RADIUS_UNITS } from '@/utils';

export interface BorderRadiusValues {
  'top-left': string;
  'top-right': string;
  'bottom-left': string;
  'bottom-right': string;
}

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
