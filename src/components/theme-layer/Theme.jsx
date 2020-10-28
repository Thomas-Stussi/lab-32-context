import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import CharacterList from '../characters/CharacterList';
import Header from '../header/Header';
import './Theme.css';

const Theme = () => {
  return (
    <ThemeProvider>
      <Header />
      <CharacterList />
    </ThemeProvider>
  );
};

export default Theme;
