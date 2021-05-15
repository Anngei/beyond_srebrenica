import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home component', () => {
  it('should render', () => {
    render(<Home />);
    const text = screen.getByText(/hallo/i);

    expect(text).toBeInTheDocument();
  });
});
