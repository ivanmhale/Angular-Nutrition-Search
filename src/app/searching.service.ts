import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as keys from "./keys.json";
import { EventEmitter } from "protractor";
import { Observable } from "rxjs";

interface resultsResponse {
  total_hits: number;
  max_score: number;
  hits: {
    _index: string;
    _type: string;
    _id: string;
    _Score: number;
    fields: {
      item_id: string;
      item_name: string;
      brand_name: string;
      nf_calories: number;
      nf_serving_size_qty: number;
      nf_serving_size_unit: string;
    };
  }[];
}

@Injectable({
  providedIn: "root"
})
export class SearchingService {
  rootUrl = "https://api.nutritionix.com/v1_1";
  appId: string;
  appKey: string;
  results: resultsResponse = null;

  searchViaTerm(term: string) {
    this.http
      .get(
        // tslint:disable-next-line: max-line-length
        `${this.rootUrl}/search/${term}?results=0:50&fields=item_name,brand_name,item_id,nf_calories&appId=${this.appId}&appKey=${this.appKey}`
      )
      .subscribe((results: resultsResponse) => {
        this.results = results;
      });
  }

  constructor(private http: HttpClient) {
    this.appId = keys.appId;
    this.appKey = keys.appKey;
  }

  sortByFoodNameAsc() {
    this.results.hits.sort((a, b) => {
      if (a.fields.item_name < b.fields.item_name) {
        return -1;
      }
      if (a.fields.item_name > b.fields.item_name) {
        return 1;
      }
      return 0;
    });
  }

  sortByFoodNameDesc() {
    this.results.hits.sort((a, b) => {
      if (a.fields.item_name < b.fields.item_name) {
        return 1;
      }
      if (a.fields.item_name > b.fields.item_name) {
        return -1;
      }
      return 0;
    });
  }
}
