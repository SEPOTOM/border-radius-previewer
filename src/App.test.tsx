import { render, screen } from '@testing-library/react';

import App from '@/App';

describe('App', () => {
  it('should show the preview box to which the border-radius is applied', () => {
    render(<App />);

    expect(screen.getByLabelText(/preview box/i)).toBeInTheDocument();
  });
});
