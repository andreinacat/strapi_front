import { Component, OnInit } from '@angular/core';
// Importamos una Librería:
import { ActivatedRoute } from '@angular/router';
// Importamos al Servicio, para conectar nuestro Servicio:
import { ChaquetasService } from '../chaquetas.service';

@Component({
  selector: 'app-detalle-chaquetas',
  templateUrl: './detalle-chaquetas.page.html',
  styleUrls: ['./detalle-chaquetas.page.scss'],
})
export class DetalleChaquetasPage implements OnInit {

  // Creamos una variable privada pata capturar la URL activa, que luego llamaremos en el Init (Inializador)
  constructor(private activatedRoute: ActivatedRoute, private chaquetasServicio: ChaquetasService) { }

  ngOnInit() {
    // Para luego buscar el productor por Id que viene dentro de nuestra URL activa, nos suscribimos a la URL
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // Creamos una variable constante, para capturar el Id que proviene de la URL
      const valor = paramMap.get('chaqID')
      console.log(valor)

      // Llamamos al Servicio y le pasamos el Id de la URL previamente capturada
      var datos = this.chaquetasServicio.getChaquetasById(valor)
      console.log(datos)

     } )
  }

}
