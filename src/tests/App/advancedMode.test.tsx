import { render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';

const radii = [
  'horizontal top-left',
  'horizontal top-right',
  'horizontal bottom-right',
  'horizontal bottom-left',
  'vertical top-left',
  'vertical top-right',
  'vertical bottom-right',
  'vertical bottom-left',
];

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

  it('should keep the rounding after switching to normal mode', async () => {
    const values = ['3', '73', '71', '54', '180', '768', '16', '90'];
    const { user } = await renderInAdvancedMode();

    for (let i = 0; i < radii.length; i += 1) {
      await user.type(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${radii[i]} radius`, 'i'),
        }),
        values[i],
      );
    }

    await user.click(screen.getByRole('switch', { name: /mode/i }));
    await user.click(screen.getByRole('switch', { name: /mode/i }));

    const previewBox = screen.getByLabelText(/preview box/i);
    const previewBoxStyle = getComputedStyle(previewBox);
    expect(previewBoxStyle.borderRadius).toBe(
      '3px 73px 71px 54px / 180px 768px 16px 90px',
    );
  });

  describe('should keep the values of the radii inputs after switching to normal mode', () => {
    const values = ['97', '1000', '657', '300', '39', '125', '98', '797'];

    radii.forEach((radius, index) => {
      it(radius, async () => {
        const { user } = await renderInAdvancedMode();
        await user.type(
          screen.getByRole('spinbutton', {
            name: new RegExp(`${radius} radius`, 'i'),
          }),
          values[index],
        );

        await user.click(screen.getByRole('switch', { name: /mode/i }));
        await user.click(screen.getByRole('switch', { name: /mode/i }));

        expect(
          screen.getByRole('spinbutton', {
            name: new RegExp(`${radius} radius`, 'i'),
          }),
        ).toHaveDisplayValue(new RegExp(values[index], 'i'));
      });
    });
  });

  it('should copy the value of the border radius to the clipboard after clicking the copy button', async () => {
    const values = ['0', '25', '0', '0', '73', '83', '0', '16'];
    const { user } = await renderInAdvancedMode();
    const writeTextSpy = vi.spyOn(navigator.clipboard, 'writeText');

    for (let i = 0; i < radii.length; i += 1) {
      await user.type(
        screen.getByRole('spinbutton', { name: new RegExp(radii[i], 'i') }),
        values[i],
      );
    }

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    expect(writeTextSpy).toHaveBeenCalledTimes(1);
    expect(writeTextSpy).toHaveBeenCalledWith('0 25px 0 0 / 73px 83px 0 16px');
  });
});

describe('inputs for specifying corresponding radii', () => {
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

  describe('should update the value of the appropriate radius', () => {
    const values = ['87', '92', '134', '56', '10', '303', '47', '28'];

    radii.forEach((radius, index) => {
      it(radius, async () => {
        const { user } = await renderInAdvancedMode();

        await user.type(
          screen.getByRole('spinbutton', { name: new RegExp(radius, 'i') }),
          values[index],
        );

        const previewBox = screen.getByLabelText(/preview box/i);
        const previewBoxStyle = getComputedStyle(previewBox);
        const borderRadiusValues = previewBoxStyle.borderRadius
          .split(' ')
          .filter((value) => value !== '/');

        expect(borderRadiusValues[index]).toMatch(
          new RegExp(values[index], 'i'),
        );
      });
    });
  });
});

async function renderInAdvancedMode() {
  const renderResults = renderWithUser(<App />);

  await renderResults.user.click(screen.getByRole('switch', { name: /mode/i }));

  return renderResults;
}
