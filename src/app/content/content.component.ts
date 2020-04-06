/* tslint:disable:variable-name */
import {ChangeDetectorRef, Component, Input, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../app.service';
import {NgxMdService} from 'ngx-md';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnChanges{
  constructor(private _markdown: NgxMdService) {}
  @Input()  content: string;

  @Input()  name: string;


  ngOnChanges(changes: SimpleChanges) {
    if (changes.content) {
        this.content = changes.content.currentValue;

    }
  }


}
