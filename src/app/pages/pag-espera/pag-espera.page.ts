import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-pag-espera',
  templateUrl: './pag-espera.page.html',
  styleUrls: ['./pag-espera.page.scss'],
})


export class PagEsperaPage implements OnInit {
  items: any[] = []; // Array para almacenar las imágenes
  
  ngOnInit() {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  
  login:any;
  constructor(public alertController:AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
    this.getImages();
    //recibo el parametro enviado desde la page Login
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){

        this.router.navigate(['/bienvenido']);
      }
    });
  }
  getImages() {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '985128acf9msha23e8b38dc632e5p1100a0jsnf83c4c9ba911', // Reemplaza con tu clave API
      'x-rapidapi-host': 'pinterest-image-api1.p.rapidapi.com'
    });

    this.http.get('https://pinterest-image-api1.p.rapidapi.com/images?term=persons', { headers })
      .subscribe(
        (response: any) => {
          this.items = response.images; // Asigna los datos de las imágenes al array
          console.log('Images:', this.items);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
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
import { HttpClient } from '@angular/common/http';


