import { Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'login',component:LoginPageComponent},
    {path:'register',component:RegistrationPageComponent},
    {path:'home',component:HomePageComponent,canActivate:[authGuard]}
];
