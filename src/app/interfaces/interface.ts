export interface Ingredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string | null;
  }
  
export interface MealResponse {
    meals: Ingredient[];
  }