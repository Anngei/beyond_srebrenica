import { render, screen } from '@testing-library/react';
import React from 'react';
import { Navigation } from './Navigation';

describe('Navigation component', () => {
  it('should render title', () => {
    render(<Navigation />);
    const text = screen.getByText(/srebrenica/i);

    expect(text).toBeInTheDocument();
  });
});
