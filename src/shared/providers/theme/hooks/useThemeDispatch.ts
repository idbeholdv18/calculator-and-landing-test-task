import {useContext} from "react";
import {DispatchThemeContext} from "../context/dispatch-theme.context";

export const useThemeDispatch = () => {
    return useContext(DispatchThemeContext)
}