import makeStore from './make-store';

type TState = string[];

type TAction = {
    type: 'seed';
    payload: string | string[];
};

const citiesReducer = (state: TState, action: TAction): TState => {
    switch (action.type) {
        case 'seed':
            return (action.payload as string[]);
        default:
            return state;
    }
};

const [CitiesProvider, useCities, useCitiesDispatch] = makeStore<
    (state: TState, action: TAction) => TState,
    TState
        >(citiesReducer, []);

export { CitiesProvider, useCities, useCitiesDispatch };