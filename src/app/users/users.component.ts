import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { DataUsersService } from '../data-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: User[];

  constructor(private userService: DataUsersService) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers(): void {
  	this.userService.getAllUsers().subscribe(users => this.users = users);
  }
}
