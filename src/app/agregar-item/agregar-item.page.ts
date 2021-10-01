import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChaquetasService } from '../chaquetas/chaquetas.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.page.html',
  styleUrls: ['./agregar-item.page.scss'],
})
export class AgregarItemPage implements OnInit {
  private productos = []

  constructor(private ruta : Router, private servicioProductos: ChaquetasService) { }

  ngOnInit() {
  }

  // Refrescar la nueva lista, una vez borrado algun elemento (sobre cargar la lsta):
  ionViewWillEnter(){
    this.productos = this.servicioProductos.getChaquetas();
  }
  
}
