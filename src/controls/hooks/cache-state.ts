import { useRef } from 'react';

const useCacheState = <D>(
    initialState: D
): [() => D, (newValue: D) => void] => {
    const state = useRef<D>(initialState);

    const getState = (): D => state.current;

    const updateState = (newValue: D): void => {
        state.current = newValue;
    };

    return [getState, updateState];
};

export default useCacheState;
