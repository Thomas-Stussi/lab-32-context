/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useThemePicker } from '../../hooks/themes';
import styles from '../theme-layer/Theme.css';

const Header = () => {
  const { toggle, theme, className } = useThemePicker();

  useEffect(() => {
    if (theme === 'dark') document.body.style.backgroundColor = 'black';
    if (theme === 'light') document.body.style.backgroundColor = 'white';
  }, [theme]);

  return (
    <header className={className} padding-top="10px">
      <button onClick={toggle}>Toggle Light/Dark Mode</button>
    </header>
  );
};

export default Header;
