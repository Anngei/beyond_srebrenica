import { getPoiCoordinate, getPoiShortInfo, getPoiDescription } from './client';

describe('poi client', () => {
  it('should return coordinates', () => {
    const actual = getPoiCoordinate('ikb-berlin');

    return expect(actual).resolves.toBeTruthy();
  });

  it('should throw error on error', () => {
    const actual = getPoiCoordinate('foo');

    return expect(actual).rejects.toBeTruthy();
  });

  it('should return short-info markdown', () => {
    const actual = getPoiShortInfo('ikb-berlin');

    return expect(actual).resolves.toBeTruthy();
  });

  it('should throw error on error for short-info', () => {
    const actual = getPoiShortInfo('foo');

    return expect(actual).rejects.toBeTruthy();
  });

  it('should return description markdown', () => {
    const actual = getPoiDescription('ikb-berlin');

    return expect(actual).resolves.toBeTruthy();
  });

  it('should throw error on error for description', () => {
    const actual = getPoiDescription('foo');

    return expect(actual).rejects.toBeTruthy();
  });
});
