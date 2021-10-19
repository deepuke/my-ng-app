import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Hello World';
  userObject = {
    name: 'Deepu',
    age: '38',
    id: 1,
  };
  newDate = new Date();
  posts: any = [];

  constructor(private httpService: HttpService, private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  handleClick(event: Event) {
    console.log('button clicked', this.title, event.type);
    this.httpService
      .getRequest('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {
        console.log(response);
      });
  }

  handleUserEvent(event: any) {
    console.log(event);
  }

  // getPosts(): any {
  //   this.httpService
  //     .getRequest('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((response) => {
  //       this.posts = response;
  //     });
  // }

  ngOnInit() {
    //this.getPosts();
    this.posts = this.httpService.getRequest(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
