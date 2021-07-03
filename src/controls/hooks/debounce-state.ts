import { useEffect, useState } from 'react';

const useDebounceState = <D>(
    value: D,
    callback?: (v?: D) => any,
    delay = 500,
): [D, React.Dispatch<D>] => {
    const [state, setState] = useState<D>(value);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        timeout = setTimeout(() => {
            setState(value);
        }, delay);

        return () => {
            if (timeout)
                clearTimeout(timeout);
        };
    }, [value]);

    useEffect(() => {
        (async () => {
            if (callback)
                await callback(state);
        })();
    }, [state]);

    return [state, setState];
};

export default useDebounceState;
