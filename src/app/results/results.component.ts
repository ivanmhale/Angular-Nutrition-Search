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

  async ngOnInit() {
    const response = await this.http.searchViaTerm("tacos");
    this.results = response.hits;
  }
}
