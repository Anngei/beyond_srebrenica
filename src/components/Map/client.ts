const BASE_URL =
  'https://raw.githubusercontent.com/Anngei/beyond_srebrenica/main/content/poi/';
const NOMINATIM_URL =
  'https://nominatim.openstreetmap.org/search.php?format=json';
export interface AddressDTO {
  street: string;
  zip: string;
  city: string;
}
export interface PoiDTO {
  name: string;
  address: AddressDTO;
  linkedReportage: string[];
}
export interface CoordinateDTO {
  lon: number;
  lat: number;
}

export function getPoiData(resource: string): Promise<PoiDTO> {
  return fetch(`${BASE_URL}${resource}/data.json`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function getCoordinates(address: AddressDTO): Promise<CoordinateDTO> {
  return fetch(
    `${NOMINATIM_URL}&street=${address.street}&city=${address.city}&postalcode=${address.zip}&country=Germany`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.length < 1) {
        throw new Error(
          `Was not able to find address for ${JSON.stringify(address)}`
        );
      }
      const firstResult = response[0];
      return {
        lon: firstResult.lon,
        lat: firstResult.lat,
      };
    });
}
