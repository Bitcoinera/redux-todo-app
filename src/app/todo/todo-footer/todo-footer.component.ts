import { Component, OnInit } from '@angular/core';
import { validFilters, SetFilterAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import { ClearCompletedTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pending: number;
  validFilters:  validFilters[] = ['all', 'completed', 'active'];
  currentFilter: string;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.currentFilter = state.filter;

      this.countPending( state.todos );

    })
  }

  changeFilter( filter: validFilters ) {
    const action = new SetFilterAction(filter);
    this.store.dispatch( action );
  }

  countPending( todos: Todo[] ) {
    this.pending = todos.filter( todo => !todo.done ).length;
  }

  clearCompleted() {
    const action = new ClearCompletedTodoAction;
    this.store.dispatch( action );
  }
}
