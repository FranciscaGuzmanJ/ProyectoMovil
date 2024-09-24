import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pag-espera',
  templateUrl: './pag-espera.page.html',
  styleUrls: ['./pag-espera.page.scss'],
})


export class PagEsperaPage implements OnInit {

 
 
  ngOnInit() {
 
  
 
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  
  login:any;
  constructor(public alertController:AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    //recibo el parametro enviado desde la page Login
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){

        this.router.navigate(['/bienvenido']);
      }
    });
  }

}


import { Injectable } from '@angular/core';



@Injectable({

 providedIn: 'root',

})

export class AuthService {

  ingresar(): boolean {

  // Aquí podrías comprobar si el usuario tiene un token o está autenticado

  return !!localStorage.getItem('userToken');

 }
}


import { Router } from '@angular/router';


