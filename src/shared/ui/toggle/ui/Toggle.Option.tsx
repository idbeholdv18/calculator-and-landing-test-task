import React, {memo} from 'react';

export interface I_ToggleOptionProps<T> {
    value: T;
    selected?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const ToggleOption = memo(
    function ToggleOption<T>(props: I_ToggleOptionProps<T>) {
        return (
            <button
                type="button"
                onClick={props.onClick}
                className={props.className}
            >
                {props.children}
            </button>
        );
    }
);

export type T_ToggleOptionComponent = typeof ToggleOption;