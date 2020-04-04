import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { TemplateModule } from './template/template.module';
import {Connection} from 'typeorm';
import {Template} from './template/template.entity';

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'templates',
    entities: [Template],
  }), TemplateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}

}
