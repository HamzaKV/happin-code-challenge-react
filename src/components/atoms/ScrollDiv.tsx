import React from 'react';
import { default as Container } from '../nuclei/Container';

export interface IProps {
    children: React.ReactNode;
    maxHeight?: React.CSSProperties['maxHeight'];
}

const ScrollDiv = ({ children, maxHeight }: IProps) => (
    <Container
        style={{
            maxHeight: maxHeight,
            overflowY: 'auto',
            overflowX: 'hidden',
        }}
    >
        {children}
    </Container>
);

export default ScrollDiv;