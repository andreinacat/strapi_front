import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  // Método que recibe la Información del Formulario:
  login(form){
  var usuario = form.value["usuario"];
  var contrasenia = form.value["contrasenia"];

  if(usuario == "admin" && contrasenia == "123"){
    localStorage.setItem("datos",usuario);
     this.router.navigate(['/home'])
     console.log(form.value)
   }
  }

}
