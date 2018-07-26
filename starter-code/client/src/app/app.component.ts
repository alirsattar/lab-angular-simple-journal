import { Component } from '@angular/core';

import { JournalService } from './services/journal.service';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  journalEntries:Array<any> = [];
  newEntry:any = {};
  constructor(private localJournalService: JournalService) { }
  ngOnInit() {this.getJournalEntry()}
    getJournalEntry() {
    this.localJournalService.getEntries()
      .subscribe((journalEntries) => this.journalEntries = journalEntries.reverse());
  };
  sendEntry(theEntry) {
    this.localJournalService.writeEntry(theEntry)
      .subscribe((wow)=>{});
  }
}
