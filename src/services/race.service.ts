import { API, message } from '@/utils/keys';

export const getBreeds = async () => {
  try {
    if (!API) {
      throw new Error(message);
    }
    const res = await fetch(`${API}/race`, { cache: 'no-store' });
    const race = await res.json();
    // console.log(race);
    return race;
  } catch (error) {
    console.log(error);
  }
};
