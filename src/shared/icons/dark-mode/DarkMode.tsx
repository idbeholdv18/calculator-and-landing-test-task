import {memo} from 'react';
import {E_IconSize} from "../icon-size.enum";
import {sizeMap} from "../size-map.const";

interface I_DarkModeProps {
    size?: E_IconSize;
    isActive?: boolean;
}

const DarkMode = (props: I_DarkModeProps) => {
    const pixelSize = sizeMap[props.size || E_IconSize.md];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${pixelSize}px`} viewBox="0 -960 960 960"
             width={`${pixelSize}px`}
             style={{
               fill: props.isActive ? 'var(--fg-contrast)' : "var(--border-primary)",
                 cursor: 'pointer',
             }}
        >
            <path
                d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
        </svg>
    );
};

export const DarkModeMemoized = memo(DarkMode)

export type T_DarkModeComponent = typeof DarkModeMemoized;