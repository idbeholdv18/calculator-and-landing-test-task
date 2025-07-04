import { memo } from 'react';
import { sizeMap } from "../size-map.const";
import { E_IconSize } from "../icon-size.enum";

interface I_UnlockProps {
  size?: E_IconSize;
}

const Unlock = (props: I_UnlockProps) => {
  const pixelSize = sizeMap[props.size || E_IconSize.md];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" height={ `${ pixelSize }px` } viewBox="0 -960 960 960"
      width={ `${ pixelSize }px` }
      style={ {
        fill: 'var(--fg-contrast)',
        cursor: 'pointer',
      } }
    >
      <path
        d="M240-160h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Zm0 80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h280v-80q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720h-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Z"/>
    </svg>
  );
};

export const UnlockMemoized = memo(Unlock);

export type T_UnlockComponent = typeof UnlockMemoized;
