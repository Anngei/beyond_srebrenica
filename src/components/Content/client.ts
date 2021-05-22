import { Converter } from 'showdown';

const BASE_URL =
  'https://raw.githubusercontent.com/Anngei/beyond_srebrenica/main/content/';
const CONVERTER = new Converter();

getContent('about-us');
export function getContent(resource: string): Promise<string> {
  return fetch(`${BASE_URL}${resource}.md`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    })
    .then((data) => CONVERTER.makeHtml(data));
}
