import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ChaquetasService {

    private productos = [
  	{
    	id : '1',
    	nombre : 'Jacket 1',
    	imagenURL : 'https://images-na.ssl-images-amazon.com/images/I/814baEGolXL._AC_UL1500_.jpg',
      talla: 'L',
      precio: 65000,
    	descripcion : ['Chaqueta Impermeable','Color azul con detalles amarillos']
  	},
  	{
    	id : '2',
    	nombre : 'Jacket 2',
    	imagenURL : 'https://m.media-amazon.com/images/I/81Y9-zulqUL._AC_UY679_.jpg',
      talla: 'M',
      precio: 50000,
    	descripcion : ['Chaqueta de Montaña','Color azul con detalles naranjos']
  	},
    {
    	id : '3',
    	nombre : 'Jacket 3',
    	imagenURL : 'https://www.trespass.com/media/catalog/product/cache/ca61fa9d3bd05ef6fd63a3b37d6f22d9/o/s/oskar-majkcan20007-cbn-a.jpg',
      talla: 'S',
      precio: 55000,
    	descripcion : ['Chaqueta de Plumas','Color negro/gris']
  	},
	]

  constructor() { }

  // Creación de los Métodos del Mantenedor:
  // Listar todos los Productos:
  getChaquetas(){
    return [...this.productos]
  }

  // Buscar un producto especifico por su Identificador:
  getChaquetasById(chaquetaId: string){
    return {... this.productos.find( serv => {
      return serv.id === chaquetaId
    })
    }
  }

  // Agregar un Producto:
  addChaquetas(nombre : string, imagenURL : string, talla: string, precio: number, descripcion: string[]){
    this.productos.push(
      {
      // Conseguimos el largo total de la lista y le sumamos 1 más. Luego parseamos a String el Id.
      id : this.productos.length + 1 + "",
      nombre,
      imagenURL,
      talla,
      precio,
      descripcion
    }
    )
  }

  // Eliminar un Producto:
  deleteChaquetas(chaquetaId : string){
    // Le pasamos el id del producto por parametro para usarlo como comparacion, filtramos el objeto
    // Creamos un nuevo arreglo sin el elemento que se ha filtrado, y se sobreescribe a la lista anterior
    this.productos = this.productos.filter(serv => {
      // Luego retorno a todos los elementos EXCEPTO del objeto encontrado por el id parametro de entrada
      return serv.id !== chaquetaId
      })
  }    
}
