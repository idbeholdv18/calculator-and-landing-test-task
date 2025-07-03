import {T_ThemeAction} from "@/shared/providers/theme/types/theme-action.type";
import {T_ThemeState} from "@/shared/providers/theme/types/theme-state.type";
import {LS_Theme} from "@/shared/const/local-storage.const";

export const themeReducer = (state: T_ThemeState, action: T_ThemeAction): T_ThemeState => {
    switch (action.type) {
        case "set":
            localStorage.setItem(LS_Theme, action.payload);
            return {...state, theme: action.payload};
        default:
            return state;
    }
}