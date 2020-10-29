/* eslint-disable max-len */
import React from 'react';
import { useCharacters } from '../../hooks/characters';
import { useThemePicker } from '../../hooks/themes';
import CharacterItem from './CharacterItem';
import styles from './CharacterList.css';

const CharacterList = () => {
  const { className } = useThemePicker();
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters" className={`${styles.CharacterList} ${className}`}>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
