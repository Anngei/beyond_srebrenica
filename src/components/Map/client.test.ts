import { getCoordinates, getPoiData } from './client';

describe('poi client', () => {
  it('should return poi data', () => {
    const actual = getPoiData('ikb-berlin');

    return expect(actual).resolves.toBeTruthy();
  });

  it('should throw error on error', () => {
    const actual = getPoiData('foo');

    return expect(actual).rejects.toBeTruthy();
  });

  it('should return coordinate', () => {
    const address = {
      street: 'Hardenbergstraße 34',
      zip: '10623',
      city: 'Berlin',
    };

    const actual = getCoordinates(address);

    return expect(actual).resolves.toBeTruthy();
  });

  it('should throw error on error for coordinate', () => {
    const address = {
      street: 'Middle of nowhere',
      zip: 'zip',
      city: 'place',
    };

    const actual = getCoordinates(address);

    return expect(actual).rejects.toBeTruthy();
  });
});
