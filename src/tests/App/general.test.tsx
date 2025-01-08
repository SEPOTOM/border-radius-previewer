import { render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';

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

  it('the mode switch should be turned off by default', () => {
    render(<App />);

    expect(screen.getByRole('switch', { name: /mode/i })).not.toBeChecked();
  });

  it('the mode switch should be turned on after clicking on it', async () => {
    const { user } = renderWithUser(<App />);

    await user.click(screen.getByRole('switch', { name: /mode/i }));

    expect(screen.getByRole('switch', { name: /mode/i })).toBeChecked();
  });
});
