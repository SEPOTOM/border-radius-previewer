import { render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';

describe('inputs for rounding off the corners', () => {
  const corners = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

  it('should be displayed in normal mode', () => {
    render(<App />);

    corners.forEach((corner) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${corner} corner`, 'i'),
        }),
      ).toBeInTheDocument();
    });
  });

  it('should have an initial value of 0', () => {
    render(<App />);

    corners.forEach((corner) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${corner} corner`, 'i'),
        }),
      ).toHaveDisplayValue('0');
    });
  });

  describe('should round off the appropriate corner', () => {
    const values = ['25', '33', '12', '100'];

    corners.forEach((corner, index) => {
      it(corner, async () => {
        const { user } = renderWithUser(<App />);

        await user.type(
          screen.getByRole('spinbutton', { name: new RegExp(corner, 'i') }),
          values[index],
        );

        const previewBox = screen.getByLabelText(/preview box/i);
        const previewBoxStyle = getComputedStyle(previewBox);
        const borderRadiusValues = previewBoxStyle.borderRadius.split(' ');

        expect(borderRadiusValues[index]).toMatch(
          new RegExp(values[index], 'i'),
        );
      });
    });
  });
});
