import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page/registration-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent,RegistrationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
}
