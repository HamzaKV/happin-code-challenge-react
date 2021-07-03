import React, { useEffect, useState } from 'react';
import Storage from '../../services/storage';


const usePersistentState = <D>(
    key: string,
    initalState: D
): [D | null, React.Dispatch<D>] => {
    const [state, setState] = useState<D | null>(null);

    useEffect(() => {
        //read from local storage
        const value: D = Storage.get(key);
        if (value) {
            setState(value);
        } else {
            setState(initalState);
        }
    }, [key, initalState]);

    useEffect(() => {
        if (key) {
            //save to local storage
            Storage.set(key, state);
        }
    }, [state, key]);

    return [state, setState];
};

export default usePersistentState;
