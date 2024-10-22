import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  items: { image: string; date: string }[] = [];
  usuario: string;
  constructor(private authService: AuthService, private router: Router) {
    // Inicializa tu lista con imágenes predeterminadas, si es necesario
    this.usuario = 'Usuario';
    this.items = [];
  }

  ngOnInit() {
    const navigation = history.state;
    if (navigation && navigation.imageUrl) {
      this.items.push({ image: navigation.imageUrl, date: new Date().toLocaleDateString() });
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

