import { HttpStatus } from '@nestjs/common';

export class NotFoundError {
  statusCode: HttpStatus;
  message: string;
}
