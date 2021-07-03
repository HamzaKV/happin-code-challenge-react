import Storage from '../../services/storage';
import useCacheState from './cache-state';

const usePersistentCacheState = <D>(
    key: string,
    initalState: D
): [() => D, (newValue: D) => void] => {
    const value = Storage.get(key);
    const [getState, updateState] = useCacheState<D>(value ?? initalState);

    const setState = (newValue: D): void => {
        updateState(newValue);
        Storage.set(key, newValue);
    };

    return [getState, setState];
};

export default usePersistentCacheState;
