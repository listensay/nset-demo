import { Injectable } from '@nestjs/common';

@Injectable()
export class RangeService {
  getRange(range) {
    const arr = [];
    for (let i = 0; i < range; i++) {
      arr.push(i + 1);
    }

    return {
      code: 0,
      msg: '请求成功!',
      data: arr,
    };
  }
}
