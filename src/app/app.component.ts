/* tslint:disable:max-line-length */

import {Component, OnInit, NgZone, ChangeDetectorRef} from '@angular/core';
import {ContentTemplates} from './content-templates';
import {FormControl, FormGroup} from '@angular/forms';
import {AppService} from './app.service';
import {from, Observable} from 'rxjs';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private service: AppService, private ngZone: NgZone, private cdRef: ChangeDetectorRef) {
  }

  title = 'template-engine';
  templates$: Observable<ContentTemplates[]>;
content = '';
name = '';
  templateContentFrom = new FormGroup({
    position: new FormControl(''),
    company: new FormControl(''),
    template: new FormControl('')
  });

  ngOnInit() {
    this.templates$ = this.service.getContent()
      .pipe(
        map((data: any[]) => {
          return data.map((source) => {
            source.content = new Function('position,company', 'return `' + source.content + '`;');
            return source as ContentTemplates;
          });
        }));
    this.templateContentFrom.valueChanges.subscribe((changes) => {
      const {company, position, template} = changes;
      if ((template as string).trim().length > 0) {
      this.templates$.subscribe((contents) => {
        const obj = contents.find((temp) => template === temp.name);
        const content = obj.content(position, company);
        this.content = content;
        this.name = template as string;
      }); }
    });


  }
}
