import useSWR from 'swr';
import { CHARACTERS_API } from '../../constants/api';

export type CharacterResponse = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterBasicInfo = {
  id: number;
  name: string;
  favorite: boolean;
  status: 'Alive' | 'Dead' | 'unknown';
  location: string;
  origin: string;
  image: string;
};

type CharactersResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: CharacterBasicInfo[];
};

const useCharacters = () => {
  const { data } = useSWR<CharactersResponse>(CHARACTERS_API);

  return { characters: data?.results };
};

export { useCharacters };
