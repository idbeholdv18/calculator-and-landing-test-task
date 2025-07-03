import {E_IconSize} from "./icon-size.enum";

export const sizeMap: Record<E_IconSize, number> = {
    [E_IconSize.xs]: 16,
    [E_IconSize.sm]: 20,
    [E_IconSize.md]: 24,
    [E_IconSize.lg]: 28,
    [E_IconSize.xl]: 32,
} as const;