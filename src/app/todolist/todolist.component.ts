import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

    newTodoTitle: string ='';

    todos: Array<Todo> = [
      {
        title: 'zakupy',
        complete: true
      },
      {
        title: 'kino',
        complete: false
      }
    ];


    addTodo(){
      if(!this.newTodoTitle){
        return;
      }else{
        const newTodo: Todo = {
          title: this.newTodoTitle,
          complete: false
        };
        this.todos.push(newTodo);
      }
        this.newTodoTitle='';
    }

    deleteTodo(index){
        this.todos.splice(index,1);
    }

}

interface Todo {
  title: string;
  complete: boolean;
}