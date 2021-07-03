//IMPORTANT: This an example store

import makeStore from './make-store';

type TState = {
    status: string;
    data: any;
    error: any;
};

type TAction = {
    type: TState['status'];
    payload: any;
};

const todosReducer = (state: TState, action: TAction) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                status: 'loading',
                data: {},
            };
        default:
            return {
                ...state,
                status: 'success',
                data: action.payload,
            };
    }
};

const [TodosProvider, useTodos, useTodoDispatch] = makeStore<
    (state: TState, action: TAction) => TState,
    TState
        >(todosReducer, {
            status: 'init',
            data: null,
            error: null,
        });

export { TodosProvider, useTodos, useTodoDispatch };

/**
 * to use first encapsulate root component with provider e.g.
 * <TodosProvider><App /></TodosProvider>
 */

/**
 * to get state: const { todos } = useTodos();
 */

/**
 * to dispatch:
 * ....
 * const dispatch = useTodoDispatch();
 * ....
 * dispatch({ type: 'loading' | 'success', payload: data });
 * ....
 */