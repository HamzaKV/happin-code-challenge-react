import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const useColors = () => {
    const colors = useContext(ThemeContext);

    return colors?.colors;
};

export default useColors;
