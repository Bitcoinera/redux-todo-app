import * as todoActions from './todo.actions';
import { Todo } from './models/todo.model';

const fixTodo1 = new Todo('Defeat Venom');
const fixTodo2 = new Todo('Save the world');

const initialState: Todo[] = [ fixTodo1, fixTodo2 ];

export function todoReducer( state = initialState, action: todoActions.actions ) {
    switch ( action.type ) {
        case todoActions.ADD_TODO:
            const todo = new Todo( action.text );
            return [ ...state, todo ];

        case todoActions.TOGGLE_TODO:
            return state.map( todoEdit => {

                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        done: !todoEdit.done
                    };
                } else {
                    return todoEdit;
                }
            });
        
        case todoActions.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    done: action.done
                }
            });

        case todoActions.EDIT_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        text: action.text
                    };
                } else {
                    return todoEdit;
                }
            });

        case todoActions.DELETE_TODO:
            return state.filter( todoDelete => todoDelete.id !== action.id );

        case todoActions.CLEAR_COMPLETED_TODO:
            return state.filter( todoClear => !todoClear.done );

        default:
            return state;
    }
}