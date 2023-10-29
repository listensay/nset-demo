import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }

  @Post()
  addUsers(): any {
    return this.userService.addUser();
  }
}
