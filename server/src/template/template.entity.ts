import {Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';
import {CeateTemplateDto} from './ceate-template-dto.interface';

@Entity("templates")
export class Template {
  constructor(createTempaleDto: CeateTemplateDto) {
    this.content = createTempaleDto?.content || '';
    this.name = createTempaleDto?.name || '';
    this.lastUpdated = Date.now().valueOf();
  }

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;
  @Column()
  content: string;

  @Column({default: Date.now().valueOf()})
  lastUpdated: number;

}
