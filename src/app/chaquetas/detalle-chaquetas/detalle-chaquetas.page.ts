import { Component, OnInit } from '@angular/core';
// Importamos una Librería:
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../chaquetas.model';
// Importamos al Servicio, para conectar nuestro Servicio:
import { ChaquetasService } from '../chaquetas.service';

@Component({
  selector: 'app-detalle-chaquetas',
  templateUrl: './detalle-chaquetas.page.html',
  styleUrls: ['./detalle-chaquetas.page.scss'],
})
export class DetalleChaquetasPage implements OnInit {

  datos : Producto;

  // Creamos una variable privada pata capturar la URL activa, que luego llamaremos en el Init (Inializador)
  constructor(private activatedRoute: ActivatedRoute, private chaquetasServicio: ChaquetasService,
              private route: Router) { }

  ngOnInit() {
    // Para luego buscar el productor por Id que viene dentro de nuestra URL activa, nos suscribimos a la URL
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // Creamos una variable constante, para capturar el Id que proviene de la URL
      const valor = paramMap.get('chaqID')
      console.log(valor)

      // Llamamos al Servicio y le pasamos el Id de la URL previamente capturada
      this.datos = this.chaquetasServicio.getChaquetasById(valor)
      console.log(this.datos)


    
     } )
  }

  // Método Eliminar:
  eliminarChaqueta(){
    console.log("eliminado");
    this.chaquetasServicio.deleteChaquetas(this.datos.id)
    // Luego redireccionamos a la página de productos:
    this.route.navigate(['/chaquetas']);
  }

}
