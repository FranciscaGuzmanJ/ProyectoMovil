import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  items: { image: string; date: string }[] = [];
  usuario: string;
  constructor() {
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
}
