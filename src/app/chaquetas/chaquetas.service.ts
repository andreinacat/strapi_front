import { Injectable } from '@angular/core';
//Importamos nuestra conexión a la API de TresPass
import { HttpClient } from '@angular/common/http';

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
  getChaquetas() {
    // Retornamos una lista de todos los productos desde nuestra API.
    return this.http.get('https://api-trespass.herokuapp.com/Productos');
  }

  // Buscar un producto especifico por su Identificador:
  getChaquetasById(chaquetaId: string) {
    // Se busca el elemento por Id y se retorna solo 1 objeto
    return this.http.get('https://api-trespass.herokuapp.com/Productos/' + chaquetaId);
  }

  // Agregar un Producto:
  addChaquetas(nombre: string, talla: string, precio: number, descripcion: string[], importado: boolean) {
    var datos = {

      "nombre": nombre,
      "talla": talla,
      "precio": precio,
      "descripcion": descripcion,
      "Importado": importado

    }
    return this.http.post('https://api-trespass.herokuapp.com/Productos/', datos);
  }

  // Eliminar un Producto:
  deleteChaquetas(chaquetaId: string) {
    return this.http.delete('https://api-trespass.herokuapp.com/Productos/' + chaquetaId);
  }

  getTallaById(tallaId: string) {
    return this.http.get('https://api-trespass.herokuapp.com/tallas/' + tallaId);
  }

  ActualizarProducto(chaqId: string, nombre: string, talla: string, precio: number, descripcion: string, importado: boolean) {

    var datos = {
      "nombre": nombre,
      "talla": talla,
      "precio": precio,
      "descripcion": descripcion,
      "Importado": importado

    }

    console.log("test", importado)
    return this.http.put('https://api-trespass.herokuapp.com/Productos/' + chaqId, datos);
  }
}
