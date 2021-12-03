import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChaquetasService } from '../chaquetas.service';
import { TallaServService } from '../talla/talla-serv.service';
import { AlertController } from '@ionic/angular';
import axios, { Axios } from 'axios';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';




// Declaramos la variable REQUIRE de tipo ANY
declare var require: any


@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.page.html',
  styleUrls: ['./agregar-item.page.scss'],
})
export class AgregarItemPage implements OnInit {
  // Creación de una variable ANY para que el HTML pueda leer la información desde la API
  productos: any = []
  listado: any = []
  img1: any;
  private archivo: File;

  constructor(public httpClient: HttpClient, private router: Router, private chaquetaService: ChaquetasService, private tallaserv: TallaServService, private alertController: AlertController) { }

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
  agregarChaqueta(nombre, talla, precio, descripcion, importado) {
    //const axios = require('axios')
    const config = {
      onUploadProgress: function (progressEvent) {
        var porcentaje = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log("porcentaje", porcentaje)

      }
    }

    this.chaquetaService.addChaquetas(nombre.value, talla.value, precio.value, descripcion.value, importado.value).subscribe(
      (respuesta) => {
        console.log(respuesta)
        // Agregar Imagen paralelamente por separado:
        const STRAPI_BASE_URL = 'http://localhost:1337'
        const datos = new FormData()
        datos.append('files', this.archivo)
        datos.append('ref', 'Producto')
        datos.append('refId', localStorage.getItem("nuevoId"))
        datos.append('field', 'imagenURL')


        // Definimos la ruta de STRAPI donde se cargarán las imagenes
        axios.post(`${STRAPI_BASE_URL}/upload`, datos, config)
        // Redireccionamos a la pagina de productos de TresPass
        this.router.navigate(['/chaquetas'])
      },
      (error) => {
        console.log(error)
      }
    )



    //console.log(this.archivo)

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

  }

  capturarImagen(event) {
    // Guardado de la Imagen en una variable global creada antes del constructor
    // en caso de desechar borrar el bloque hasta axios
    //console.log("recibiendo archivo", this.archivo)
    //this.archivo = <File>event.target.files[0]
    //bloque --borrado
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      this.archivo = <File>event.target.files[0];
      reader.onload = (event: any) => {
        this.img1 = event.target.result;

        console.log("archivo", this.archivo);
      }
      reader.readAsDataURL(event.target.files[0]);  // to trigger onload
    }

    let fileList: FileList = event.target.files;
    return this.archivo

    //console.log("archivo1", file);
  }

  //bloque--borrado
}


