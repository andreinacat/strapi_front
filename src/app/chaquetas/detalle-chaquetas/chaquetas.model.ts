//Creamos una plantilla a modo de clase que va a representar cualquier producto
export interface Producto{
    id : string;
    nombre : string;
    imagenURL : string;
    talla : number;
    precio : number;
    descripcion : string[];

}