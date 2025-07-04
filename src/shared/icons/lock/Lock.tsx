import { memo } from 'react';
import { sizeMap } from "../size-map.const";
import { E_IconSize } from "../icon-size.enum";

interface I_SystemModeProps {
  size?: E_IconSize;
}

const Lock = (props: I_SystemModeProps) => {
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
        d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
    </svg>
  );
};

export const LockMemoized = memo(Lock);

export type T_LockComponent = typeof LockMemoized;
