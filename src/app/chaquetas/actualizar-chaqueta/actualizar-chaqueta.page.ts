import { Component, OnInit } from '@angular/core';
import { ChaquetasService } from '../chaquetas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TallaServService } from '../talla/talla-serv.service';
import axios, { Axios } from 'axios';

@Component({
  selector: 'app-actualizar-chaqueta',
  templateUrl: './actualizar-chaqueta.page.html',
  styleUrls: ['./actualizar-chaqueta.page.scss'],
})

export class ActualizarChaquetaPage implements OnInit {

  producto: any = [];
  talla: any = [];
  listado: any = [];
  private archivo: File = null;

  constructor(private activatedRuta: ActivatedRoute, private ruta: Router, private chaquetaserv: ChaquetasService, private tallaserv: TallaServService) { }

  ngOnInit() {

    this.activatedRuta.paramMap.subscribe(paramMap => {

      const valor = paramMap.get('chaqID')

      this.chaquetaserv.getChaquetasById(valor).subscribe(
        (respuesta: any) => {
          this.producto = respuesta
          console.log(respuesta)

          this.chaquetaserv.getTallaById(this.producto.talla.id).subscribe(
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
    })


    this.tallaserv.getTallas().subscribe(
      (respuesta: any) => {
        this.listado = respuesta
        console.log(respuesta)
      },
      (error) => {
        console.log(error)
      }


    )

  }
  actualizar(nombre, talla, precio, descripcion, importado) {
    this.activatedRuta.paramMap.subscribe(paramMap => {
      const valor = paramMap.get('chaqID')
      const importa = importado.checked
      console.log("archivo", this.archivo)
      if (this.archivo != null) {
        console.log(this.archivo)
        // Agregar Imagen paralelamente por separado:
        const STRAPI_BASE_URL = 'http://localhost:1337'
        const datos = new FormData()
        datos.append('files', this.archivo)
        datos.append('ref', 'Producto')
        datos.append('refId', valor)
        datos.append('field', 'imagenURL')

        // Definimos la ruta de STRAPI donde se cargarán las imagenes
        axios.post(`${STRAPI_BASE_URL}/upload`, datos)
      }



      this.chaquetaserv.ActualizarProducto(valor, nombre.value, talla.value, precio.value, descripcion.value, importa).subscribe(
        (respuesta: any) => {
          this.producto = respuesta

          this.ruta.navigate(['/chaquetas'])

        },
        (error) => {
          console.log(error)
        }

      )
    })
  }

  actualizarImagen(event) {
    // Actualizar Imagen en una variable global creada antes del constructor
    this.archivo = <File>event.target.files[0]
  }

}
