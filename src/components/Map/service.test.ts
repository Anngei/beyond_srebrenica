import { LatLngExpression } from 'leaflet';
import { getPoi, PointOfInterest } from './service';
import { getPoiData, getCoordinates, PoiDTO, CoordinateDTO } from './client';

jest.mock('./client');
const getPoiDataMock = getPoiData as jest.Mock<Promise<PoiDTO>>;
const getCoordinatesMock = getCoordinates as jest.Mock<Promise<CoordinateDTO>>;

describe('poi service', () => {
  it('should return poi', () => {
    getPoiDataMock.mockResolvedValue({
      name: 'foobar',
      address: {
        street: 'street 2',
        city: 'foobar city',
        zip: 'zip',
      },
      linkedReportage: ['foo', 'bar'],
    });
    getCoordinatesMock.mockResolvedValue({ lat: 42.1337, lon: 1337.42 });

    const actual = getPoi('foo');
    const expected: PointOfInterest = {
      coordinate: [42.1337, 1337.42] as LatLngExpression,
      name: 'foobar',
      address: {
        street: 'street 2',
        city: 'foobar city',
        zip: 'zip',
      },
      linkedReportage: ['foo', 'bar'],
    };

    return expect(actual).resolves.toStrictEqual(expected);
  });
});
