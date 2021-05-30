import React from 'react';
import { render, screen } from '@testing-library/react';
import { Poi } from './Poi';

describe('Poi component', () => {
  it('should render one marker', () => {
    render(<Poi _id="ikb-berlin" />);

    const text = screen.getByText(
      /Islamisches Kulturzentrum der Bosniaken in Berlin e.V./i
    );

    expect(text).toBeInTheDocument();
  });
});
