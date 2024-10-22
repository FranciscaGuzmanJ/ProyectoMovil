import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, add, images, menu } from 'ionicons/icons';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeFirebase();
    addIcons({ home, add, images, menu });
  }
  initializeFirebase() {
    const app = initializeApp(environment.firebaseConfig); 
    const analytics = getAnalytics(app);
    console.log('Firebase initialized with Analytics');
  }
}