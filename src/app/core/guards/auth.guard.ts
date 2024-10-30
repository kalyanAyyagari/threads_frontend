import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token'); // Check for JWT token

  if (token) {
    return true; // Token exists, allow access to the feed
  } else {
    router.navigate(['/auth/login']); // No token, redirect to login
    return false;
  }
};
