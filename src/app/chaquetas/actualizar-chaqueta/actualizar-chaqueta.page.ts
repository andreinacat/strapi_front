import { Component, OnInit } from '@angular/core';
import { ChaquetasService } from '../chaquetas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TallaServService } from '../talla/talla-serv.service';

@Component({
  selector: 'app-actualizar-chaqueta',
  templateUrl: './actualizar-chaqueta.page.html',
  styleUrls: ['./actualizar-chaqueta.page.scss'],
})

export class ActualizarChaquetaPage implements OnInit {

  producto: any = [];
  talla: any = [];
  listado: any = [];

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
     
      this.chaquetaserv.ActualizarProducto(valor, nombre.value, talla.value, precio.value, descripcion.value, importa ).subscribe(
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

  

}
