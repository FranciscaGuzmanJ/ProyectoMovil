import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage{
  usuario: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
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
