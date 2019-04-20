export class User {
  _id: String;
  username: String;
  password: String;
  email: String;
  role: String;
  roleName: String;

  constructor(username, password, email, role, roleName) {
    // this._id = _id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
    this.roleName = roleName;
  }

}
