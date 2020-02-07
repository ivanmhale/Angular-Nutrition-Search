import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as keys from './keys.json';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

interface ResultsResponse {
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
  providedIn: 'root'
})
export class SearchingService {
  rootUrl = 'https://api.nutritionix.com/v1_1';
  appId: string;
  appKey: string;
  results: ResultsResponse = null;
  resultsUpdated = new EventEmitter<ResultsResponse>();
  foodSelected = new EventEmitter<any>();

  searchViaTerm(term: string) {
    this.http
      .get(
        // tslint:disable-next-line: max-line-length
        `${this.rootUrl}/search/${term}?results=0:50&fields=item_name,brand_name,item_id,nf_calories&appId=${this.appId}&appKey=${this.appKey}`
      )
      .subscribe((res: ResultsResponse) => {
        console.log('results: ', res);
        this.resultsUpdated.emit(res);
      });
  }

  searchViaId(id: string) {
    this.http
      .get(
        `${this.rootUrl}/item?id=${id}&appId=${
          this.appId
        }&appKey=${this.appKey}`
      ).subscribe((res) => {
        console.log('Food result: ', res);
        this.foodSelected.emit(res);
      })
  }

  constructor(private http: HttpClient) {
    this.appId = keys.appId;
    this.appKey = keys.appKey;
  }
}
