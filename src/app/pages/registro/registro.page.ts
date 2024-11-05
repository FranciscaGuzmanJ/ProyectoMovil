import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private firestore: Firestore) { }

  ngOnInit() {}

  async onRegister() {
    try {
      // Registrar el usuario
      const userCredential = await this.authService.register(this.usuario, this.password);
      const user = userCredential.user;

      // Crear una referencia al documento usando el UID del usuario directamente
      const userRef = doc(this.firestore, `users/${user?.uid}`);
      
      // Guardar el usuario en Firestore
      await setDoc(userRef, {
        mail: user?.email,          // Correo del usuario
        uid: user?.uid,            // UID del usuario como referencia
        fechaCreado: new Date(),  // Fecha de creación
      });

      // Redirigir a la página de bienvenida después de un registro exitoso
      this.router.navigate(['/bienvenido']);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }
}
