import React from 'react';

export type IProps = JSX.IntrinsicElements['div'];

const Container = ({ children, style, ...other }: IProps) => (
    <div style={Object.assign({}, defaultProps.style, style)} {...other}>
        {children}
    </div>
);

const defaultProps = {
    style: {
        display: 'flex',
        flexDirection: 'column',
        // width: 'max-content'
    },
};

export default Container;