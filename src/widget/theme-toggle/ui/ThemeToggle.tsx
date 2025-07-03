import {E_Theme, E_ThemeAction, useTheme, useThemeDispatch} from "@/shared/providers/theme";
import {Toggle} from "@/shared/ui/toggle";
import clsx from "clsx";
import { E_IconSize } from "@/shared/icons/icon-size.enum";
import { Icons } from "@/shared/icons";
import * as cls from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
    const themeDispatch = useThemeDispatch();
    const {theme} = useTheme();

    return (
      <Toggle.Group<E_Theme>
        value={theme}
        onChange={(value) => themeDispatch({ type: E_ThemeAction.Set, payload: value })}
        className={cls.group}
      >
        <Toggle.Option
          value={E_Theme.Dark}
          className={`${cls.option} ${theme === E_Theme.Dark ? cls.active : ""}`}
        >
          <Icons.DarkMode isActive={theme === E_Theme.Dark} size={E_IconSize.sm} />
        </Toggle.Option>

        <Toggle.Option
          value={E_Theme.System}
          className={`${cls.option} ${theme === E_Theme.System ? cls.active : ""}`}
        >
          <Icons.SystemMode isActive={theme === E_Theme.System} size={E_IconSize.sm} />
        </Toggle.Option>

        <Toggle.Option
          value={E_Theme.Light}
          className={`${cls.option} ${theme === E_Theme.Light ? cls.active : ""}`}
        >
          <Icons.LightMode isActive={theme === E_Theme.Light} size={E_IconSize.sm} />
        </Toggle.Option>
      </Toggle.Group>
    );
};