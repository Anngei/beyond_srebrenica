import { LatLngExpression } from 'leaflet';
import { getPoi, PointOfInterest } from './service';
import { getPoiCoordinate, getPoiShortInfo } from './client';

jest.mock('./client');
const getPoiCoordinateMock = getPoiCoordinate as jest.Mock<Promise<number[]>>;
const getPoiShortInfoMock = getPoiShortInfo as jest.Mock<Promise<string>>;

describe('poi service', () => {
  it('should return poi', () => {
    getPoiCoordinateMock.mockResolvedValue([42.1337, 1337.42]);
    getPoiShortInfoMock.mockResolvedValue('foo bar');

    const actual = getPoi('foo');
    const expected: PointOfInterest = {
      coordinate: [42.1337, 1337.42] as LatLngExpression,
      shortInfo: 'foo bar',
    };

    return expect(actual).resolves.toStrictEqual(expected);
  });
});
