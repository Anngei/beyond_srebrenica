import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const text = screen.getByText(/srebrenica/i);

    expect(text).toBeInTheDocument();
  });
});
