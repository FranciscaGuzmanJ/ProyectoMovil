import { Component, OnInit } from '@angular/core';
import { Firestore, collection, query, where, orderBy, getDocs, doc } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  imagenes: any[] = []; // Array para almacenar las URLs de las imágenes

  constructor(private router: Router, private firestore: Firestore, private authService: AuthService) {}

  async ngOnInit() {
    const navigation = history.state;
    await this.cargarImagenes();
  }

  async cargarImagenes() {
    const user = this.authService.getCurrentUser();
    if (user) {
      const userRef = doc(this.firestore, `users/${user.uid}`); // Referencia al usuario actual
      const imageCollectionRef = collection(this.firestore, 'imagenes');
      const imagenesQuery = query(
        imageCollectionRef,
        where('uid', '==', userRef), // Filtrar por referencia al documento de usuario
        orderBy('fecha', 'desc')
      );

      const querySnapshot = await getDocs(imagenesQuery);
      querySnapshot.forEach((doc) => {
        this.imagenes.push(doc.data());
      });
    } else {
      console.error('No se encontró el usuario.');
    }
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/pag-espera']);
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}
