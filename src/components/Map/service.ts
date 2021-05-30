import { LatLngExpression } from 'leaflet';
import { getPoiCoordinate, getPoiShortInfo } from './client';

export interface PointOfInterest {
  coordinate: LatLngExpression;
  shortInfo: string;
}

export function getPoi(id: string): Promise<PointOfInterest> {
  return Promise.all([getPoiCoordinate(id), getPoiShortInfo(id)]).then(
    ([coordinate, shortInfo]) => ({
      coordinate: coordinate as LatLngExpression,
      shortInfo,
    })
  );
}
