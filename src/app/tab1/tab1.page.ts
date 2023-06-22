import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Ingredient, Platos } from '../interfaces/interface';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  arrayIngredient: Ingredient[] = [];
  arrayPlatos: Platos[] = [];
  constructor(private servicioIngredient:ServiciosService) {}
  ngOnInit() {
    this.servicioIngredient.getIngredientes().subscribe(response => {
      console.log(response);
      this.arrayIngredient = response.meals;
    });
    this.servicioIngredient.getPlatos().subscribe(responsePlatos => {
      console.log(responsePlatos);
      this.arrayPlatos = responsePlatos.meals;
  });
}}