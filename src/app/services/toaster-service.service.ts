import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor(private matSnack:MatSnackBar) { }

  successToastMessage(message:string){
      this.matSnack.open(message, 'Close', {
        duration: 3000, 
        horizontalPosition: 'right',
        verticalPosition: 'top', 
      });
  
    }
    showErrorMessage() {
      this.matSnack.open('Something went wrong please try again.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
}
