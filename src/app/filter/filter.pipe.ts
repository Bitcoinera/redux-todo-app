import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { validFilters } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {

    switch (filter) {
      case 'completed':
        return todos.filter( todo => todo.done );
      
      case 'active':
        return todos.filter( todo => !todo.done );

      default:
        return todos;
    }
  }

}
