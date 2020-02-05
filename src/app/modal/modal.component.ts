import { Component, OnInit } from '@angular/core';
import Food from '../model/food';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
private selectedFood: Food;

  constructor() { }

  ngOnInit() {
  }

}
