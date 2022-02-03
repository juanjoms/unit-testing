import { Component, OnInit } from '@angular/core';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  searchTerm = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
