import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ingredient, MealResponse, Platos, Root } from '../interfaces/interface'

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
  constructor(private http:HttpClient) { }

  getIngredientes() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    return this.http.get<MealResponse>(url, this.options);
  }
  getPlatos() {
    return this.http.get<Root>('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast', this.options);
  }

}
