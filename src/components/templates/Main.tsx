import { FC } from 'react';
import Header from '../organisms/Header';

export interface IProps {
}

const MainTemplate: FC<IProps> = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);

export default MainTemplate;
