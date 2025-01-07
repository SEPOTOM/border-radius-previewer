import { render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests';

describe('App', () => {
  it('should show the preview box to which the border-radius is applied', () => {
    render(<App />);

    expect(screen.getByLabelText(/preview box/i)).toBeInTheDocument();
  });

  it('should show the mode switch', () => {
    render(<App />);

    expect(screen.getByRole('switch', { name: /mode/i })).toBeInTheDocument();
  });

  it('should show the copy to clipboard button', () => {
    render(<App />);

    expect(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    ).toBeInTheDocument();
  });

  it('should copy the value of the border radius to the clipboard after clicking the copy button', async () => {
    const { user } = renderWithUser(<App />);
    const writeTextSpy = vi.spyOn(navigator.clipboard, 'writeText');

    await user.type(
      screen.getByRole('spinbutton', { name: /top-left/i }),
      '56',
    );
    await user.type(
      screen.getByRole('spinbutton', { name: /top-right/i }),
      '98',
    );
    await user.type(
      screen.getByRole('spinbutton', { name: /bottom-left/i }),
      '10',
    );

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    expect(writeTextSpy).toHaveBeenCalledTimes(1);
    expect(writeTextSpy).toHaveBeenCalledWith('56px 98px 0 10px');
  });

  it("shouldn't round the preview box by default", () => {
    render(<App />);
    const previewBox = screen.getByLabelText(/preview box/i);
    const previewBoxStyle = getComputedStyle(previewBox);

    expect(previewBoxStyle.borderRadius).toBe('0 0 0 0');
  });
});

describe("App's inputs for rounding off the corners", () => {
  const corners = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

  it('should be displayed', () => {
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
