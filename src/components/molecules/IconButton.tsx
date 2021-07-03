import React from 'react';
import { default as Button, IProps as ButtonProps } from './Button';
import { default as Icon, IProps as IconProps } from '../atoms/Icon';

export interface IProps {
    onClick: (event?: React.MouseEvent<HTMLElement>) => void;
    buttonSize: ButtonProps['size'];
    buttonColor?: React.CSSProperties['backgroundColor'];
    iconType: IconProps['type'];
    iconName?: IconProps['name'];
    iconColor?: IconProps['color'];
    style?: React.CSSProperties;
}

const IconButton = ({
    onClick,
    buttonSize,
    buttonColor,
    iconType,
    iconName,
    iconColor,
    style,
}: IProps) => (
    <Button
        onClick={onClick}
        size={buttonSize}
        backgroundColor={buttonColor}
        style={{ margin: 0, padding: 0, ...style }}
    >
        <Icon type={iconType} name={iconName} color={iconColor} />
    </Button>
);

export default IconButton;