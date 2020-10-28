/* eslint-disable max-len */
import React from 'react';
import { useCharacters } from '../../hooks/characters';
import { useThemePicker } from '../../hooks/themes';
import CharacterItem from './CharacterItem';
import styles from './CharacterList.css';
import themes from '../theme-layer/Theme.css';

const CharacterList = () => {
  const { theme } = useThemePicker();
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters" className={`${styles.CharacterList} ${theme === 'dark' ? themes.dark : themes.light}`}>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
