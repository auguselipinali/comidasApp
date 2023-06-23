import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../services/servicios.service';
import { Ingredient, Platos } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  arrayIngredient: Ingredient[] = [];
  mostrarFiltro: boolean = false;
  arrayFiltroIngredient: Ingredient[] = [];
  constructor(
    private router: Router,
    private servicioIngredient: ServiciosService
  ) {}

  ngOnInit() {
    this.servicioIngredient.getIngredientes().subscribe(response => {
      console.log(response);
      this.arrayIngredient = response.meals;
    });
  }

  verMenu(ingredient: string) {
    this.servicioIngredient.getIdIngredient(ingredient);
  
  }
  filterIngredient(event:any) {

    this.arrayFiltroIngredient = this.arrayIngredient.filter(n => n.strIngredient === event.detail.value);
    this.mostrarFiltro = true;
  }    

  mostrarTodos() {
    this.mostrarFiltro = false;
  }
}