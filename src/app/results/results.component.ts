import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SearchingService } from '../searching.service';
import * as SampleResults from '../results.sample.json';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: any = [];
  sortType: {
    type: string;
    order: string;
  } = {
    type: 'item_name',
    order: 'asc'
  };

  constructor(private http: SearchingService) {}

  ngOnInit() {
    this.http.resultsUpdated.subscribe(results => {
      this.results = results.hits;
      this.sortResults('item_name');
    });
    this.results = SampleResults.hits;
    // this.http.searchViaTerm("tacos");
  }

  sortResults(category: string) {
    // When a new column is clicked that is different from the current selected one,
    // set the current Sort Type to that column and sort ascendingly
    if (this.sortType.type != category) {
      this.sortType.order = 'asc';
      this.sortType.type = category;
      this.results.sort((a, b) => {
        if (a.fields[category] > b.fields[category]) {
          return -1;
        }
        if (a.fields[category] < b.fields[category]) {
          return 1;
        }
        return 0;
      });
    }

    if (this.sortType.order === 'asc') {
      this.sortType.order = 'desc';
      this.results.sort((a, b) => {
        if (a.fields[category] < b.fields[category]) {
          return -1;
        }
        if (a.fields[category] > b.fields[category]) {
          return 1;
        }
        return 0;
      });
    } else {
      this.sortType.order = 'asc';
      this.results.sort((a, b) => {
        if (a.fields[category] > b.fields[category]) {
          return -1;
        }
        if (a.fields[category] < b.fields[category]) {
          return 1;
        }
        return 0;
      });
    }
  }
}
