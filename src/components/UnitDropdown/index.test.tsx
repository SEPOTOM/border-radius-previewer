import { render, screen } from '@testing-library/react';

import { BORDER_RADIUS_UNITS } from '@/utils';

import UnitDropdown from './index';

describe('UnitDropdown', () => {
  it('should provide a choice of common units of measurement for border radius', () => {
    render(<UnitDropdown />);

    BORDER_RADIUS_UNITS.forEach((unit) => {
      expect(screen.getByRole('option', { name: unit })).toBeInTheDocument();
    });
  });
});
