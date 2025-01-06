import { render, screen } from '@testing-library/react';

import App from '@/App';

describe('App', () => {
  it('should show the preview box to which the border-radius is applied', () => {
    render(<App />);

    expect(screen.getByLabelText(/preview box/i)).toBeInTheDocument();
  });

  describe('should show inputs for rounding off the corners', () => {
    const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

    corners.forEach((corner) => {
      it(corner, () => {
        render(<App />);

        expect(
          screen.getByRole('spinbutton', {
            name: new RegExp(`${corner} corner`, 'i'),
          }),
        ).toBeInTheDocument();
      });
    });
  });

  it("shouldn't round the preview box by default", () => {
    render(<App />);
    const previewBox = screen.getByLabelText(/preview box/i);
    const previewBoxStyle = getComputedStyle(previewBox);

    expect(previewBoxStyle.borderRadius).toBe('0 0 0 0');
  });
});
