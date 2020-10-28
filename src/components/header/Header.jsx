/* eslint-disable max-len */
import React from 'react';
import { useThemePicker } from '../../hooks/themes';
import themes from '../theme-layer/Theme.css';

const Header = () => {
  const { toggle } = useThemePicker();

  return (
    <header className={themes.dark} padding-top="10px">
      <button data-testid="button" onClick={toggle}>Toggle Light/Dark Mode</button>
    </header>
  );
};
export default Header;
