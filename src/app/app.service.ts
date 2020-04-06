import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContentTemplates} from './content-templates';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  getContent() {
    return this.http.get('http://localhost:3000/template');

  }
}
