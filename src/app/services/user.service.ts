import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseUrl = environment.baseUrl;

  users: User[] = [
    new User('Alice', 'alice', '', 'Mom', 'Mom'),
    new User('Tom', 'tom', '', 'Dad', 'Dad'),
    new User('Marisa', 'marisa', '', 'Other', 'Grandma'),
  ];

  constructor() {
  }

  createUser(user) {
    user._id = Math.random().toString().substr(2, 9);
    this.users.push(user);
    return user;
  }

  findUserById(userId) {
    return this.users.find(user => {
      return user._id === userId;
    });
  }

  findUserByUsername(username) {
    for (const user of this.users) {
      if (user.username === username) {
        return user;
      }
    }
  }

  findUserByCredentials(username, password) {
    for (const user of this.users) {
      if (user.username === username && user.password === password) {
        return user;
      }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
      }
    }
  }

  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users.splice(x, 1);
      }
    }
  }

}
