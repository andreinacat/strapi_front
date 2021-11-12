import { Component, OnInit } from '@angular/core';
// Importamos una Librería, para enrrutar:
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

  // Creamos el objeto "producto", como una variable ANY para recibir cualquier tipo de dato desde nuestra API
  producto: any = [];
  talla: any = [];
  // Creamos una variable privada llamada "idproducto", para rescatar el id del producto de nuestra API
  private idproducto;

  // Creamos una variable privada pata capturar la URL activa, que luego llamaremos en el Init (Inializador)
  constructor(private activatedRoute: ActivatedRoute, private chaquetasServicio: ChaquetasService,
    private route: Router) { }

  ngOnInit() {
    // Para luego buscar el productor por Id que viene dentro de nuestra URL activa, nos suscribimos a la URL
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // Creamos una variable constante, para capturar el Id que proviene de la URL
      const valor = paramMap.get('chaqID')
      this.idproducto = valor;
      console.log(valor)

      // Llamamos al Servicio y le pasamos el Id de la URL previamente capturada, estando suscritos en tiempo real
      this.chaquetasServicio.getChaquetasById(valor).subscribe(
        (respuesta: any) => {
          this.producto = respuesta
          console.log(respuesta)
          // Recuperar Id Talla y Nombre Talla
          this.chaquetasServicio.getTallaById(this.producto.talla.id).subscribe(
            (respuesta: any) => {
              this.talla = respuesta
              console.log(respuesta)
            },
            (error) => {
              console.log(error)
            }
          )
        },
        (error) => {
          console.log(error)
        }
      )
      console.log(this.producto)

    })
  }

  // Método Eliminar:
  eliminarChaqueta() {
    console.log("eliminado");
    this.chaquetasServicio.deleteChaquetas(this.producto.id).subscribe(
      (respuesta: any) => {
        this.producto = respuesta
        console.log(respuesta)
        this.route.navigate(['/chaquetas'])
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
  redireccionActualizar() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // Creamos una variable constante, para capturar el Id que proviene de la URL
      const valor = paramMap.get('chaqID')


      this.route.navigate(['/actualizar-chaqueta/' + valor]);
    })
  }

}
