import { BORDER_RADIUS_UNITS, ORDERED_CORNERS, ORDERED_RADII } from '@/utils';

export type BorderRadiusUnit = (typeof BORDER_RADIUS_UNITS)[number];

export type BorderRadiusValue = [string, BorderRadiusUnit];

export type BorderRadiusValues = Record<
  (typeof ORDERED_CORNERS)[number],
  BorderRadiusValue
>;

export type AdvancedBorderRadiusValues = Record<
  (typeof ORDERED_RADII)[number],
  BorderRadiusValue
>;
