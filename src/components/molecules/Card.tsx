import React from 'react';
import { default as IconButton, IProps as IconButtonProps } from './IconButton';

export interface IProps {
    children: React.ReactNode;
    backgroundColor: React.CSSProperties['backgroundColor'];
    shadow: React.CSSProperties['boxShadow'];
    icon?: IconButtonProps['iconName'];
    iconColor?: IconButtonProps['iconColor'];
    onClick?: IconButtonProps['onClick'];
}

const Card =  ({
    children,
    backgroundColor,
    shadow,
    icon,
    iconColor,
    onClick,
}: IProps) => (
    <div
        style={{
            backgroundColor: backgroundColor,
            borderRadius: 22,
            minHeight: 200,
            padding: 20,
            boxShadow: shadow,
            position: 'relative',
        }}
    >
        {icon && (
            <IconButton
                iconName={icon}
                onClick={onClick ?? (() => {})}
                iconType='s4'
                buttonSize='sm'
                buttonColor='transparent'
                iconColor={iconColor}
                style={{
                    width: 'fit-content',
                    position: 'absolute',
                    top: 10,
                    right: 10,
                }}
            />
        )}
        {children}
    </div>
);

export default Card;