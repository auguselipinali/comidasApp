import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Ingredient } from '../interfaces/interface';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  arrayIngredient: Ingredient[] = [];
  constructor(private servicioIngredient:ServiciosService) {}
  ngOnInit() {
    this.servicioIngredient.getIngredientes().subscribe(response => {
      console.log(response);
      this.arrayIngredient = response.meals;
    });
  }
}
