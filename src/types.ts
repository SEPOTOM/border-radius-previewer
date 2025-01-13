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

export type BorderRadiusUnits = Record<
  `${(typeof ORDERED_CORNERS)[number]}-unit`,
  BorderRadiusUnit
>;

export type AdvancedBorderRadiusUnits = Record<
  `${(typeof ORDERED_RADII)[number]}-unit`,
  BorderRadiusUnit
>;
