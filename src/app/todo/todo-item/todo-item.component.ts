import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { FormControl, Validators } from '@angular/forms';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputReal') inputReal: ElementRef;

  done: FormControl;
  input: FormControl;
  editing: boolean;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.done = new FormControl( this.todo.done );
    this.input = new FormControl( this.todo.text, Validators.required );
    
   this.done.valueChanges.subscribe( () => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch( action );
    })
  
  }

  edit() {
    this.editing = true;
    
    setTimeout( () => {
      this.inputReal.nativeElement.focus();
    }, 1);
  }

  finishEdit() {
    this.editing = false;

    if ( !this.input.valid ) {
      return;
    }

    if ( this.input.value === this.todo.text ) {
      return;
    }

    const action = new EditTodoAction( this.todo.id, this.input.value );
    this.store.dispatch( action );
  }

  delete() {
    const action = new DeleteTodoAction( this.todo.id );
    this.store.dispatch( action );
  }

}
