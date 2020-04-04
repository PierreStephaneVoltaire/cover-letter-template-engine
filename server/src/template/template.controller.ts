import {Body, Controller, Delete, Get, HttpCode, Param, Post, Query} from '@nestjs/common';
import {TemplateService} from './template.service';
import {Template} from './template.entity';
import {CeateTemplateDto} from './ceate-template-dto.interface';
import {InsertResult} from 'typeorm';

@Controller('template')
export class TemplateController {
  constructor(private templateService: TemplateService) {}

  @Get()
  findAll(): Promise<Template[]> {
    return this.templateService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Template> {
    return this.templateService.findOne(id);  }

  @Delete(':id')
  deleteOne(@Param('id') id): Promise<void> {
    return this.templateService.remove(id) ; }

  @Post()
  @HttpCode(204)

  create(@Body() createTempaleDto: CeateTemplateDto): Promise<InsertResult> {
    return this.templateService.create(new Template(createTempaleDto));
  }
}
