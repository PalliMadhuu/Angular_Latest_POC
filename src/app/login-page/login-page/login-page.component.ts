import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private router: Router, private apiService: ApiServiceService) {}
  onRegistrationClick() {
    this.router.navigate(['/register']);
  }

  onLogin(formData: any): void {
    this.apiService
      .getCredsInfo(formData.value.emailId)
      .subscribe((response: any) => {

        try {
          
            if (response[0].password === formData.value.password) {
              localStorage.setItem('authToken',response[0].id)
              this.router.navigate(['/home']);
            }
        } catch (error: any) {
          console.log(error);
        }
      });
  }
}
