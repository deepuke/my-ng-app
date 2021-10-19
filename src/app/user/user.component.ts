import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface User {
  name: string;
  age: string;
  id: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() userEvent: EventEmitter<User>;
  constructor() {
    this.user = {} as User;
    this.userEvent = new EventEmitter<User>();
  }

  ngOnInit(): void {}

  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }
}
