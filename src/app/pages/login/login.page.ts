import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AnimationController, IonButton } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import {  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild('loginButton', { read: ElementRef }) loginButton?: ElementRef<HTMLIonButtonElement>;
  //modelo login que permita obtener la info. de usuario y password
  login:any={
    usuario:"",
    password:""
  }
  //variable para obtener el nombre del campo vacío
  field:string="";
  constructor(public router: Router,public toastController:ToastController, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ingresar() {
    // Llamo a validateModel y verifico si hay un error
    const error = this.validateModel(this.login);
  
    if (!error) {
      // Si no hay error, continuar con el login
      let navigationExtras: NavigationExtras = {
        state: { login: this.login }
      };
      this.router.navigate(['/bienvenido'], navigationExtras);
      this.presentToast("top", "Bienvenido", 2500);
    } else {
      // Mostrar el mensaje de error en lugar de "Error - Falta tal campo"
      this.presentToast("middle", error);
    }
  }
  
  /**
   * validateModel para validar el ingreso de algo en los
   * campos de mi html mediante el modelo login
   */
  validateModel(model: any): string | null {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        return `El campo ${key} es obligatorio.`;
      }
  
      // Validar usuario: solo letras y sin espacios
      if (key === 'usuario') {
        const usuarioPattern = /^[a-zA-Z]+$/; // Solo letras, sin espacios
        if (!usuarioPattern.test(value as string)) {
          return "El usuario debe contener solo letras y sin espacios.";
        }
      }
  
      // Validar password: Una mayúscula al inicio, al menos un número y longitud de 7
      if (key === 'password') {
        const passwordPattern = /^[A-Z][a-zA-Z0-9]{6}$/; // Mayúscula al inicio, seguido de letras o números, longitud exacta 7
        const containsNumber = /\d/; // Al menos un número
        if (!passwordPattern.test(value as string) || !containsNumber.test(value as string)) {
          return "La contraseña debe comenzar con una mayúscula, tener al menos un número y tener 7 caracteres.";
        }
      }
    }
    
    // Si todo es correcto, retorno null (no hay error)
    return null;
  }
  
  

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }
}

