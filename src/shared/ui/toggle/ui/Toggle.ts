import {T_ToggleGroupComponent, ToggleGroup} from "./Toggle.Group";
import {T_ToggleOptionComponent, ToggleOption} from "./Toggle.Option";

type T_Toggle = {
    Group: T_ToggleGroupComponent,
    Option: T_ToggleOptionComponent,
}

export const Toggle: T_Toggle = {
    Group: ToggleGroup,
    Option: ToggleOption,
}