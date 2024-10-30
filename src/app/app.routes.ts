import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('./feature/auth/auth.router').then(r => r.authRoutes),
  },
  { path: 'home',
    loadChildren: () => import('./feature/feed/feed.routes').then(r => r.feedRoutes),
    // canActivate: [authGuard]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' } // Redirect to login if no other path matches
];
