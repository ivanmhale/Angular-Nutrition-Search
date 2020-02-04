import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
private modal;  
  constructor() { }

  ngOnInit() {
  }
  openModal() {
    console.log("modal opened");
    
 }
}
