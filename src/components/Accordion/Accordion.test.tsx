import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Accordion, initialToggleState } from './Accordion';
import { Content } from '../Content/Content';

jest.mock('../Content/Content');
const ContentMock = Content as jest.Mock<JSX.Element>;

describe('Accordion component', () => {
  it('should return initial toggle state with 1 element', () => {
    const actual = initialToggleState({ foo: 'bar' });
    const expected = { foo: false };

    expect(actual).toStrictEqual(expected);
  });

  it('should return initial toggle state with n elements', () => {
    const actual = initialToggleState({ foo: 'bar' });
    const expected = { foo: false };

    expect(actual).toStrictEqual(expected);
  });

  it('should hide content by default', () => {
    ContentMock.mockReturnValue(<>foo</>);
    render(
      <MemoryRouter>
        <Accordion elements={{ foo: 'foobar' }} />
      </MemoryRouter>
    );
    const title = screen.getByText('foobar');
    const content = screen.queryByTestId('content');

    expect(title).toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });

  it('should show content when title was clicked', () => {
    ContentMock.mockReturnValue(<>foo</>);
    render(
      <MemoryRouter>
        <Accordion elements={{ foo: 'foobar' }} />
      </MemoryRouter>
    );
    const title = screen.getByText('foobar');

    fireEvent.click(title);
    const content = screen.queryByTestId('content');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
