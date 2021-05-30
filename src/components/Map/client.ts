import { Converter } from 'showdown';

const BASE_URL =
  'https://raw.githubusercontent.com/Anngei/beyond_srebrenica/main/content/poi/';
const CONVERTER = new Converter();

function toCoordinate(rawData: string): number[] {
  const coordinateString = rawData.split(',');
  if (coordinateString.length !== 2) {
    throw Error('Coordinates are invalid');
  }
  return [parseFloat(coordinateString[0]), parseFloat(coordinateString[1])];
}

export function getPoiCoordinate(resource: string): Promise<number[]> {
  return fetch(`${BASE_URL}${resource}/coordinate.txt`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    })
    .then(toCoordinate);
}

export function getPoiShortInfo(resource: string): Promise<string> {
  return fetch(`${BASE_URL}${resource}/short-info.md`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    })
    .then((data) => CONVERTER.makeHtml(data));
}

export function getPoiDescription(resource: string): Promise<string> {
  return fetch(`${BASE_URL}${resource}/description.md`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    })
    .then((data) => CONVERTER.makeHtml(data));
}
