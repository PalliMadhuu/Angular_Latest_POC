import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const isAuthenticated=localStorage.getItem('authToken') !==null;
  if(!isAuthenticated){
   router.navigate(['/login'])
  }
    return isAuthenticated;
};
