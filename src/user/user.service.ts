import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return {
      code: 200,
      data: [],
      msg: '用户列表请求成功',
    };
  }
  addUser() {
    return {
      code: 200,
      data: {},
      msg: '用户添加成功',
    };
  }
}
