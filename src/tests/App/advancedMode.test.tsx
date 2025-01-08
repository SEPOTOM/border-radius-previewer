import { screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';

describe('App in advanced mode', () => {
  describe('inputs for specifying corresponding radii', () => {
    const radii = [
      'horizontal top-left',
      'horizontal top-right',
      'horizontal bottom-left',
      'horizontal bottom-right',
      'vertical top-left',
      'vertical top-right',
      'vertical bottom-left',
      'vertical bottom-right',
    ];

    it('should be displayed', async () => {
      const { user } = renderWithUser(<App />);

      await user.click(screen.getByRole('switch', { name: /mode/i }));

      radii.forEach((radius) => {
        expect(
          screen.getByRole('spinbutton', {
            name: new RegExp(`${radius} radius`, 'i'),
          }),
        ).toBeInTheDocument();
      });
    });
  });
});
