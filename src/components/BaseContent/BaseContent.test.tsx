import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BaseContent } from './BaseContent';
import { getContent } from '../../content/client';

jest.mock('../../content/client');

const getContentMock = getContent as jest.Mock<Promise<string>>;

describe('BaseContent component', () => {
  it('should render', () => {
    getContentMock.mockResolvedValue('foo');
    act(() => {
      render(<BaseContent content="foo" />);

      const text = screen.getByText(/foo/i);

      expect(text).toBeInTheDocument();
    });
  });
});
