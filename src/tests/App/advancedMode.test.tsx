import { render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';
import { BORDER_RADIUS_UNITS, ORDERED_RADII } from '@/utils';

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

    for (let i = 0; i < ORDERED_RADII.length; i += 1) {
      await user.type(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${ORDERED_RADII[i]} radius`, 'i'),
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

    ORDERED_RADII.forEach((radius, index) => {
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

    for (let i = 0; i < ORDERED_RADII.length; i += 1) {
      await user.type(
        screen.getByRole('spinbutton', {
          name: new RegExp(ORDERED_RADII[i], 'i'),
        }),
        values[i],
      );
    }

    await user.click(
      screen.getByRole('button', { name: /copy to clipboard/i }),
    );

    expect(writeTextSpy).toHaveBeenCalledTimes(1);
    expect(writeTextSpy).toHaveBeenCalledWith('0 25px 0 0 / 73px 83px 0 16px');
  });

  it('should show the correct default value in the output field', async () => {
    await renderInAdvancedMode();

    expect(screen.getByRole('status', { name: /output/i })).toHaveTextContent(
      '0 0 0 0 / 0 0 0 0',
    );
  });

  it('should show the current value in the output field', async () => {
    const { user } = await renderInAdvancedMode();
    const values = ['983', '25', '51', '9789', '825', '5', '78', '19'];

    for (let i = 0; i < ORDERED_RADII.length; i += 1) {
      await user.type(
        screen.getByRole('spinbutton', {
          name: new RegExp(ORDERED_RADII[i], 'i'),
        }),
        values[i],
      );
    }

    expect(screen.getByRole('status', { name: /output/i })).toHaveTextContent(
      '983px 25px 51px 9789px / 825px 5px 78px 19px',
    );
  });
});

describe('inputs for specifying corresponding radii', () => {
  it('should be displayed in advanced mode', async () => {
    await renderInAdvancedMode();

    ORDERED_RADII.forEach((radius) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${radius} radius`, 'i'),
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be hidden in normal mode', () => {
    render(<App />);

    ORDERED_RADII.forEach((radius) => {
      expect(
        screen.queryByRole('spinbutton', {
          name: new RegExp(`${radius} radius`, 'i'),
        }),
      ).not.toBeInTheDocument();
    });
  });

  it('should have an initial value of 0', async () => {
    await renderInAdvancedMode();

    ORDERED_RADII.forEach((radius) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${radius} radius`, 'i'),
        }),
      ).toHaveDisplayValue('0');
    });
  });

  describe('should update the value of the appropriate radius', () => {
    const values = ['87', '92', '134', '56', '10', '303', '47', '28'];

    ORDERED_RADII.forEach((radius, index) => {
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

describe('dropdowns of units of measurement for border radius values', () => {
  it('should be displayed in advanced mode', async () => {
    await renderInAdvancedMode();

    ORDERED_RADII.forEach((radius) => {
      expect(
        screen.getByRole('combobox', {
          name: new RegExp(`${radius} radius unit`, 'i'),
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be hidden in normal mode', async () => {
    const { user } = await renderInAdvancedMode();

    await user.click(screen.getByRole('switch', { name: /mode/i }));

    ORDERED_RADII.forEach((radius) => {
      expect(
        screen.queryByRole('combobox', {
          name: new RegExp(`${radius} radius unit`, 'i'),
        }),
      ).not.toBeInTheDocument();
    });
  });

  it('should have an initial value of %', async () => {
    await renderInAdvancedMode();

    ORDERED_RADII.forEach((radius) => {
      expect(
        screen.getByRole('combobox', {
          name: new RegExp(`${radius} radius unit`, 'i'),
        }),
      ).toHaveDisplayValue('%');
    });
  });

  describe('should change the corresponding unit of measurement', () => {
    ORDERED_RADII.forEach((radius, index) => {
      it(`${radius} unit`, async () => {
        const { user } = await renderInAdvancedMode();
        await user.type(
          screen.getByRole('spinbutton', { name: new RegExp(radius, 'i') }),
          '1',
        );
        const unitIndex = index % BORDER_RADIUS_UNITS.length;

        await user.selectOptions(
          screen.getByRole('combobox', {
            name: new RegExp(`${radius} radius unit`, 'i'),
          }),
          BORDER_RADIUS_UNITS[unitIndex],
        );

        const previewBox = screen.getByLabelText(/preview box/i);
        const previewBoxStyle = getComputedStyle(previewBox);
        const borderRadiusValues = previewBoxStyle.borderRadius
          .split(' ')
          .filter((value) => value !== '/');

        expect(borderRadiusValues[index]).toBe(
          `1${BORDER_RADIUS_UNITS[unitIndex]}`,
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
