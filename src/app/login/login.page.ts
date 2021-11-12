import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  // Método que recibe la Información del Formulario:
  async login(form){
  var usuario = form.value["usuario"];
  var contrasenia = form.value["contrasenia"];

  if(usuario == "admin" && contrasenia == "123"){

      const alert = await this.alertController.create({
        header: 'Bienvenido ' + usuario,
        message: 'Ingreso Exitoso',
        buttons: ['Aceptar']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    


    localStorage.setItem("datos",usuario);
     this.router.navigate(['/home'])
     console.log(form.value)
   }
  }

  

}
