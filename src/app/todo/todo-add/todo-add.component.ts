import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { FormControl, Validators } from '@angular/forms';
import { AddTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  todo: FormControl;

  constructor( private store: Store<AppState> ) {}

  ngOnInit() {
    this.todo = new FormControl('', Validators.required)
  }

  addTodo() {

    if ( !this.todo.valid ) {
      return;
    }

    const action = new AddTodoAction( this.todo.value );

    this.store.dispatch( action );
    this.todo.setValue('');
  }
}
