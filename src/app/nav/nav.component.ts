import { Component, OnInit } from "@angular/core";
import { SearchingService } from "../searching.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  term = "";
  constructor(private http: SearchingService) {}

  ngOnInit() {}

  submit() {
    this.http.searchViaTerm(this.term);
  }
}
