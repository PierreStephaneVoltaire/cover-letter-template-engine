/* tslint:disable:max-line-length */

import { Component } from '@angular/core';
import {ContentTemplates} from './content-templates';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'template-engine';
  templates: ContentTemplates[] = [
    { lastUpdated: Date.now().toString(),  name: 'Cover Letter', content: (position: string, company: string) => `
  Dear hiring team,

  I am very interested in the ${position} Opportunities at ${company}. I believe my passion and curiosity make me an ideal candidate.
  ` }
  ];
  templateContentFrom = new FormGroup({
    position: new FormControl(''),
  company : new FormControl(''),
    template: new FormControl(this.templates[0].name)
});

getContent(): string {
return this.templates.find((temp) => this.templateContentFrom.get('template').value === temp.name).content(this.templateContentFrom.get('position').value, this.templateContentFrom.get('company').value) ;
}
}
