import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { SearchingService } from "../searching.service";
import * as SampleResults from "../results.sample.json";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  results: any = [];

  constructor(private http: SearchingService) {}

  ngOnInit() {
    this.http.resultsUpdated.subscribe(
      results => (this.results = results.hits)
    );
    this.http.searchViaTerm("tacos");
  }
}
