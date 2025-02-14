export class User {
  userId: number;
  userName: string;
  password: string;
  avatar: string;
  desc: string; //身分
  role: string[];
  button: string[];
  routes: string[];
  token: string;

  constructor(
    userId: number,
    userName: string,
    password: string,
    avatar: string,
    desc: string,
    role: string[],
    button: string[],
    routes: string[],
    token: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
    this.avatar = avatar;
    this.desc = desc;
    this.role = role;
    this.button = button;
    this.routes = routes;
    this.token = token;
  }
}

export interface loginForm {
  userName: string;
  password: string;
}

interface dataType {
  token: string;
}

export interface loginResponseData {
  code: number;
  data: dataType;
}

export interface userInfoReponseData {
  code: number;
  data: User;
}
