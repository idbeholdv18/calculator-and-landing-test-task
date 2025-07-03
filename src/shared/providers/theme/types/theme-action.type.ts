import {T_ActionMap} from "@/shared/types/action-map.type";
import {T_ThemePayload} from "./theme-payload.type";

export type T_ThemeAction = T_ActionMap<T_ThemePayload>[keyof T_ActionMap<T_ThemePayload>];
