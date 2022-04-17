import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('should render text of button', () => {
    render(<Button>foobar</Button>);

    const actual = screen.getByText('foobar');

    expect(actual).toBeInTheDocument();
  });
});
