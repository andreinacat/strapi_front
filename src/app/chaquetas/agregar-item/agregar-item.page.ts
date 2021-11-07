import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChaquetasService } from '../chaquetas.service';
import { TallaServService } from '../talla-serv.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.page.html',
  styleUrls: ['./agregar-item.page.scss'],
})
export class AgregarItemPage implements OnInit {
  // Creación de una variable ANY para que el HTML pueda leer la información desde la API
  productos: any = []
  listado: any = []
  constructor(private router: Router, private chaquetaService: ChaquetasService, private tallaserv: TallaServService) { }

  ngOnInit() {

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

  // Refrescar la nueva lista, una vez borrado algun elemento (sobre cargar la lsta):
  ionViewWillEnter() {
    this.productos = this.chaquetaService.getChaquetas();
  }

  //Metodo para agregar
  agregarChaqueta(nombre, imagenURL, talla, precio, descripcion) {
    // Creación de una lista de comentaeios, un Array de tipo String
    var lista = []

    if (descripcion.value !== "") {
      // Captura y guardado (push) de los valores del o los comentarios
      lista.push(descripcion.value)
    } else {
      // De lo contrario, dejamos la lista como nula
      lista = null;
    }

    // Guardado de los valores de los datos dentro del método agregar
    this.chaquetaService.addChaquetas(nombre.value, imagenURL.value, talla.value, precio.value, lista).subscribe(
      (respuesta) => {
        console.log(respuesta)
        // Redireccionamos a la pagina de productos de TresPass
        this.router.navigate(['/chaquetas'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
