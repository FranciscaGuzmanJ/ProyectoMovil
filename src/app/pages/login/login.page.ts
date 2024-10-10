import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // Importa Router para la redirección

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inyecta Router

  async onLogin() {
    try {
      const result = await this.authService.login(this.usuario, this.password);
      console.log('Login exitoso', result); // Verifica que el login fue exitoso
      this.router.navigate(['/bienvenido']);
    } catch (error) {
      console.error('Error en el login', error); // Para saber si hay algún problema
    }
  }
  

  async onRegister() {
    try {
      await this.authService.register(this.usuario, this.password);
      // Redirige a la página de bienvenida después de un registro exitoso
      this.router.navigate(['/bienvenido']);
        } catch (error) {
      console.error(error);
    }
  }
}