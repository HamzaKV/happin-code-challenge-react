import React, {
    createContext,
    FC,
    Reducer,
    ReducerState,
    useContext,
    useReducer,
} from 'react';

const makeStore = <R extends Reducer<any, any>, IContext>(
    reducer: R,
    initialState: ReducerState<R>
): [
    any,
    () => IContext,
    () => React.Dispatch<React.ReducerAction<R>>
] => {
    type TDispatchContext = React.Dispatch<React.ReducerAction<R>>;

    const dispatchContext = createContext<TDispatchContext>(() => {});
    const storeContext = createContext<any>(null);

    const StoreProvider: FC = ({ children }) => {
        const [store, dispatch] = useReducer<R>(
            reducer,
            initialState
        );

        return (
            <dispatchContext.Provider value={dispatch}>
                <storeContext.Provider value={store}>
                    {children}
                </storeContext.Provider>
            </dispatchContext.Provider>
        );
    };

    const useDispatch = () => {
        return useContext(dispatchContext);
    };

    const useStore = () => {
        return useContext(storeContext);
    };

    return [StoreProvider, useStore, useDispatch];
};

export default makeStore;
