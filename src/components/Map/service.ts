import { LatLngExpression } from 'leaflet';
import { getPoiData, getCoordinates } from './client';

export interface Address {
  street: string;
  zip: string;
  city: string;
}

export interface PointOfInterest {
  name: string;
  coordinate: LatLngExpression;
  address: Address;
  linkedReportage: string[];
}

export async function getPoi(id: string): Promise<PointOfInterest> {
  const poi = await getPoiData(id);
  const coordinate = await getCoordinates(poi.address);
  return {
    name: poi.name,
    coordinate: [coordinate.lat, coordinate.lon],
    address: poi.address,
    linkedReportage: poi.linkedReportage,
  };
}
