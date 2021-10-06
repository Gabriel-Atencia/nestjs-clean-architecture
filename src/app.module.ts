import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/ioc/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
