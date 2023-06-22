export interface Ingredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string | null;
  }
  
export interface MealResponse {
    meals: Ingredient[];
  }

  export interface Root {
    meals: Platos[]
  }
  
  export interface Platos {
    strMeal: string
    strMealThumb: string
    idMeal: string
  }
  