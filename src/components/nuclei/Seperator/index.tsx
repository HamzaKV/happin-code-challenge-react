import React from 'react';
import styles from './styles.module.css';

const Seperator: React.FC = ({ children }) => (
    <div className={styles.seperator}>{children}</div>
);

export default Seperator;