import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta según tu estructura
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => {
        console.log('User auth state:', user); // Esto te ayudará a ver el estado del usuario
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false; // Bloquear acceso
        }
      })
    );
  }
}
