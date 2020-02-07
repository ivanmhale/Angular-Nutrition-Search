import { Component, OnInit } from "@angular/core";
import FoodResult from "../FoodResult";
import { SearchingService } from "../searching.service";
import * as SampleFood from "../food.sample.json";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  food: FoodResult = null;

  constructor(private http: SearchingService) {}

  unselectFood() {
    this.food = null;
  }

  ngOnInit() {
    this.http.foodSelected.subscribe(selection => {
      this.food = {
        item_id: selection.item_id,
        item_name: selection.item_name,
        brand_name: selection.brand_name,
        item_description: selection.item_description,
        nf_calories: selection.nf_calories,
        nf_total_fat: selection.nf_total_fat,
        nf_cholesterol: selection.nf_cholesterol,
        nf_sodium: selection.nf_sodium,
        nf_total_carbohydrate: selection.nf_total_carbohydrate,
        nf_protein: selection.nf_protein,
        nf_servings_per_container: selection.nf_servings_per_container,
        nf_serving_size_qty: selection.nf_serving_size_qty,
        nf_serving_size_unit: selection.nf_serving_size_unit
      };
    });
  }
}
