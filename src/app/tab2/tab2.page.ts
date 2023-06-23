import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Platos } from '../interfaces/interface';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
platosIngredientes : Platos[] = []

  constructor(private servicioIngredient: ServiciosService) {}
  ngOnInit(): void {
    this.platosIngredientes = this.servicioIngredient.ingrediente
    console.log(this.platosIngredientes, "PLATOSINGREDIENTES")
  }

}
