import * as filterActions from './filter.actions';

const initialState: filterActions.validFilters = 'all';

export function filterReducer( state = initialState, 
                            action: filterActions.actions ): filterActions.validFilters {
    switch ( action.type ) {
        case filterActions.SET_FILTER:
            return action.filter;

        default:
            return state;
    }

}