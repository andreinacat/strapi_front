import { Component, OnInit } from '@angular/core';
// Importamos la clase del Servicio, para conectar el Modulo con el Servicio
import { ChaquetasService } from './chaquetas.service';
// Enrutador para redireccionar
import { Router } from '@angular/router';

@Component({
  selector: 'app-chaquetas',
  templateUrl: './chaquetas.page.html',
  styleUrls: ['./chaquetas.page.scss'],
})
export class ChaquetasPage implements OnInit {
  // Creación de variable "productos" de tipo generica (ANY) para que pueda recibir cualquier tipo de dato.
  private productos: any = []

  constructor(private servicioProductos: ChaquetasService , private ruta: Router) { }

  ngOnInit() {
  // El objeto "productos" estará suscrito en linea a nuestra API en tiempo real
	this.servicioProductos.getChaquetas().subscribe(
    // Realización de 2 promesas para el método abarcando 2 posibilidades al llamar al método.
    (resp) => { 
      this.productos = resp 
      localStorage.setItem("nuevoId", this.productos[this.productos.length-1].id+1)
      console.log(this.productos[this.productos.length-1].id+1)
    },
    (error) => { console.log(error) }
  )
  }

  // Refrescamos la nueva lista, sobrecargamos la lista, suscritos a la API
  ionViewWillEnter(){
    this.servicioProductos.getChaquetas().subscribe(
      // Realizamos 2 promesas del método para abarcar las 2 posibilidades al llamar el metodo, lo bueno y el error
      (resp) => { this.productos = resp 
                  localStorage.setItem("nuevoId", this.productos[this.productos.length-1].id+1)
                  console.log(this.productos[this.productos.length-1].id+1)
      },
      (error) => { console.log(error) }
    )
  }

  // Dirigir al html de Agregar-Item
  redireccionAgregar(){
    this.ruta.navigate(['/agregar-item']);
  }

}
