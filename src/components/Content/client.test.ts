import { getContent } from './client';

describe('content client', () => {
  it('should return html formatted markdown', () => {
    const actual = getContent('/pages/about-us');

    return expect(actual).resolves.toBeTruthy();
  });

  it('should throw error on error', () => {
    const actual = getContent('foo');

    return expect(actual).rejects.toBeTruthy();
  });
});
