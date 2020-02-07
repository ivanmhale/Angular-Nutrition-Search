export default interface FoodResult {
  item_id: string;
  item_name: string;
  brand_name: string;
  item_description: string;
  nf_calories: number;
  nf_total_fat: number;
  nf_cholesterol: number;
  nf_sodium: number;
  nf_total_carbohydrate: number;
  nf_protein: number;
  nf_servings_per_container: number;
  nf_serving_size_qty: number;
  nf_serving_size_unit: string;
}