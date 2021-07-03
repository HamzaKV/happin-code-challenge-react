import React, { createContext } from 'react';
import useDarkMode from '../hooks/dark-theme';
import usePersistantState from '../hooks/persistant-state';

type Colors = {
    primary: string;
    secondary: string;
    tertiary: string;
    quarternary: string;
    quinery: string;
    senary: string;
    septenary: string;
    octonary: string;
    nonary: string;
    denary: string;
};

export interface IProps {
    children: React.ReactNode;
    themes: { [key: string]: Colors };
}

interface IContext {
    theme: string | null;
    setTheme: React.Dispatch<string> | null;
    colors: Colors;
}

const ThemeContext = createContext<IContext | null>(null);

const ThemeContextProvider = (props: IProps) => {
    const isSysDark = useDarkMode();
    const [theme, setTheme] = usePersistantState<string>(
        'theme',
        isSysDark ? 'dark' : 'light'
    );

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                colors: props.themes[theme ?? 'light'],
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider, ThemeContext };
