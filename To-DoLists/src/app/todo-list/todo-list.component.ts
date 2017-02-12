import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo : String;
  title;

  constructor() {
    this.todo = "mojon";
    this.title = "titulo";
  }

  ngOnInit() {
  }

}
