import { useEffect, useState } from 'react';
import { getCharacters } from '../services/heyArnoldApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, []);

  return characters;
};
