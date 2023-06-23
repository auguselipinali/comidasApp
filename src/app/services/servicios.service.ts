import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root, Platos, MealResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };
  platos: Platos[] = [];
  ingrediente: Platos [] = [];
  constructor(private http: HttpClient) { }

  getIngredientes(){
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    return this.http.get<MealResponse>(url, this.options);
  }

  getPlatosPorIngrediente(ingredient: string){
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}';
    return this.http.get<Root>(url, this.options);
    
  }

  getIdIngredient(ingredient: string){
    return this.getPlatosPorIngrediente(ingredient).subscribe(response => {
      console.log(response);
      this.ingrediente = response.meals;
    });
    
  }

  

  setPlatos(platos: Platos[]) {
    this.platos = platos;
  }

  getPlatos(): Platos[] {
    return this.platos;
  }
}