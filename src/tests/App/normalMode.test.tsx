import { render, screen } from '@testing-library/react';

import App from '@/App';
import { renderWithUser } from '@/tests/utils';
import { BORDER_RADIUS_UNITS, ORDERED_CORNERS } from '@/utils';

describe('App in normal mode', () => {
  it('should keep the rounding after switching to advanced mode', async () => {
    const values = ['31', '52', '89', '90'];
    const { user } = renderWithUser(<App />);

    for (let i = 0; i < ORDERED_CORNERS.length; i += 1) {
      await user.type(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${ORDERED_CORNERS[i]} corner`, 'i'),
        }),
        values[i],
      );
    }

    await user.click(screen.getByRole('switch', { name: /mode/i }));
    await user.click(screen.getByRole('switch', { name: /mode/i }));

    const previewBox = screen.getByLabelText(/preview box/i);
    const previewBoxStyle = getComputedStyle(previewBox);
    expect(previewBoxStyle.borderRadius).toBe('31px 52px 89px 90px');
  });

  describe('should keep the values of the corner inputs after switching to advanced mode', () => {
    const values = ['60', '152', '67', '83'];

    ORDERED_CORNERS.forEach((corner, index) => {
      it(corner, async () => {
        const { user } = renderWithUser(<App />);
        await user.type(
          screen.getByRole('spinbutton', {
            name: new RegExp(`${corner} corner`, 'i'),
          }),
          values[index],
        );

        await user.click(screen.getByRole('switch', { name: /mode/i }));
        await user.click(screen.getByRole('switch', { name: /mode/i }));

        expect(
          screen.getByRole('spinbutton', {
            name: new RegExp(`${ORDERED_CORNERS[index]} corner`, 'i'),
          }),
        ).toHaveDisplayValue(new RegExp(values[index], 'i'));
      });
    });
  });

  it('should show the correct default value in the output field', () => {
    render(<App />);

    expect(screen.getByRole('status', { name: /output/i })).toHaveTextContent(
      '0 0 0 0',
    );
  });

  it('should show the current value in the output field', async () => {
    const { user } = renderWithUser(<App />);
    const values = ['52', '89', '3', '98'];

    for (let i = 0; i < ORDERED_CORNERS.length; i += 1) {
      await user.type(
        screen.getByRole('spinbutton', {
          name: new RegExp(ORDERED_CORNERS[i], 'i'),
        }),
        values[i],
      );
    }

    expect(screen.getByRole('status', { name: /output/i })).toHaveTextContent(
      '52px 89px 3px 98px',
    );
  });
});

describe('inputs for rounding off the corners', () => {
  it('should be displayed in normal mode', () => {
    render(<App />);

    ORDERED_CORNERS.forEach((corner) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${corner} corner`, 'i'),
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be hidden in advanced mode', async () => {
    const { user } = renderWithUser(<App />);

    await user.click(screen.getByRole('switch', { name: /mode/i }));

    ORDERED_CORNERS.forEach((corner) => {
      expect(
        screen.queryByRole('spinbutton', {
          name: new RegExp(`${corner} corner`, 'i'),
        }),
      ).not.toBeInTheDocument();
    });
  });

  it('should have an initial value of 0', () => {
    render(<App />);

    ORDERED_CORNERS.forEach((corner) => {
      expect(
        screen.getByRole('spinbutton', {
          name: new RegExp(`${corner} corner`, 'i'),
        }),
      ).toHaveDisplayValue('0');
    });
  });

  describe('should round off the appropriate corner', () => {
    const values = ['25', '33', '12', '100'];

    ORDERED_CORNERS.forEach((corner, index) => {
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

describe('dropdowns of units of measurement for border radius values', () => {
  it('should be displayed in normal mode', () => {
    render(<App />);

    ORDERED_CORNERS.forEach((corner) => {
      expect(
        screen.getByRole('combobox', {
          name: new RegExp(`${corner} corner unit`, 'i'),
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be hidden in advanced mode', async () => {
    const { user } = renderWithUser(<App />);

    await user.click(screen.getByRole('switch', { name: /mode/i }));

    ORDERED_CORNERS.forEach((corner) => {
      expect(
        screen.queryByRole('combobox', {
          name: new RegExp(`${corner} corner unit`, 'i'),
        }),
      ).not.toBeInTheDocument();
    });
  });

  it('should have an initial value of px', () => {
    render(<App />);

    ORDERED_CORNERS.forEach((corner) => {
      expect(
        screen.getByRole('combobox', {
          name: new RegExp(`${corner} corner unit`, 'i'),
        }),
      ).toHaveDisplayValue('px');
    });
  });

  describe('should change the corresponding unit of measurement', () => {
    ORDERED_CORNERS.forEach((corner, index) => {
      it(`${corner} unit`, async () => {
        const { user } = renderWithUser(<App />);
        await user.type(
          screen.getByRole('spinbutton', { name: new RegExp(corner, 'i') }),
          '1',
        );
        const unitIndex = index % BORDER_RADIUS_UNITS.length;

        await user.selectOptions(
          screen.getByRole('combobox', {
            name: new RegExp(`${corner} corner unit`, 'i'),
          }),
          BORDER_RADIUS_UNITS[unitIndex],
        );

        const previewBox = screen.getByLabelText(/preview box/i);
        const previewBoxStyle = getComputedStyle(previewBox);
        const borderRadiusValues = previewBoxStyle.borderRadius.split(' ');

        expect(borderRadiusValues[index]).toBe(
          `1${BORDER_RADIUS_UNITS[unitIndex]}`,
        );
      });
    });
  });
});
