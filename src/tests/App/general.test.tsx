import { act, render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';

describe('App', () => {
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
