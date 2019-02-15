import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  done = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

  toggleAll() {
    this.done = !this.done;

    const action = new ToggleAllTodoAction( this.done );
    this.store.dispatch( action );
  }
}
