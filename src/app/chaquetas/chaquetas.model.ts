// Creamos una plantilla (una clase), que representará a cualquier producto
export interface Producto{
    id : string;
    nombre : string,
    imagenURL : string;
    talla : string;
    precio : number;
    descripcion : string,
    importado : boolean;
}