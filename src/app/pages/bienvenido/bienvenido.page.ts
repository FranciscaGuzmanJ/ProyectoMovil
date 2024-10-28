import { Component, OnInit } from '@angular/core';
import { Firestore, collection, query, where, orderBy, getDocs } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service'; // Asegúrate de tener el servicio de autenticación
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  imagenes: any[] = []; // Array para almacenar las URLs de las imágenes

  constructor(private router: Router,private firestore: Firestore, private authService: AuthService) {}

  async ngOnInit() {
    await this.cargarImagenes();
  }

  async cargarImagenes() {
    const user = this.authService.getCurrentUser(); // Método para obtener el usuario actual
    if (user) {
      const imageCollectionRef = collection(this.firestore, 'imagenes');
      const imagenesQuery = query(
        imageCollectionRef,
        where('uid', '==', user.uid), // Filtrar por UID
        orderBy('fechaCreado', 'desc') // Ordenar por fecha en orden descendente
      );

      const querySnapshot = await getDocs(imagenesQuery);

      // Recorrer los documentos y guardar las URLs
      querySnapshot.forEach((doc) => {
        this.imagenes.push(doc.data());
      });
    } else {
      console.error('No se encontró el usuario.');
    }
  }
  logout() {
    this.authService.logout().then(() => {
      console.log('Sesión cerrada');
      this.router.navigate(['/pag-espera']); // Redirige a la página de espera
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
}
}
