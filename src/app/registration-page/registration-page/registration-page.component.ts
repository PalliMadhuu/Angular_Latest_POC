import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {

  constructor(private router: Router,private apiService:ApiServiceService) { 
  }
  navigateToLogin(){
    this.router.navigate(['/login'])
  }
  ngOnChanges(changes: any): void {
    console.log('ngOnChanges called!', changes);
  }



  ngDoCheck(){
    console.log('ngDoCheck called');
  }
  onSubmit(form:any){
    if(form.valid){
      if(form.value.password !== form.value.cnfmPswd ){
        form.controls['cnfmPswd'].setErrors({passwordMismatch:true})
      }
      else{
        form.controls['cnfmPswd'].setErrors({passwordMismatch:false});
        this.apiService.saveUserInfo(form.value).toPromise().then((response:any)=>{
          this.navigateToLogin();
        }).catch((err:any)=>{
          console.log(err);
        })

      }
    }
  }

}
