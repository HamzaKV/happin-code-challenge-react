import makeStore from './make-store';

type TState = {
    title: string;
    author: string;
}[];

type TAction = {
    type: 'seed';
    payload: any;
};

const booksReducer = (state: TState, action: TAction): TState => {
    switch (action.type) {
        case 'seed':
            return action.payload;
        default:
            return state;
    }
};

const [BooksProvider, useBooks, useBooksDispatch] = makeStore<
    (state: TState, action: TAction) => TState,
    TState
        >(booksReducer, []);

export { BooksProvider, useBooks, useBooksDispatch };