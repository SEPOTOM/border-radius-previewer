import { render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';

describe('App in advanced mode', () => {
  it('should show the preview box', async () => {
    await renderInAdvancedMode();

    expect(screen.getByLabelText(/preview box/i)).toBeInTheDocument();
  });

  it("shouldn't round the preview box by default", async () => {
    await renderInAdvancedMode();
    const previewBox = screen.getByLabelText(/preview box/i);
    const previewBoxStyle = getComputedStyle(previewBox);

    expect(previewBoxStyle.borderRadius).toBe('0 0 0 0 / 0 0 0 0');
  });
});

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

  it('should be displayed in advanced mode', async () => {
    await renderInAdvancedMode();

    radii.forEach((radius) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${radius} radius`, 'i'),
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be hidden in normal mode', () => {
    render(<App />);

    radii.forEach((radius) => {
      expect(
        screen.queryByRole('spinbutton', {
          name: new RegExp(`${radius} radius`, 'i'),
        }),
      ).not.toBeInTheDocument();
    });
  });

  it('should have an initial value of 0', async () => {
    await renderInAdvancedMode();

    radii.forEach((radius) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${radius} radius`, 'i'),
        }),
      ).toHaveDisplayValue('0');
    });
  });
});

async function renderInAdvancedMode() {
  const renderResults = renderWithUser(<App />);

  await renderResults.user.click(screen.getByRole('switch', { name: /mode/i }));

  return renderResults;
}
