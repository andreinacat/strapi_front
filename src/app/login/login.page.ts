import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import axios, { Axios } from 'axios';

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

  try{
    
    const { data } = await axios.post('http://localhost:1337/auth/local', {
    identifier: usuario,
    password: contrasenia,
    });
    console.log(data);
    let token_jwt = data.jwt;
    localStorage.setItem("jwt",token_jwt);
    const alert = await this.alertController.create({
      header: 'Bienvenido ' + data.user.username,
      message: 'Usted se ha logueado con exito',
      buttons: ['Aceptar']
    });

    await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', data.user.role.name);
      this.router.navigate(['/home'])

  } catch (error) {
    console.log(error);
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'No se ha podido loguear',
      buttons: ['Aceptar']
    });
    await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }
  

  
  }

  

}
