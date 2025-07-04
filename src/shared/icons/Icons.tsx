import { DarkModeMemoized, T_DarkModeComponent } from "./dark-mode/DarkMode";
import { LightModeMemoized, T_LightModeComponent } from "./light-mode/LightMode";
import { SystemModeMemoized, T_SystemModeComponent } from "./system-mode/SystemMode";
import { LockMemoized, T_LockComponent } from "@/shared/icons/lock/Lock";
import { T_UnlockComponent, UnlockMemoized } from "@/shared/icons/unlock/Unlock";

type T_Icons = {
  DarkMode: T_DarkModeComponent;
  LightMode: T_LightModeComponent;
  SystemMode: T_SystemModeComponent;
  Lock: T_LockComponent;
  Unlock: T_UnlockComponent;
}

export const Icons: T_Icons = {
  DarkMode: DarkModeMemoized,
  LightMode: LightModeMemoized,
  SystemMode: SystemModeMemoized,
  Lock: LockMemoized,
  Unlock: UnlockMemoized,
}