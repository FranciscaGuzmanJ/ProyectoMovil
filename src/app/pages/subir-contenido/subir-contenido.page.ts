import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-subir-contenido',
  templateUrl: './subir-contenido.page.html',
  styleUrls: ['./subir-contenido.page.scss'],
})
export class SubirContenidoPage {
  imagenUrl: string | undefined;

  constructor(private firestore: Firestore, private authService: AuthService) {}

  async subirImagen() {
    try {
      // Capturar imagen desde la cámara
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      // Verificar que la URL de la imagen no sea undefined
      if (image.webPath) {
        const imageUrl = image.webPath;

        // Obtener la imagen como blob
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = async () => {
          const base64data = reader.result as string;
          const storage = getStorage();
          const storageRef = ref(storage, `imagenes/${new Date().getTime()}.jpg`); // Nombre único para la imagen

          // Subir la imagen en formato base64
          await uploadString(storageRef, base64data, 'data_url');

          // Obtener la URL de descarga
          const downloadURL = await getDownloadURL(storageRef);

          // Guardar la URL de la imagen en Firestore
          const uid = this.authService.getCurrentUser()?.uid; // Obtener el UID del usuario actual
          const imageDocRef = collection(this.firestore, 'imagenes');
          await addDoc(imageDocRef, {
            uid: uid,               // UID del usuario
            fecha: new Date(),      // Fecha de subida
            imagen: downloadURL      // URL de la imagen en Firebase Storage
          });

          // Mostrar la URL de la imagen
          this.imagenUrl = downloadURL;
          console.log('Imagen cargada y guardada:', downloadURL);
        };

        reader.readAsDataURL(blob);
      } else {
        console.error('Error: No se pudo obtener la URL de la imagen.');
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  }
}
