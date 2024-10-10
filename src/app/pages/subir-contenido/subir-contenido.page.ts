import { Component } from '@angular/core';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir-contenido',
  templateUrl: './subir-contenido.page.html',
  styleUrls: ['./subir-contenido.page.scss'],
})
  export class SubirContenidoPage {

    constructor(private router: Router) {}
  
    async takePhoto() {
      try {
        const image = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
        });
  //hacerunalista, quizas sea eso el error
        const imageUrl = image.webPath; // URL de la imagen para usar en la web
        // Agregar la imagen a la lista en el servicio o pasarla a la página
        this.router.navigate(['/bienvenido/bienvenido'], { state: { imageUrl } });
      } catch (error) {
        console.error('Error al tomar la foto:', error);
      }
    }
  }