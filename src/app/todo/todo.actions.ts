import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add Todo';

export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All Todos';

export const EDIT_TODO = '[TODO] Edit Todo';
export const DELETE_TODO = '[TODO] Delete Todo';
export const CLEAR_COMPLETED_TODO = '[TODO] Clear Completed Todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor( public text: string ) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor( public id: number ) {}
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor( public done: boolean ) {}
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor( public id: number, public text: string ) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor( public id: number ) {}
}

export class ClearCompletedTodoAction implements Action {
    readonly type = CLEAR_COMPLETED_TODO;
}

export type actions = AddTodoAction |
                    ToggleTodoAction |
                    EditTodoAction |
                    DeleteTodoAction |
                    ToggleAllTodoAction |
                    ClearCompletedTodoAction;