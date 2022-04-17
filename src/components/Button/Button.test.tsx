import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { MemoryRouter } from 'react-router-dom';

describe('Button component', () => {
  it('should render text of button', () => {
    render(
      <MemoryRouter>
        <Button to="someplace">foobar</Button>
      </MemoryRouter>
    );

    const actual = screen.getByText('foobar');

    expect(actual).toBeInTheDocument();
  });
});
