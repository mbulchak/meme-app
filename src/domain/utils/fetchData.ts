import { MemeResponse } from "../dto/MemeResponse";

export const fetchData = (baseUrl: string): Promise<MemeResponse> => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Smth went wrong with the fetching the api');
  });
};
