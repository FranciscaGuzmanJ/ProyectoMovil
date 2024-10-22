import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  login: string;  // Definir la propiedad


  constructor() {
    this.login = 'Usuario';  // Asignar un valor inicial o traer el valor de un servicio
  }
  //usuario?:String;
 
  //Construyo un modelo para limpiar
 

  constructor() {
  }
 

}
