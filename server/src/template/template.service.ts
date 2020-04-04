import { Injectable } from '@nestjs/common';
import {Template} from './template.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {InsertResult, Repository} from 'typeorm';

@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(Template)
    private templateRepository: Repository<Template>,

  ) {
  }

  create(template: Template): Promise<InsertResult> {
    return this.templateRepository.insert(template);
  }


  findAll(): Promise<Template[]> {
    return this.templateRepository.find();
  }

  findOne(id: string): Promise<Template> {
    return this.templateRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.templateRepository.delete(id);
  }
}
