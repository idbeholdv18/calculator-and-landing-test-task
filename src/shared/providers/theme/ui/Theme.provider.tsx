import React, {FC, useEffect, useReducer} from 'react';
import {ThemeContext} from "../context/theme.context"
import {themeReducer} from "../reducer/theme.reducer";
import {LS_Theme} from "@/shared/const/local-storage.const";
import {E_Theme} from "../types/theme.enum";
import {DispatchThemeContext} from "../context/dispatch-theme.context";

interface I_ThemeProviderProps {
    children: React.ReactNode;
}

const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? E_Theme.Dark : E_Theme.Light;
};

const getInitialTheme = () => {
    const stored = localStorage.getItem(LS_Theme) as E_Theme | null;
    if (stored === E_Theme.Light || stored === E_Theme.Dark || stored === E_Theme.System) {
        return stored;
    }
    localStorage.setItem(LS_Theme, E_Theme.System);
    return E_Theme.System;
};

export const ThemeProvider: FC<I_ThemeProviderProps> = (props) => {
    const [state, dispatch] = useReducer(themeReducer, {theme: getInitialTheme()});

    useEffect(() => {
        const root = document.documentElement;

        const applyTheme = () => {
            const effectiveTheme =
                state.theme === E_Theme.System ? getSystemTheme() : state.theme;

            root.classList.remove(E_Theme.Dark, E_Theme.Light);
            root.classList.add(effectiveTheme);
        };

        applyTheme();

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = () => {
            if (state.theme === E_Theme.System) applyTheme();
        };
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, [state.theme]);
    return (
        <ThemeContext.Provider value={state}>
            <DispatchThemeContext.Provider value={dispatch}>
                {props.children}
            </DispatchThemeContext.Provider>
        </ThemeContext.Provider>
    );
};
