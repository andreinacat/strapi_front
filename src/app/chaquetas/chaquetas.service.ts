import { Injectable } from '@angular/core';
//Importamos nuestra conexión a la API de TresPass
import { HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ChaquetasService {

  // Creación de una variable generica tipo ANY (polimorfista) para nuestros productos.
  private productos: any[]

  // Creamos una variable "http" de tipo HttpClient para llamar los datos de nuestra API
  constructor(private http: HttpClient) { }

  // Creación de los Métodos del Mantenedor:
  // Listar todos los Productos:
  getChaquetas(){
    // Retornamos una lista de todos los productos desde nuestra API.
    return this.http.get('http://localhost:1337/Productos');
  }

  // Buscar un producto especifico por su Identificador:
  getChaquetasById(chaquetaId: string){
    // Se busca el elemento por Id y se retorna solo 1 objeto
    return this.http.get('http://localhost:1337/Productos/' + chaquetaId);
  }

  // Agregar un Producto:
  addChaquetas(nombre : string, imagenURL : string, talla: string, precio: number, descripcion: string[]){
    var datos = {
      "Nombre" : nombre,
      "ImagenURL" : imagenURL,
      "Talla" : talla,
      "Precio" : precio,
      "Descripcion" : descripcion[0]
    }
    return this.http.post('http://localhost:1337/Productos/', datos);
  }

  // Eliminar un Producto:
  deleteChaquetas(chaquetaId : string){
    return this.http.delete('http://localhost:1337/Productos/' + chaquetaId);
  }    

  getTallaById(tallaId: number){
    return this.http.get('http://localhost:1337/tallas/' + tallaId);
  }
}
