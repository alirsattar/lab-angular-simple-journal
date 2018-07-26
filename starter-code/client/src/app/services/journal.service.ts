import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  constructor(private http: Http) { }
  getEntries() {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());
  }
  writeEntry(theNewEntry){
    console.log('------------------service log',theNewEntry);
    return this.http.post('http://localhost:3000/api/journal-entries', theNewEntry)
      .map((res) => {res.json() });
  }
}
