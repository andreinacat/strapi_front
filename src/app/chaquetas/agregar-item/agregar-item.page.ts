import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChaquetasService } from '../chaquetas.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.page.html',
  styleUrls: ['./agregar-item.page.scss'],
})
export class AgregarItemPage implements OnInit {
  private productos = []

  constructor(private router: Router, private servicioProductos: ChaquetasService,private chaquetaService: ChaquetasService) { }

  ngOnInit() {
  }

  // Refrescar la nueva lista, una vez borrado algun elemento (sobre cargar la lsta):
  ionViewWillEnter(){
    this.productos = this.servicioProductos.getChaquetas();
  }

  //Metodo para agregar
  agregarChaqueta(nombre, imagenURL, talla, precio, descripcion){


    var lista =[]

    lista.push(descripcion.value)

    this.chaquetaService.addChaquetas(nombre.value, imagenURL.value, talla.value, precio.value, lista);
    this.router.navigate(['/chaquetas']);
  }
  
}
