import React from 'react';
import styles from './styles.module.css';

export interface IProps {
    width?: number;
}

const Spinner = ({
    width = 110,
}: IProps) => (
    <div className={styles.ldsRing} style={{ width, height: width }}>
        <div style={{ width, height: width }}></div>
        <div style={{ width, height: width }}></div>
        <div style={{ width, height: width }}></div>
        <div style={{ width, height: width }}></div>
    </div>
);

export default Spinner;