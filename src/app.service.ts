import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Everyone Welcome to Alif World!!!';
  }
}
