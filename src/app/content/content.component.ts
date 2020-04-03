import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  @Input() content: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
