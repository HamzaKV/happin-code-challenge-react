import React, { useState } from 'react';
import {
    default as InputField,
    IProps as InputFieldProps,
} from '../../atoms/InputField';
import { default as Icon, IProps as IconProps } from '../../atoms/Icon';
import { default as Text } from '../../atoms/Text';
import styles from './styles.module.css';

export interface IProps extends InputFieldProps {
    initialValue?: string;
    label?: string;
    disabled?: boolean;
    labelColor?: React.CSSProperties['color'];
    color?: React.CSSProperties['color'];
    helperColor?: React.CSSProperties['color'];
    name: string;
    onInputChange?: (value?: string) => void;
    placeholder?: string;
    onFocusOut?: (name: string, value?: string) => void;
    icon?: IconProps['name'];
    iconType?: IconProps['type'];
    flow?: 'row' | 'row-reverse';
}

const IconInputText = ({
    initialValue,
    label,
    labelColor,
    name,
    onInputChange,
    placeholder,
    color,
    onFocusOut,
    icon,
    flow = 'row-reverse',
    helperColor,
    iconType = 's4',
    ...other
}: IProps) => {
    const [value, setValue] = useState(initialValue ?? '');

    const handleChange = (e: any) => {
        const v = e.target.value;
        setValue(v);
        if (onInputChange) onInputChange(v);
    };

    const handleOnFocusOut = () => {
        if (onFocusOut) onFocusOut(name, value);
    };

    return (
        <div className={styles.container} style={{ margin: '5px 0', flex: 1 }}>
            {label && (
                <Text color={labelColor ?? 'black'} type='t7'>
                    {label}
                </Text>
            )}
            <div
                className={styles.inputContainer}
                style={{ flexDirection: flow }}
            >
                <div
                    style={{
                        margin: flow === 'row' ? '0 0 0 10px' : '0 10px 0 0',
                    }}
                >
                    {icon && (
                        <Icon
                            color={helperColor ?? 'black'}
                            name={icon}
                            type={iconType}
                        />
                    )}
                </div>
                <InputField
                    className={styles.input}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    onBlur={handleOnFocusOut}
                    style={{
                        color: color,
                        padding:
                            flow === 'row'
                                ? '0.5rem 1rem 0.5rem 0.5rem'
                                : '0.5rem 0.5rem 0.5rem 1rem',
                        width: '100%'
                    }}
                    {...other}
                />
            </div>
        </div>
    );
};

export default IconInputText;