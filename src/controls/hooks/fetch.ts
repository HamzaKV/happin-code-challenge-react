import { useEffect, useReducer } from 'react';
import fetchReducer from '../reducers/fetch';
import useCacheState from './cache-state';
import Logger from '../../services/logger';

export const Status = {
    idle: 'idle',
    success: 'success',
    error: 'error',
    loading: 'loading',
};

const initialState = {
    status: Status.idle,
    data: {},
    error: undefined,
};

export type TStatus = keyof typeof Status;

export type TFetch = (query: () => Promise<any>) => Promise<void>;

export type THook = (
    query?: () => Promise<any>,
) => [status: TStatus, data: any, error: Error, runFetch: TFetch];

const useFetch: THook = (
    query
) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    const runFetch: TFetch = async (query) => {
        try {
            const json = await query();
            dispatch({ type: Status.success, payload: json });
            setTimeout(() => {
                dispatch({ type: Status.idle });
            }, 0);
        } catch (error) {
            Logger.error('useFetch Hook', error);
            dispatch({ type: Status.error, payload: error });
        }
    };

    useEffect(() => {
        if (query) runFetch(query);
    }, []);

    return [state.status, state.data, state.error, runFetch];
};

export default useFetch;
