import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return { response: "API is Online" };
  }
}
