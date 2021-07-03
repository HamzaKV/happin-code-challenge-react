import { Status } from '../hooks/fetch';

// Reducer for hook state and actions
// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => {
    switch (action.type) {
        case Status.idle:
            return { ...state, status: Status.idle };
        case Status.loading:
            return {
                ...state,
                status: Status.loading,
            };
        case Status.success:
            return {
                ...state,
                status: Status.success,
                data: action.payload,
                error: '',
            };
        case Status.error:
            return {
                ...state,
                status: Status.error,
                data: {},
                error: action.payload,
            };
        default:
            throw new Error('invalid action');
    }
};
