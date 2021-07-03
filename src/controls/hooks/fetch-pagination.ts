import { useEffect, useState } from 'react';
import { default as useFetch, TFetch, TStatus } from './fetch';

export type THook = (
    query?: () => Promise<any>
) => [
    status: TStatus,
    data: any,
    error: Error,
    runFetch: TFetch,
    count: number
];

const usePagination: THook = (query) => {
    const [count, setCount] = useState<number>(0);
    const [status, data, error, runFetch] = useFetch(query);

    useEffect(() => {
        // console.log('fetch status', status);
        if (status === 'success') setCount((prev) => prev + 1);
    }, [status]);

    return [status, data, error, runFetch, count];
};

export default usePagination;
