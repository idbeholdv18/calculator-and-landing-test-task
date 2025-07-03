import {DarkModeMemoized, T_DarkModeComponent} from "./dark-mode/DarkMode";
import {LightModeMemoized, T_LightModeComponent} from "./light-mode/LightMode";
import {SystemModeMemoized, T_SystemModeComponent} from "./system-mode/SystemMode";

type T_Icons = {
    DarkMode: T_DarkModeComponent;
    LightMode: T_LightModeComponent;
    SystemMode: T_SystemModeComponent;
}

export const Icons: T_Icons = {
    DarkMode: DarkModeMemoized,
    LightMode: LightModeMemoized,
    SystemMode: SystemModeMemoized,
}