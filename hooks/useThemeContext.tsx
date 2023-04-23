'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { childrenNode } from '@/constants/typeInterface';

type TthemeContext = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  toggleThemeHandler: () => void;
};

const ThemeContext = createContext(null as unknown as TthemeContext);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: childrenNode) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => initialThemeHandler());

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem('darkMode');
  };

  const initialThemeHandler = (): void => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      const darkMode: boolean = JSON.parse(localStorage.getItem('darkMode')!);
      darkMode && document.documentElement.classList.add('dark');
      setDarkMode(() => {
        return darkMode;
      });
    }
  };

  const toggleThemeHandler = () => {
    const darkMode: boolean = JSON.parse(localStorage.getItem('darkMode')!);
    setDarkMode(!darkMode);
    toggleDarkClassToBody();
    setValueToLocalStorage();
    return darkMode;
  };

  const toggleDarkClassToBody = () => {
    document.documentElement.classList.toggle('dark');
  };

  const setValueToLocalStorage = () => {
    localStorage.setItem('darkMode', `${!darkMode}`);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
