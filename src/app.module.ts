import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({
    envFilePath: ['.env.development.local', '.env.development'],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
