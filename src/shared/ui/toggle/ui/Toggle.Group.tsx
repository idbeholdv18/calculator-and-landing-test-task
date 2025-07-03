import {Children, cloneElement, isValidElement, ReactElement, useMemo} from 'react'
import {I_ToggleOptionProps, ToggleOption} from "@/shared/ui/toggle/ui/Toggle.Option";

interface I_ToggleGroupProps<T> {
    value: T
    onChange: (value: T) => void,
    children: ReactElement<I_ToggleOptionProps<T>>[],
    className?: string
}

export function ToggleGroup<T>(props: I_ToggleGroupProps<T>) {
    const options = useMemo(() => {
        return Children.map(props.children, (child) => {
            if (isValidElement(child) && child.type === ToggleOption) {
                const childProps = child.props as I_ToggleOptionProps<T>;
                const isSelected = childProps.value === props.value;

                const onClick = () => props.onChange(childProps.value);

                return cloneElement(child, {
                    selected: isSelected,
                    onClick,
                });
            }
            return child;
        });
    }, [props.children, props.value, props.onChange]);

    return <div role="group" className={props.className}>{options}</div>;
}

export type T_ToggleGroupComponent = typeof ToggleGroup;