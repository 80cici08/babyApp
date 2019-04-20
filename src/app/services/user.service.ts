import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

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

  options = {
    withCredentials: false
  };

  // the http REST call urls
  private _findUserByIdUrl = '/api/user/';
  private _findUserByUsernameUrl = '/api/user?username=';
  private _findUserByCredentialsUrl = '/api/user?username=';
  private _updateUserUrl = '/api/user/';
  private _deleteUserUrl = '/api/user/';
  private _createUserUrl = '/api/user';
  private _uploadUrl = '/api/upload';
  private _loginUrl = '/api/login';
  private _logoutUrl = '/api/logout';
  private _registerUrl = '/api/register';
  private _loggedinUrl = '/api/loggedin';

  constructor(private _http: HttpClient,
              private _sharedService: SharedService,
              private _router: Router) {
  }

  // login service function
  login(username: String, password: String) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this._http.post<any>(this._loginUrl, body, this.options);
  }

  // logout service function
  logout() {
    console.log('Logging out...');
    this.options.withCredentials = false;
    return this._http.post(this._logoutUrl, '', this.options);
  }

  // register new user service function
  register(username: String, password: String, role: String, roleName: String) {
    this.options.withCredentials = true;
    const newUser = {
      username: username,
      password: password,
      email: '',
      role: role,
      roleName: roleName,
      lastLogin: new Date().toLocaleString()
    };
    return this._http.post<any>(this._registerUrl, newUser, this.options);
  }

  // loggedIn function to store the currently logged user in SharedService
  loggedIn() {
    this.options.withCredentials = true;
    return this._http.get<any>(this._loggedinUrl, this.options).map(
      (res: Response) => {
        const user = JSON.stringify(res);
        if (user !== '0') {
          this._sharedService.user = JSON.parse(user);
          return true;
        } else {
          this._router.navigate(['login']);
          return false;
        }
      }
    );
  }

  // the http call on CRUD services
  createUser(user: any) {
    const new_user = {
      username: user.username,
      password: user.password,
      email: '',
      role: user.role,
      roleName: user.roleName,
      lastLogin: new Date().toLocaleString()
    };
    return this._http.post<any>(this._createUserUrl, new_user);
  }

  findUserById(userId: string) {
    return this._http.get<any>(this._findUserByIdUrl + userId);
  }

  findUserByUsername(username: string) {
    return this._http.get<any>(this._findUserByUsernameUrl + username);
  }

  findUserByCredentials(username: string, password: string) {
    return this._http.get<any>(
      this._findUserByCredentialsUrl + username + '&password=' + password
    );
  }

  updateUser(userId: string, user: any) {
    console.log('Updated the user to: ' + JSON.stringify(user));
    return this._http.put<any>(this._updateUserUrl + userId, user);
  }

  deleteUser(userId: string) {
    console.log('Deleting the user with Id: ' + userId);
    this.options.withCredentials = false;
    return this._http.delete<any>(this._deleteUserUrl + userId, this.options);
  }

}
