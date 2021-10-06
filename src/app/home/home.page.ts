import { Component, OnInit , ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  usuario = localStorage.getItem("datos")
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  sliderOne: any;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor( private ruta : Router) { 
     
     //Objeto que contiene los atributos booleanos para saber si esta al comienzo o al final de la 
     //lista de imagenes, ademas de la lista de los nombres de los archivos colocados en assets 
     // para otorgarselos por parametro dentro del html 
     this.sliderOne =
     {
       isBeginningSlide: true,
       isEndSlide: false,
       slidesItems: [
         {
           id: 100
         },
         {
           id: 200
         },
         {
           id: 300
         },
       ]
     };
  }

  ngOnInit() {
  }
// metodo no implementado para mover la slide arrastrandola a la siguiente
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  // metodo no implementado para mover la slide arrastrandola a la anterior
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  // metodo que se llama cada vez que una slide es cambiada por arrastar o navegar
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  
  // llama a los metodos que chequean si la slide mostrada es la primera 
  // o la ultima para desabilitar la navegacion  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
 // metodo que chequea si el slider muestra la primera diapositiva
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  // metodo que chequea si el slider muestra la ultima diapositiva
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  redireccionarChaquetas(){
    this.ruta.navigate(['/chaquetas']);

  }
}
