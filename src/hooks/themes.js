import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../components/theme-layer/Theme.css';

export const useThemePicker = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const className = styles[theme];

  return { theme, toggle, className };
};
