import { act, render, screen } from '@testing-library/react';

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

  it('should show the output field', () => {
    render(<App />);

    expect(screen.getByRole('status', { name: /output/i })).toBeInTheDocument();
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

  it('should show the success message after clicking the copy button', async () => {
    const { user } = renderWithUser(<App />);

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    expect(screen.getByRole('status', { name: /copied/i })).toBeInTheDocument();
  });

  it('should hide the successful copy message with a 3 second delay', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });

    const { user } = renderWithUser(<App />);

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.queryByRole('status', { name: /copied/i })).toBeNull();

    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should show the error message if an error occurs when clicking the copy button', async () => {
    const { user } = renderWithUser(<App />);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(() => Promise.reject(new Error('Test error'))),
      },
    });

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    expect(
      screen.getByRole('alert', { name: /copy error/i }),
    ).toBeInTheDocument();
  });

  it('should hide the copy error message with a 3 second delay', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });

    const { user } = renderWithUser(<App />);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(() => Promise.reject(new Error('Test error'))),
      },
    });

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.queryByRole('alert', { name: /copy error/i })).toBeNull();

    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("shouldn't show the successful copy message when a copy error occurs", async () => {
    const { user } = renderWithUser(<App />);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(() => Promise.reject(new Error('Test error'))),
      },
    });

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    expect(screen.queryByRole('status', { name: /copied/i })).toBeNull();
  });
});
