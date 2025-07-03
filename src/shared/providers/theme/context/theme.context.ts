import {createContext} from "react";
import {T_ThemeState} from "@/shared/providers/theme/types/theme-state.type";
import {E_Theme} from "@/shared/providers/theme/types/theme.enum";

export const ThemeContext = createContext<T_ThemeState>({
    theme: E_Theme.System
});