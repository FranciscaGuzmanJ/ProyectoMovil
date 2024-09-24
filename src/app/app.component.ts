import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, add, images, menu } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
   
    addIcons({ home, add, images, menu });
  }
}