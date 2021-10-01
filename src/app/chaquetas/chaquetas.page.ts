import { Component, OnInit } from '@angular/core';
import { ChaquetasService } from './chaquetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chaquetas',
  templateUrl: './chaquetas.page.html',
  styleUrls: ['./chaquetas.page.scss'],
})
export class ChaquetasPage implements OnInit {
  private productos = []

  constructor(private servicioProductos: ChaquetasService , private ruta: Router) { }

  ngOnInit() {
	this.productos = this.servicioProductos.getChaquetas();
  }

  // Refrescar la nueva lista, una vez borrado algun elemento (sobre cargar la lsta):
  ionViewWillEnter(){
    this.productos = this.servicioProductos.getChaquetas();
  }

  // Dirigir al html de Agregar-Item
  redireccionAgregar(){
    this.ruta.navigate(['/agregar-item']);

  }
 

}
